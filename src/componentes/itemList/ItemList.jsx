

import { Container, Grid } from "@mui/material"
import Item from "../item/item"


const ItemList = ( {items} ) => {

    
    return (
        <Container>
            <h2>Productos</h2>
            <hr/>
            
            <Grid container spacing={2}>

                    { items.map((producto) => <Item key={producto.id} item={producto}/>) }
                
            </Grid>
                

        </Container>
    )
}

export default ItemList