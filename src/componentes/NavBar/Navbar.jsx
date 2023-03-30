import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import { useContext, useState } from "react"
import NavListDrawer from "./NavListDrawer"
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { AvatarLogIn } from "../LoginScreen/AvatarLogIn";
import { LoginContext } from "../../context/LoginContext";


export default function Navbar( { navArrayLinks } ) {

    const [ open, setOpen ] = useState(false)

    const { user, logout } = useContext(LoginContext)

    return (
        <>

            <AppBar position="fixed">
                <Toolbar>
                    <IconButton color="inherit" 
                                size="large"
                                onClick={() => setOpen(true)}
                                sx={{display: { xs:"flex", sm:"none" }}}>
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{display:'flex', flexGrow:'1' }}>
                        <img width='200px' 
                            src='../assets/img/Logo_Muebleria.png' 
                            alt="Muebleria Patagonia"/>

                    </Box>

                        <Box sx={{display:{ xs:"none", sm:"block" }}}>

                            {
                                navArrayLinks.map(item => (
                                <Button key={item.title} 
                                        color="inherit"
                                        component={Link}
                                        to={item.path}>
                                            {item.title}
                                </Button>))
                            }

                                <Button key={'Cart'} 
                                        color="inherit"
                                        component={Link}
                                        to='/Cart'>
                                    <CartWidget/>                            
                                </Button>

                                <IconButton key={'Avatar'} 
                                        color="inherit"
                                        component={Link}
                                        to='/Cart'>
                                    <AvatarLogIn/> 
                                    <Typography>Hola, Matias</Typography>                         
                                </IconButton>

                                <Button color='warning' onClick={logout}>Log Out</Button>
                        
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