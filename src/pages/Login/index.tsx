import React from 'react';
import { StatusBar, TextInput } from 'react-native';
import Logo from '../../assets/images/Logo.svg';

import {
    Container,
    BackgroundImage,
    BackgroundWrapper,
    LoginWrapper,
    LogoWrapper,
    Title,
    InputWrapper,
    InputText,
    LoginButton,
    LoginButtonText,
    InputContainer,
    LoginContainer,
} from './styles';

function Login() {
    return (
        <Container>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="transparent"
            />
            <BackgroundWrapper>
                <BackgroundImage />
            </BackgroundWrapper>

            <LoginWrapper>
                <LogoWrapper>
                    <Logo width={134} height={56} />
                    <Title>Books</Title>
                </LogoWrapper>

                <InputWrapper>
                    <InputContainer>
                        <InputText>Email</InputText>
                        <TextInput color="#fff" />
                    </InputContainer>
                </InputWrapper>

                <InputWrapper>
                    <InputContainer>
                        <InputText>Senha</InputText>
                        <TextInput color="#fff" />
                    </InputContainer>
                    <LoginContainer>
                        <LoginButton>
                            <LoginButtonText>Entrar</LoginButtonText>
                        </LoginButton>
                    </LoginContainer>
                </InputWrapper>
            </LoginWrapper>
        </Container>
    );
}

export default Login;
