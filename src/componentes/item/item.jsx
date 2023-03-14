import { Box, Button, Grid, IconButton, Paper, Typography } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from "@mui/system";
import { Link } from "react-router-dom";


const Item = ( {item} ) => {

    const Img = styled("img")({
        width: 200,
        height: "100%",
        objectFit: "cover",
        objectPosition:"center",
        })


    return (

        
            <Grid item xs={12} md={6} lg={4} >

                <Paper
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
                        <Typography variant="h4">{item.name}</Typography>
                        <Typography variant="body1">{item.marca}</Typography>
                            <Box sx={{m:"0 0 0 auto"}} component="p">
                                Precio: <strong>${item.price}</strong>
                            </Box>

                        <Button variant="contained" 
                                startIcon={<AddShoppingCartIcon />}
                                >
                                Agregar al Carrito
                        </Button>
                        <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
                    </Box>
                </Paper>


            </Grid>
            
        

    )
}

export default Item