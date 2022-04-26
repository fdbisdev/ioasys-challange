import React from 'react';

import { Container, Title, BackgroundImage } from './styles';

function Login() {
    return (
        <Container>
            <BackgroundImage
                source={require('../../assets/images/backgroundImage.png')}
            />
            <Title>Oiasys books</Title>
        </Container>
    );
}

export default Login;
