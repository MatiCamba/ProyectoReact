import { createTheme } from '@mui/material/styles';

import { orange } from '@mui/material/colors';

const theme = createTheme ({
    palette: {
        primary: {
            main: orange[500],
        },
        secondary: {
            main: '#f44336',
        },
    },

})



export default theme;