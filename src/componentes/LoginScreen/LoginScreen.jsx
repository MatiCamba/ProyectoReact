
import { Button, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { Link } from 'react-router-dom';



const LoginScreen = () => {

    const { login, googleLogin } = useContext(LoginContext)

    const [ values, setValues ] = useState({
        
        email: '',
        password: ''
    })

    const handleInputValues = (e) => {

        setValues({
            ...values,
            [e.target.id]: e.target.value
        })
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(values)
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', m: '30px' }}>
                <Typography componet="h2">
                    Login
                </Typography>
                <Divider />
                <form>

                    <Box display='Flex' flexDirection='column' alignItems='center' mt='20px'>
                        {/* <TextField 
                            sx={{ m: 1, width: '25ch' }}
                            value={values.nombre}
                            onChange={handleInputValues}
                            required
                            id="nombre"
                            label="Nombre"
                            placeholder="Ingresa tu Nombre"
                        />

                        <TextField 
                            sx={{ m: 1, width: '25ch' }}
                            value={values.apellido}
                            onChange={handleInputValues}
                            required
                            id="apellido"
                            label="Apellido"
                            placeholder="Ingresa tu Apellido"
                        /> */}

                        <TextField 
                            sx={{ m: 1, width: '25ch' }}
                            value={values.email}
                            onChange={handleInputValues}
                            required
                            id="email"
                            label="Email"
                            placeholder="Ingresa tu Email"
                        />

                        <FormControl 
                            sx={{ m: 1, width: '25ch' }} 
                            variant="outlined"
                            >                                
                            <InputLabel 
                                htmlFor="outlined-adornment-password"
                                >
                                    Password
                            </InputLabel>
                                <OutlinedInput
                                value={values.password}
                                onChange={handleInputValues}
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

                        <Button onClick={handleSubmit} sx={{ maxWidth: '100px', m: '15px' }} variant='outlined'>Ingresar</Button>

                        <Button key={'Register'} 
                                        color="inherit"
                                        component={Link}
                                        to='/register'>
                                    Registrate                            
                        </Button>
                        

                    </Box>
                </form>

                <Button onClick={googleLogin} 
                        sx={{ maxWidth: '180px', m: '15px auto' }} 
                        variant='outlined'>
                            <GoogleIcon/>
                            Ingresar con Google
                </Button>

            </Box>

        </Box>
    )
}

export default LoginScreen
