import { useContext, useState } from "react"
import { Link, useNavigate, } from "react-router-dom"
import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount";
import { styled } from "@mui/system";
import { CartContext } from "../../context/CartContext";






const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)


    const [value, setValue] = useState("description");

    const navigate = useNavigate()

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
        width: 300,
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        margin: '0 auto'
    })

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (item.stock === 0) {
        return (
            <div>Sin Stock</div>
        )
    }
    


    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2} sx={{ m: '0 auto', maxWidth: '80%' }}>

                <Grid item xs={12} md={8} sx={{ maxWidth: '50%' }}>
                    <Box sx={{ display: 'flex' }}><Img src={item.img} alt={item.name} /></Box>
                </Grid>

                <Grid item xs={12} md={4} sx={{my:'50px'}}>
                    <Typography sx={{my:'20px'}} variant="h4">{item.name}</Typography>
                    <Typography sx={{my:'20px'}} variant="body1">{item.marca}</Typography>
                    <Box sx={{ m: "0 0 0 auto" }}>
                        Precio: <strong>${item.price}</strong>
                        {item.stock <= 5 &&
                            <p><strong>
                                {
                                    item.stock === 1
                                        ? `Ultimo Disponible`
                                        : `Quedan solo ${item.stock} unidades!`
                                }
                            </strong></p>}
                    </Box>
                    {
                        isInCart(item.id)
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
                        <div>{item.description}</div>
                    )}
                    {value === "reviews" && <div>Por el momento no hay reseñas disponibles</div>}
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
                        {/* {item.slice(0, 4).map((item, i) => (
                            <Item key={`${item.name}-${i}`} item={item} />
                        ))} */}
                    </Box>
                </Box>

            </Grid>

        </Box>
    )
}

export default ItemDetail