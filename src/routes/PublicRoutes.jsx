import LoginScreen from "../componentes/LoginScreen/LoginScreen";
import { Routes, Route, Navigate } from 'react-router-dom'
import RegisterScreen from "../componentes/RegisterScreen/RegisterScreen";




const PublicRoutes = () => {

    return (
        <>
            <Routes> 
                {/* RUTAS PUBLICAS */}
                <Route path="/login" element={ <LoginScreen /> }/>
                <Route path="/register" element={ <RegisterScreen/> }/>
                <Route path="*" element={ <Navigate to="/login" /> }/>
            </Routes>
        </>
    )
}

export default PublicRoutes