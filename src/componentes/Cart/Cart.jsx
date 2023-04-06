

import { Button, Divider, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito, Img } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <Box p='20px' display='flex' flexDirection='column' gap='20px'>
                <Box display='flex' alignItems='center' justifyContent='center' >
                    <img width='100%' src='./assets/img/carrito-vacio.gif' />
                    <Typography variant="h4" fontWeight='600' color='white' position='absolute'/*  top='15%' left='25%'  */backgroundColor='transparent' zIndex='10'>Tu carrito esta Vacio</Typography>
                </Box>
                
                <Button component={Link} sx={{ m:'0 auto' }} to="/" variant='contained'>Ir a comprar</Button>
            </Box>
        )
    }

    return (
        <Box maxWidth='60%' m='0 auto'>
            
            <Box>
            <Typography sx={{ m:'20px 50px' }} variant="h4">Tu carrito de compras</Typography>
            </Box>
            
            <Divider/>

            {
                cart.map((prod) => (
                    <Box sx={{border:'2px solid #000', borderRadius:'30px', m:'10px', p:'7px'}} display='flex' alignItems='center' justifyContent='space-evenly' key={prod.id}>
                        <Img src={prod.img} alt={prod.name}/>
                        <Box>
                            <h4>{prod.name}</h4>
                            {/* <small>Precio unitario: ${prod.price} </small> */}
                            <small>Cantidad: {prod.cantidad}</small>
                            <p>Precio Total: ${prod.price * prod.cantidad}</p>
                        </Box>
                            
                        <Button 
                            onClick={() => eliminarDelCarrito(prod.id) } 
                            color='error'
                        >
                            <DeleteForeverIcon/>
                        </Button>
                        
                    </Box>
                ))
            }
            <Box>
                <Typography variant="h6" m='20px'>TOTAL: ${totalCompra()}</Typography>
            </Box>
            <Button sx={{m:'10px'}} onClick={vaciarCarrito} color='error' variant="outlined">Vaciar carrito</Button>
            <Button key={'Checkout'}
                    /* sx={{m:'10px'}} */
                    component={Link}
                    to='/Checkout' 
                    color='success' 
                    variant="outlined">
                        Terminar mi Compra
            </Button>
        </Box>
    )
}

export default Cart
