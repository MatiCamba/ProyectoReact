import ItemListContainer from "../componentes/itemListContainer/ItemListContainer";
import Navbar from "../componentes/NavBar/Navbar";
import Nosotros from "../componentes/Nosotros/Nosotros";
import Contacto from "../componentes/Contacto/Contacto";
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "../componentes/Cart/Cart";
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toolbar } from '@mui/material'
import Checkout from "../componentes/Checkout/Checkout";


const navArrayLinks = [
    {
        title: "inicio",
        path: "/"
    },
    {
        title: "Mesas",
        path: "/productos/mesa"
    },
    {
        title: "Sillas",
        path: "/productos/silla"
    },
    {
        title: "Rinconero",
        path: "/productos/rinconero"
    },
    {
        title: "Camas",
        path: "/productos/cama"
    },
    {
        title: "Placard",
        path: "/productos/placard"
    },

]

const PrivateRoutes = () => {

    return (
        <>
            <Navbar navArrayLinks={navArrayLinks} />
            <Toolbar/>
            {/* RUTAS PRIVADAS */}
            <Routes>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
                <Route path="/cart" element={ <Cart /> } />
                <Route path="/checkout" element={ <Checkout /> } />
                <Route path="/nosotros" element={ <Nosotros /> } />
                <Route path="/contacto" element={ <Contacto /> } />
                <Route path="*" element={ <Navigate to="/" /> }/>
            </Routes>
        </>
    )
}

export default PrivateRoutes