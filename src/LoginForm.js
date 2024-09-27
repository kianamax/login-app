import React, {useState} from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Container
} from '@mui/material';
import axios from "axios";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try{
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            console.log(response.data);
        } catch (error) {
            setError('invalid email or password');
        }
    };
    return(
        <Container component='main' maxWidth='xs'>
            <Box 
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                    <Typography component = 'h1' variant = 'h5'>
                        Sign in
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit} noValidate sx={{mt:1}}>
                    </Box>
                    <TextField
                        margin = 'normal'
                        required
                        fullwidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    onClick={handleSubmit}  
                    >
                        Sign in
                    </Button>
                    {error && (
                        <Typography color="error" align="center">
                            {error}
                        </Typography>
                    )

                    }
                </Box>
        </Container>
    );
};

export default LoginForm;