import Snackbar from 'react-native-snackbar';
import { useCallback } from 'react';

const useSnackbar = () => {
    const error = useCallback((text: string) => {
        Snackbar.show({
            text,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: '#cc0000',
            textColor: '#fff',
        });
    }, []);

    const success = useCallback((text: string) => {
        Snackbar.show({
            text,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: '#55ff55',
            textColor: '#fff',
        });
    }, []);

    const warning = useCallback((text: string) => {
        Snackbar.show({
            text,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: '#ff0',
            textColor: '#fff',
        });
    }, []);

    return {
        error,
        success,
        warning,
    };
};

export default useSnackbar;
