import Snackbar from 'react-native-snackbar';
import { useCallback } from 'react';

const useSnackbar = () => {
    const error = useCallback((text: string) => {
        Snackbar.show({
            text,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: '#550000',
            textColor: '#fff',
        });
    }, []);

    const success = useCallback((text: string) => {
        Snackbar.show({
            text,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: '#005500',
            textColor: '#fff',
        });
    }, []);

    return {
        error,
        success,
    };
};

export default useSnackbar;
