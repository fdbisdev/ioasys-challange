import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './src/hooks/useAuth';

import AuthRoutes from './src/routes/AuthRoutes';
import UnauthRoutes from './src/routes/UnauthRoutes';

function Routes() {
    const { isLogged } = useAuth();

    return (
        <NavigationContainer>
            {isLogged ? <AuthRoutes /> : <UnauthRoutes />}
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
