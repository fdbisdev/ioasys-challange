import React, { useEffect } from 'react';
import { ActivityIndicator, ListRenderItem, StatusBar } from 'react-native';

import {
    Container,
    Title,
    LogoWrapper,
    Header,
    LogoutButton,
    SearchWrapper,
    TextArea,
    SearchInput,
    BookList,
    Loading,
} from './styles';

import LogoBlack from '../../assets/images/logoBlack.svg';
import Logout from '../../assets/images/Logout.svg';
import SearchIcon from '../../assets/images/searchIcon.svg';
import FilterIcon from '../../assets/images/filterIcon.svg';

import { useAuth } from '../../hooks/useAuth';
import BookCard, { IBookProps } from '../../components/BookCard';
import api from '../../services/api';
import useSnackbar from '../../hooks/useSnackbar';

function Home() {
    const [books, setBooks] = React.useState<IBookProps[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const { error } = useSnackbar();

    const { signOut, userHeaders } = useAuth();

    const renderItem: ListRenderItem<IBookProps> = ({ item }) => {
        return <BookCard book={item} />;
    };

    useEffect(() => {
        const getBooks = async () => {
            try {
                if (!userHeaders) return;
                const response = await api.get('/books?page=1&amount=25', {
                    headers: {
                        Authorization: `Bearer ${userHeaders.authorization}`,
                    },
                });

                setBooks(response.data.data);
                setIsLoading(false);
            } catch (err) {
                error('Não foi possível carregar os livros');
                signOut();
            }
        };

        getBooks();
    }, [error, userHeaders]);

    return (
        <Container>
            <StatusBar
                translucent
                barStyle="dark-content"
                backgroundColor="transparent"
            />
            <Header>
                <LogoWrapper>
                    <LogoBlack width={134} height={56} />
                    <Title>Books</Title>
                </LogoWrapper>

                <LogoutButton onPress={() => signOut()}>
                    <Logout />
                </LogoutButton>
            </Header>

            <SearchWrapper>
                <SearchInput>
                    <TextArea placeholder="Procure um livro" />
                    <SearchIcon />
                </SearchInput>

                <FilterIcon />
            </SearchWrapper>

            {isLoading ? (
                <Loading>
                    <ActivityIndicator size="large" color="#333" />
                </Loading>
            ) : (
                <BookList data={books} renderItem={renderItem} />
            )}
        </Container>
    );
}

export default Home;
