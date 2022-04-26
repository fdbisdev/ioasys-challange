import React, {
    useState,
    useContext,
    createContext,
    useMemo,
    useCallback,
} from 'react';
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

    const { error, success } = useSnackbar();

    // TODO check if user is logged
    // useEffect(() => { }, []);

    const signIn = useCallback(
        async (email: string, password: string) => {
            try {
                const response = await api.post('auth/sign-in', {
                    email,
                    password,
                });

                setIsLogged(true);
                setUser(response.data);

                success('Login realizado com sucesso!');
            } catch (err) {
                error('Não foi possível realizar login');
            }
        },
        [error, success],
    );

    const signOut = useCallback(() => {
        setUser(null);
        setIsLogged(false);
    }, []);

    const returnValues = useMemo(() => {
        return {
            isLogged,
            user,
            signIn,
            signOut,
        };
    }, [isLogged, user, signIn, signOut]);

    return (
        <AuthContext.Provider value={returnValues}>
            {children}
        </AuthContext.Provider>
    );
};
