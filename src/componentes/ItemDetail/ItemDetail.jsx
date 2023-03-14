import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Box, Button, Divider, Grid, IconButton, Paper, Typography } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount";
import { styled } from "@mui/system";




const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    
    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
        }

        console.log(newItem)
    }

    const Img = styled("img")({
        width: 300,
        height: "100%",
        objectFit: "cover",
        objectPosition:"center",
        margin: '0 auto'
        })

    return (
        <Box sx={{display: 'flex', flexDirection:'Column', justifyContent:'center'}}>

            <Box sx={{ flexGrow: 1, display: "grid", gap: 2,maxWidth:'50%', m:'0 auto', justifyContent:'center', alignItems:'center'}}>
                <Typography variant="h4">{item.name}</Typography>
                <Img src={item.img} alt={item.name} />
                <Typography variant="body1">{item.marca}</Typography>
                <Box sx={{ m: "0 0 0 auto" }} component="p">
                    Precio: <strong>${item.price}</strong>
                    
            </Box>

            <ItemCount
                max={item.stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />

            <Box sx={{display:'flex', flexDirection:'column', maxWidth: '100%', mb:'30px'}}>
            <Typography variant="h6">Descripcion</Typography> 
            <Divider/>
            <Typography variant="body1">{item.description}</Typography>
            </Box>

        </Box>


            

            <Button sx={{maxWidth:'30%', m:'0 auto'}} onClick={handleVolver}>Volver</Button>
        </Box>
    )
}

export default ItemDetail