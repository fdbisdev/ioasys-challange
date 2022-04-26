import React from 'react';
import { AuthProvider } from './src/hooks/useAuth';
import Login from './src/pages/Login/index';

function App() {
    return (
        <AuthProvider>
            <Login />
        </AuthProvider>
    );
}

export default App;
