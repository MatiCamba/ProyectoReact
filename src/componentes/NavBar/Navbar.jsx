import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import NavListDrawer from "./NavListDrawer"
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";


export default function Navbar( { navArrayLinks } ) {

    const [ open, setOpen ] = useState(false)

    return (
        <>

            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" 
                                size="large"
                                onClick={() => setOpen(true)}
                                sx={{display: { xs:"flex", sm:"none" }}}>
                        <MenuIcon/>
                    </IconButton>
                        <Typography variant="h6" sx={{flexGrow: 1}}>
                            Muebles el Obrero
                        </Typography>

                        <Box sx={{display:{ xs:"none", sm:"block" }}}>

                            {
                                navArrayLinks.map(item => (
                                <Button key={item.title} 
                                        color="inherit"
                                        component={NavLink}
                                        to={item.path}>
                                            {item.title}
                                </Button>))
                            }
                            

                        </Box>
                    
                </Toolbar>
            </AppBar>

            <Drawer open={open} 
                    anchor="left" 
                    onClose={() => setOpen(false)}
                    sx={{display: { xs:"flex", sm:"none" }}}>
            <NavListDrawer navArrayLinks={navArrayLinks} setOpen={setOpen}/>
            </Drawer>

        </>
        )
}