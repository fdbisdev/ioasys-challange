import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './src/hooks/useAuth';

import Login from './src/pages/Login/index';
import Home from './src/pages/Home';

function Routes() {
    const { isLogged } = useAuth();

    return (
        <NavigationContainer>
            {isLogged ? <Home /> : <Login />}
        </NavigationContainer>
    );
}

function App() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default App;
