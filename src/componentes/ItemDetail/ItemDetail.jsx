import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Box, Button, Grid, IconButton, Paper, Typography } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount";
import { styled } from "@mui/system";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    
    const navigate = useNavigate()
    
    const handleVolver = () => {
        navigate(-1)
    }

    const Img = styled("img")({
        width: 200,
        height: "100%",
        objectFit: "cover",
        objectPosition:"center",
        })

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
            }

        console.log(newItem)
    }

    return (
        <Box >
                    
                    <Img src={item.img} alt={item.name} />
                    
                    
                    <Box sx={{ flexGrow: 1, display: "grid", gap: 2}}>
                        <Typography variant="h4">{item.name}</Typography>
                        <Typography variant="body1">{item.marca}</Typography>
                            <Box sx={{m:"0 0 0 auto"}} component="p">
                                Precio: <strong>${item.price}</strong>
                            </Box>

                    </Box>
            

            <ItemCount 
                max={item.stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />

            <Button onClick={handleVolver}>Volver</Button>
        </Box>
    )
}

export default ItemDetail