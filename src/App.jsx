import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './temaConfig';
import { CartProvider } from './context/CartContext';
import { LoginProvider } from './context/LoginContext';
import { AppRouter } from './routes/AppRouter';


function App() {

  return (
    <LoginProvider>

      <CartProvider>

          <ThemeProvider theme={theme}>
              <AppRouter/>
          </ThemeProvider>

      </CartProvider>

    </LoginProvider>

  );
}

export default App;
