
import { Alert, Box, Button, Divider, TextField, Typography } from '@mui/material'
import { collection, addDoc, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { LoginContext } from '../../context/LoginContext'
import { db } from '../../firebase/config'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { ListaDeCompra } from './ListaDeCompra'

const schema = Yup.object().shape({
    nombre: Yup.string()
        .min(3, 'Minimo 3 Caracteres')
        .max(20, 'Demasiado largo')
        .required('Este campo es Obligatorio'),
    apellido: Yup.string()
        .min(3, 'Minimo 3 Caracteres')
        .max(20, 'Demasiado largo')
        .required('Este campo es Obligatorio'),
    direccion: Yup.string()
        .min(6, 'Minimo 3 Caracteres')
        .max(20, 'Demasiado largo')
        .required('Este campo es Obligatorio'),
    telefono: Yup.number()
        .min(10, 'Minimo 10 Caracteres')

        .required('Este campo es Obligatorio'),
    email: Yup.string().email('Email Invalido').required('Este campo es Obligatorio'),
});




const Checkout = () => {

    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    /*     const [values, setValues] = useState({
            nombre: '',
            apellido:'',
            direccion: '',
            telefono: '',
            email: ''
    
        })
    
        const handleInputValues = (e) => {
    
            setValues({
                ...values,
                [e.target.id]: e.target.value
            })
        } */



    const generarOrden = async (values) => {

        const order = {
            cliente: values,
            items: cart.map((prod) => ({ id: prod.id, name: prod.name, price: prod.price, cantidad: prod.cantidad })),
            total: totalCompra(),
            fecha: new Date()
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'productos')

        const outOfStock = []

        const itemRef = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        const response = await getDocs(itemRef)

        response.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()

            addDoc(ordersRef, order)
                .then((doc) => {
                    setOrderId(doc.id)
                    vaciarCarrito()
                })
        } else {
            alert(`El productos ${outOfStock[0].name} no tiene stock`);
        }

    }

    if (orderId) {
        return (
            <Box display='flex' flexDirection='column' alignItems='center' m='20px auto'>
                <Typography variant='h3'>Tu orden se Registro con Exito</Typography>
                <Divider />
                <Typography sx={{ border: '2px solid #000', borderRadius: '30px', m: '10px', p: '15px' }} variant='body1'>Guarda tu numero de Orden: <strong>{orderId}</strong></Typography>
                <Divider />
                <img src='../assets/img/pedido-en-camino.gif' alt='Estamos preprando tu compra'/>

            </Box>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <Box>
            <Box display='flex' justifyContent='center' m='10px auto'>
                <Typography variant="h2" >Checkout</Typography>
            </Box>
            <Divider/>
            <Box sx={{ display: { xs:"block", sm:"flex" }, justifyContent:'space-evenly' }}>
                <Box>
                    <Formik
                        initialValues={{
                            nombre: '',
                            apellido: '',
                            direccion: '',
                            email: '',
                            telefono: ''
                        }}
                        validationSchema={schema}
                        onSubmit={generarOrden}>

                        {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (

                            <Box display='Flex' flexDirection='column' alignItems='center' mt='20px'>
                                <TextField
                                    sx={{ m: 1, width: '25ch' }}
                                    value={values.nombre}
                                    onChange={handleChange}
                                    required
                                    id="nombre"
                                    label="Nombre"
                                    placeholder="Ingresa tu Nombre"
                                />{errors.nombre && <Alert severity="error">{errors.nombre}</Alert>}
                                <TextField
                                    sx={{ m: 1, width: '25ch' }}
                                    value={values.apellido}
                                    onChange={handleChange}
                                    required
                                    id="apellido"
                                    label="Apellido"
                                    placeholder="Ingresa tu Apellido"
                                />
                                {errors.apellido && <Alert severity="error">{errors.apellido}</Alert>}
                                <TextField
                                    sx={{ m: 1, width: '25ch' }}
                                    value={values.direccion}
                                    onChange={handleChange}
                                    required
                                    id="direccion"
                                    label="Direccion"
                                    placeholder="Ingresa tu Direccion"
                                />
                                {errors.direccion && <Alert severity="error">{errors.direccion}</Alert>}
                                <TextField
                                    sx={{ m: 1, width: '25ch' }}
                                    value={values.email}
                                    onChange={handleChange}
                                    required
                                    id="email"
                                    label="Email"
                                    placeholder="Ingresa tu Email"
                                />
                                {errors.email && <Alert severity="error">{errors.email}</Alert>}
                                <TextField
                                    sx={{ m: 1, width: '25ch' }}
                                    value={values.telefono}
                                    onChange={handleChange}
                                    required
                                    id="telefono"
                                    label="telefono"
                                    placeholder="Ingresa tu Telefono"
                                />
                                {errors.telefono && <Alert severity="error">{errors.telefono}</Alert>}

                                <Button onClick={handleSubmit} disabled={isSubmitting} sx={{ maxWidth: '100px', m: '15px' }} variant='outlined'>Siguiente</Button>

                            </Box>
                        )}
                    </Formik>
                </Box>
                <Box>
                    <ListaDeCompra />
                </Box>
            </Box>


        </Box>
    )
}

export default Checkout