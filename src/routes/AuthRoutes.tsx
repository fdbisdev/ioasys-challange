import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Details from '../pages/Details';
import { IBookProps } from '../components/BookCard';

type RootParamList = {
    Home: undefined;
    Details: {
        book: IBookProps | null;
    };
    AuthRoutes: undefined;
};

const Stack = createStackNavigator();

function DetailsScreen({ route }) {
    const { book } = route.params;

    return <Details book={book} />;
}

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

const RootStack = createStackNavigator<RootParamList>();

function AuthRoutes() {
    return (
        <RootStack.Navigator initialRouteName="AuthRoutes">
            <RootStack.Screen
                name="AuthRoutes"
                component={AuthStack}
                options={{
                    headerShown: false,
                }}
            />
        </RootStack.Navigator>
    );
}

export default AuthRoutes;
