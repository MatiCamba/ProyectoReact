import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Img = styled("img")({
    width: 'min(80vw, 600px)',
    maxHeight: 600,
    objectFit: "cover",
    objectPosition:"center",
    }) 


export const Loding = () => {
    return (
        <Box display='Flex' flexDirection='column' m='20px auto' alignItems='center' maxWidth='80%'>
            <Typography variant='h4'>Estamos Cargando tus Productos</Typography>
            <Img src='../assets/img/loading.gif' alt='Cargando Tus Productos' />
        </Box>
    )
}
