import React from 'react';

import { ThemeProvider } from '@emotion/react';
import theme from './temaConfig';
import Toolbar from '@mui/material/Toolbar';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/Navbar'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Nosotros } from './componentes/Nosotros/Nosotros';
import { Contacto } from './componentes/Contacto/Contacto';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';

const navArrayLinks = [
  {
      title: "inicio", 
      path:"/"
  },
  {
      title: "Nosotros", 
      path:"/Nosotros"
  },
  {
      title: "Contacto", 
      path:"/Contacto"
  },
  {
      title: "Mesas", 
      path:"/productos/mesa"
  },
  {
      title: <ShoppingCartIcon/>, 
      path:"/carrito"
  },
  {
    title: <AccountCircle/>, 
    path:"/ingresar"
  }
]


function App() {

  return (
  
      <BrowserRouter>
      
        <ThemeProvider theme={theme}>
          
          <NavBar navArrayLinks={ navArrayLinks }/>
          <Toolbar/>

          <Routes>

            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoryId" element={ <ItemListContainer/> }/>
            <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="*" element={ <Navigate/> }/>

          </Routes>

        </ThemeProvider>
      
      </BrowserRouter>
        
  );
}

export default App;
