

import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito, Img } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>No tienes productos agregados</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div>
            <h2>Tu carrito de compras</h2>
            <hr/>

            {
                cart.map((prod) => (
                    <Box key={prod.id}>
                        <h4>{prod.name}</h4>
                        <Img src={prod.img} alt={prod.name}/>
                        <small>Precio unitario: ${prod.price} </small>
                        <small>Cantidad: {prod.cantidad}</small>
                        <p>Precio Total: ${prod.price * prod.cantidad}</p>
                        <Button 
                            onClick={() => eliminarDelCarrito(prod.id) } 
                            className="btn btn-danger"
                        >
                            <DeleteForeverIcon/>
                        </Button>
                        <hr/>
                    </Box>
                ))
            }

            <h3>TOTAL: ${totalCompra()}</h3>
            <Button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</Button>
            <Button key={'Checkout'} 
                    color="inherit"
                    component={Link}
                    to='/Checkout' 
                    className="btn btn-success">
                        Terminar mi Compra
            </Button>
        </div>
    )
}

export default Cart
