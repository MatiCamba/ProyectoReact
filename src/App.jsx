import React from 'react';


//import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import theme from './temaConfig';
import NavBar from './componentes/navBar';
import Toolbar from '@mui/material/Toolbar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {

  return (
    <div>
        <ThemeProvider theme={theme}>

          <NavBar />
          <Toolbar/>

          <ItemListContainer/>

        </ThemeProvider>
        

    </div>
  );
}

export default App;
