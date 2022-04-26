import React from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    TouchableWithoutFeedback,
} from 'react-native';
import { Formik } from 'formik';

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
    InputTextArea,
    TextError,
} from './styles';

import Logo from '../../assets/images/Logo.svg';
import loginSchema from '../../schemas/login';
import { useAuth } from '../../hooks/useAuth';

const initialValues = { email: '', password: '' };

interface ILoginParams {
    email: string;
    password: string;
}

function Login() {
    const [isLoading, setIsLoading] = React.useState(false);

    const { signIn } = useAuth();

    const handleSignIn = (values: ILoginParams) => {
        setIsLoading(true);
        signIn(values.email, values.password);
        setIsLoading(false);
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
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
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : -0}
                    >
                        <LogoWrapper>
                            <Logo width={134} height={56} />
                            <Title>Books</Title>
                        </LogoWrapper>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={loginSchema}
                            onSubmit={values => handleSignIn(values)}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                isValid,
                            }) => (
                                <>
                                    <InputWrapper>
                                        <InputContainer>
                                            <InputText>Email</InputText>
                                            <InputTextArea
                                                onChangeText={handleChange(
                                                    'email',
                                                )}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                            />
                                            {errors.email && (
                                                <TextError>
                                                    {errors.email}
                                                </TextError>
                                            )}
                                        </InputContainer>
                                    </InputWrapper>

                                    <InputWrapper>
                                        <InputContainer>
                                            <InputText>Senha</InputText>
                                            <InputTextArea
                                                onChangeText={handleChange(
                                                    'password',
                                                )}
                                                onBlur={handleBlur('password')}
                                                value={values.password}
                                                secureTextEntry
                                            />
                                            {errors.password && (
                                                <TextError>
                                                    {errors.password}
                                                </TextError>
                                            )}
                                        </InputContainer>
                                        <LoginContainer>
                                            <LoginButton
                                                disabled={isLoading || !isValid}
                                                onPress={handleSubmit}
                                            >
                                                <LoginButtonText>
                                                    Entrar
                                                </LoginButtonText>
                                            </LoginButton>
                                        </LoginContainer>
                                    </InputWrapper>
                                </>
                            )}
                        </Formik>
                    </KeyboardAvoidingView>
                </LoginWrapper>
            </Container>
        </TouchableWithoutFeedback>
    );
}

export default Login;
