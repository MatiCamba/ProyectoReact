import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


export const ListaDeCompra = () => {

    const { cart, totalCompra, Img } = useContext(CartContext)

    return (
        <Box sx={{ border: '2px solid #000', borderRadius: '30px', m: '10px', p: '7px' }}>
            {
                cart.map((prod) => (
                    <Box display='flex' alignItems='center' justifyContent='space-evenly' key={prod.id}>
                        <Img src={prod.img} alt={prod.name} />
                        <Box>
                            <h4>{prod.name}</h4>
                            {/* <small>Precio unitario: ${prod.price} </small> */}
                            <small>Cantidad: {prod.cantidad}</small>
                            <p>Precio Total: ${prod.price * prod.cantidad}</p>
                        </Box>
                    </Box>
                ))
            }
            <Box>
                <Typography variant="h6" m='20px'>TOTAL: ${totalCompra()}</Typography>
            </Box>
        </Box>
    )
}
