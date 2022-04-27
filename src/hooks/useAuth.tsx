import React, {
    useState,
    useContext,
    createContext,
    useMemo,
    useCallback,
    useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import useSnackbar from './useSnackbar';

interface IUser {
    name: string;
    email: string;
    birthdate: string;
    gender: string;
    id: string;
}

interface IAuthParams {
    signIn: (email: string, password: string) => Promise<void>;
    isLogged: boolean;
    user: IUser | null;
    signOut: () => void;
}

const AuthContext = createContext<IAuthParams | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');

    return context;
};

// eslint-disable-next-line react/function-component-definition
export const AuthProvider: React.FC = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState<IUser | null>(null);
    const [userHeaders, setUserHeaders] = useState<object | null>(null);

    const { error, success } = useSnackbar();

    useEffect(() => {
        async function checkIfUserIsLogged() {
            const authHeader = await AsyncStorage.getItem('@userHeaders');
            if (authHeader) {
                setUserHeaders(JSON.parse(authHeader));
                setIsLogged(true);
            }
        }

        checkIfUserIsLogged();
    }, []);

    const storeUser = useCallback(
        async (value: IUser) => {
            try {
                await AsyncStorage.setItem('@user', JSON.stringify(value));
            } catch (err) {
                error('Não foi possível salvar o usuário no storage');
            }
        },
        [error],
    );

    const storeUserHeaders = useCallback(
        async (value: object) => {
            try {
                await AsyncStorage.setItem(
                    '@userHeaders',
                    JSON.stringify(value),
                );
            } catch (err) {
                error('Não foi possível salvar o usuário no storage');
            }
        },
        [error],
    );

    const signIn = useCallback(
        async (email: string, password: string) => {
            try {
                const response = await api.post('auth/sign-in', {
                    email,
                    password,
                });

                setIsLogged(true);
                setUser(response.data);
                setUserHeaders(response.headers);

                storeUser(response.data);
                storeUserHeaders(response.headers);

                success('Login realizado com sucesso!');
            } catch (err) {
                error('Não foi possível realizar login');
            }
        },
        [error, storeUser, storeUserHeaders, success],
    );

    const clearUser = useCallback(async () => {
        try {
            await AsyncStorage.removeItem('@user');
            await AsyncStorage.removeItem('@userHeaders');
        } catch (err) {
            error('Não foi possível limpar o usuário do storage');
        }
    }, [error]);

    const signOut = useCallback(() => {
        clearUser();
        setIsLogged(false);
        setUser(null);
        setUserHeaders(null);
    }, [clearUser]);

    const returnValues = useMemo(() => {
        return {
            isLogged,
            user,
            userHeaders,
            signIn,
            signOut,
        };
    }, [isLogged, user, userHeaders, signIn, signOut]);

    return (
        <AuthContext.Provider value={returnValues}>
            {children}
        </AuthContext.Provider>
    );
};
