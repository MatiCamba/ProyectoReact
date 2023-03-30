import React, { useContext } from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../context/CartContext';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 0,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));



const CartWidget = () => {

const { totalCantidad } = useContext(CartContext)

    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={totalCantidad()} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    )
}

export default CartWidget
