import React from 'react'
import { Button, Hidden, Typography, withWidth } from '@mui/material';

const Ocultar = () => {
    return (
        <div>
            <Hidden >
                <Button variant='contained' color='primary' sx={{ display: { xs: 'none', sm: 'block' } }}>
                    XS
                </Button>
            </Hidden>
        </div>
    )
}

export default Ocultar;
