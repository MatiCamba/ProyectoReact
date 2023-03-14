import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";


export default function NavListDrawer ({ navArrayLinks, setOpen }) {
    return (
        <Box sx={{width: 250}}>
            <nav>
                <List >

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
                        
                </List>
            </nav>
        </Box>
        )
}