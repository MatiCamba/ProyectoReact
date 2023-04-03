import { Box, Button, Grid, IconButton, Paper, Typography } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";


const Item = ( {item} ) => {

    const { Img, agregarAlCarrito } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
        }

        agregarAlCarrito(newItem)
    }

    
    return (

        
            <Grid item xs={12} md={4} lg={3}>

                <Paper elevation={3}
                sx={{
                    display:"flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    overflow: "hidden",
                    mt: 3,
                    p:3,transition: "0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                        
                    }
                    }}>
                        <IconButton sx={{position:"absolute", ml: 19 }}>
                            <FavoriteBorderIcon />
                        </IconButton>

                        <Img src={item.img} alt={item.name} />
                    
                    
                    <Box sx={{ flexGrow: 1, display: "grid", gap: 2}}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body1">{item.marca}</Typography>
                            <Box sx={{m:"0 0 0 auto"}} component="p">
                                Precio: <strong>${item.price}</strong>
                            </Box>

                        <Button variant="contained" 
                                startIcon={<AddShoppingCartIcon />}
                                onClick={handleAgregar}>
                                Agregar al Carrito
                        </Button>
                        <Button component={Link} to={`/detail/${item.id}`} 
                                className='btn btn-primary'>
                                    Ver más
                        </Button>
                    </Box>
                </Paper>


            </Grid>
            
        

    )
}

export default Item