
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import { collection, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { LoginContext } from '../../context/LoginContext'
import { db } from '../../firebase/config'



const Checkout = () => {

    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] =useState(null)

    const { user, tryLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
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
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(values.nombre.length < 3) {
            alert('nombre invalido')
            return
        }
        if(values.direccion.length < 3) {
            alert('nombre invalido')
            return
        }
        if(values.telefono.length < 3) {
            alert('nombre invalido')
            return
        }
        
        const order = {
            cliente: values,
            items: cart.map((prod) => ({id: prod.id, name: prod.name, price: prod.price, cantidad: prod.cantidad })),
            total: totalCompra(),
            fecha: new Date()
        }

        console.log('submit', order);

        const productosRef = collection(db, 'productos')
            /* console.log(productosRef); */
        cart.forEach((item) => {
            const docRef = doc(productosRef, item.id)
                
            getDoc(docRef)
                .then((doc) => {
                    if(doc.data().stock >= item.cantida){
                        updateDoc(docRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    }else { alert('no hay Stock' + item.name) }
                    console.log(docRef);
                })
        })

        const ordersRef = collection(db, 'orders')

        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
    }

    if ( orderId ) {
        return (
            <Box>
                <Typography variant='h4'm={2} >Tu orden se Registro con Exito</Typography>
                <Divider/>
                <Typography variant='body1' m={2}>Guarda tu numero de Orden: {orderId}</Typography>
            </Box>
        )
    }

    if ( cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <hr />

            <Box display='Flex' flexDirection='column' alignItems='center' mt='20px'>
                <TextField
                    sx={{ m: 1, width: '25ch' }}
                    value={values.nombre}
                    onChange={handleInputValues}
                    required
                    id="nombre"
                    label="Nombre"
                    placeholder="Ingresa tu Nombre"
                />

                <TextField
                    sx={{ m: 1, width: '25ch' }}
                    value={values.apellido}
                    onChange={handleInputValues}
                    required
                    id="apellido"
                    label="Apellido"
                    placeholder="Ingresa tu Apellido"
                />

                <TextField
                    sx={{ m: 1, width: '25ch' }}
                    value={values.direccion}
                    onChange={handleInputValues}
                    required
                    id="direccion"
                    label="Direccion"
                    placeholder="Ingresa tu Direccion"
                />

                <TextField
                    sx={{ m: 1, width: '25ch' }}
                    value={values.email}
                    onChange={handleInputValues}
                    required
                    id="email"
                    label="Email"
                    placeholder="Ingresa tu Email"
                />

                <TextField
                    sx={{ m: 1, width: '25ch' }}
                    value={values.telefono}
                    onChange={handleInputValues}
                    required
                    id="telefono"
                    label="telefono"
                    placeholder="Ingresa tu Telefono"
                />


                <Button onClick={handleSubmit} sx={{ maxWidth: '100px', m: '15px' }} variant='outlined'>Siguiente</Button>

            </Box>
        </div>
    )
}

export default Checkout