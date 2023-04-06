import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, } from "react-router-dom"
import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount";
import { styled } from "@mui/system";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from 'firebase/firestore'
import Item from '../item/item'
import { useParams } from "react-router-dom";



const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)


    const [productos, setProductos] = useState([])
    
    const [value, setValue] = useState("description");

    const navigate = useNavigate()

    const { categoryId } = useParams()
    
    useEffect(() => {

        setTimeout(() => {
            /* setLoading(true) */
            
            const productosRef = collection( db, "productos" )
            const q = categoryId
                    ? query(productosRef, where("category", "===", categoryId)/* limit(X) */)// para limitar los elementos que renderizo
                    : productosRef
            
            getDocs(q)
                .then((res) => {
                    const docs = res.docs.map((doc) => {
                        return {...doc.data(), category: doc.category}
                    })
                    console.log(docs);
                    setProductos(docs)
                })
                /* .finally(() => {
                    setLoading(false)
                }) */
            
        }, 1600);

    }, [categoryId])

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
        }

        agregarAlCarrito(newItem)
    }

    const Img = styled("img")({
        width: 'min(80vw, 500px)',
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        margin: '0 auto',
        marginTop:'4.5rem'
    })

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    /* if (item.stock === 0) {
        return (
            <div>Sin Stock</div>
        )
    } */
    


    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2} sx={{ m: '0 auto', maxWidth: '80%' }}>

                <Grid item xs={12} md={8} sx={{ maxWidth: '50%' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Img src={item.img} alt={item.name} />
                    </Box>
                </Grid>

                <Grid item xs={12} md={4} sx={{my:'50px'}}>
                    <Typography sx={{my:'20px'}} variant="h4">{item.name}</Typography>
                    <Typography sx={{my:'20px'}} variant="body1">{item.marca}</Typography>
                    <Box sx={{ m: "0 0 0 auto" }}>
                        Precio: <strong>${item.price}</strong>
                        {item.stock === 0
                            ? <Box m='20px'><Typography variant='body1'>Sin Stock Disponible</Typography></Box>
                            : item.stock <= 5 &&
                                <p><strong>
                                    {
                                        item.stock === 1
                                            ? `Ultimo Disponible`
                                            : `Quedan solo ${item.stock} unidades!`
                                    }
                                </strong></p>
                            }
                            
                    </Box>
                    {}
                    { item.stock === 0
                        ? <></>
                        : isInCart(item.id)
                            ? <Button
                                variant='outlined'
                                color="success"
                                component={Link}
                                to="/cart">
                                Terminar mi compra
                            </Button>
                            : <ItemCount
                                max={item.stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                handleAgregar={handleAgregar}
                            />
                    }
                </Grid>


                
                {/* INFORMATION */}
                <Box m="20px 0">
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="DESCRIPCION" value="description" />
                        <Tab label="RESEÑA" value="reviews" />
                    </Tabs>
                </Box>

                <Box display="flex" flexWrap="wrap" gap="15px">
                    {value === "description" && (
                        <Typography variant='body1'>{item.description}</Typography>
                    )}
                    {value === "reviews" && <Typography variant='body1'>Por el momento no hay reseñas disponibles</Typography>}
                </Box>

                <Button variant='contained' sx={{ maxWidth: '30%', m: '30px auto' }} onClick={handleVolver}>Volver</Button>

                {/* RELATED ITEMS */}
                <Box mt="20px" mb='50px' width="100%">
                    <Typography variant="h4" fontWeight="bold">
                        Productos Relacionados
                    </Typography>
                    <Box
                        mt="20px"
                        display="flex"
                        flexWrap="Nowrap"
                        gap="1rem"
                        justifyContent="space-between"
                    >
                        {productos.slice(0, 4).map((item, i) => (
                            <Item key={`${item.name}-${i}`} item={item} />
                        ))}
                    </Box>
                </Box>

            </Grid>

        </Box>
    )
}

export default ItemDetail