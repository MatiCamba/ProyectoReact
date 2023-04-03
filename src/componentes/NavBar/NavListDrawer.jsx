import { Button, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import CartWidget from "../CartWidget/CartWidget";
import { AvatarLogIn } from "../LoginScreen/AvatarLogIn";



export default function NavListDrawer({ navArrayLinks, setOpen, logout }) {
    return (
        <Box sx={{ width: 250 }}>
            <nav>
                <List >
                    <IconButton key={'Avatar'}
                        color="inherit"
                        component={Link}
                        to='/Cart'>
                        <AvatarLogIn />
                        <Typography>Hola, Matias</Typography>
                    </IconButton>

                    <Divider />
                    {
                        navArrayLinks.map(item => (

                            <ListItem disablePadding key={item.title}>
                                <ListItemButton
                                    component={NavLink}
                                    to={item.path}
                                    onClick={() => setOpen(false)}>
                                    <ListItemText>
                                        {item.title}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                    <Divider />
                    <Button key={'Cart'}
                        sx={{m:'10px'}}
                        color="inherit"
                        component={Link}
                        to='/Cart'>
                        <CartWidget />
                        Ir al Carrito
                    </Button>
                </List>
            </nav>
            <Button sx={{mx:'70px', my:'50px'}} color='warning' variant="contained" onClick={logout}>Log Out</Button>
        </Box>
    )
}