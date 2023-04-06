import { Box, Button} from "@mui/material"


const ItemCount = ( {max, cantidad, setCantidad, handleAgregar} ) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <Box sx={{m:'20px auto'}}>
            <Button 
                sx={{m:'5px', p:'5px', minWidth:'40px'}} 
                color={cantidad === 1 ? 'error' : 'primary'}
                disabled={cantidad === 1}
                onClick={handleRestar} 
                variant="outlined">
                    -
            </Button>

            <span>{cantidad}</span>

            <Button 
                sx={{m:'5px', p:'5px', minWidth:'40px'}}
                color={cantidad === max ? 'error' : 'primary'}
                disabled={cantidad === max}
                onClick={handleSumar} 
                variant="outlined">
                    +
            </Button>
            <br/>
            <Button 
                sx={{m:'0 auto'}} 
                onClick={handleAgregar} 
                variant="contained">
                    Agregar al carrito
            </Button>
        </Box>
    )
}

export default ItemCount