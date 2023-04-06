import { Button, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



const RegisterScreen = () => {

    const { register, googleLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        fullname: '',
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
        register(values)
    }

    return (
        <Box display='flex'>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', m: '30px auto', zIndex: 2}}>
                <Typography variant="h2">
                    Registrate
                </Typography>
                <Divider />
                <form>

                    <Box display='Flex' flexDirection='column' alignItems='center' mt='20px' border= '1px solid #f7f7f7d6' borderRadius='30px' p='20px' backgroundColor='#f7f7f7'>
                        <TextField
                            sx={{ m: 1, width: '35ch' }}
                            value={values.fullname}
                            onChange={handleInputValues}
                            required
                            id="fullname"
                            label="Nombre y Apellido"
                            placeholder="Nombre y Apellido"
                        />

                        <TextField
                            sx={{ m: 1, width: '35ch' }}
                            value={values.email}
                            onChange={handleInputValues}
                            required
                            id="email"
                            label="Email"
                            placeholder="Ingresa tu Email"
                        />

                        <FormControl
                            sx={{ m: 1, width: '35ch' }}
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

                        <Button onClick={handleSubmit} sx={{ maxWidth: '150px', m: '15px' }} variant='outlined'>Crear Usuario</Button>

                        <Button key={'login'}
                            color="inherit"
                            variant='outlined'
                            component={Link}
                            to='/login'>
                            Ya estoy Registrado
                        </Button>

                    </Box>

                </form>
                <Button onClick={googleLogin}
                    sx={{ maxWidth: '180px', m: '15px auto' }}
                    color="inherit"
                    variant='outlined'>
                    <img src="./assets/img/google.png" alt='Google' />
                    Ingresar con Google
                </Button>
            </Box>
            <Box sx={{position:'fixed'}}>

            {<ImageList sx={{ width: '80%', height: '800px', opacity: 0.5, m: '0 auto'}} variant="woven" cols={5} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=161&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>}
            </Box>

        </Box>
    )
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
];

export default RegisterScreen