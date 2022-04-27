import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';

const Stack = createStackNavigator();

type RootParamList = {
    Login: undefined;
    UnauthRoute: undefined;
};

function UnauthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Login"
        >
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

const RootStack = createStackNavigator<RootParamList>();

function UnauthRoutes() {
    return (
        <RootStack.Navigator initialRouteName="UnauthRoute">
            <RootStack.Screen
                name="UnauthRoute"
                component={UnauthStack}
                options={{
                    headerShown: false,
                }}
            />
        </RootStack.Navigator>
    );
}

export default UnauthRoutes;
