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
    SearchButton,
    ErrorWrapper,
    ErrorText,
    ModalFilter,
    ModalContainer,
    ModalHeader,
    ModalBodyText,
    ModalBody,
    CategoriesBody,
    YearsBody,
    FilterButton,
    FilterText,
} from './styles';

import LogoBlack from '../../assets/images/logoBlack.svg';
import Logout from '../../assets/images/Logout.svg';
import SearchIcon from '../../assets/images/searchIcon.svg';
import FilterIcon from '../../assets/images/filterIcon.svg';
import CloseIcon from '../../assets/images/close.svg';

import { useAuth } from '../../hooks/useAuth';
import BookCard, { IBookProps } from '../../components/BookCard';
import api from '../../services/api';
import useSnackbar from '../../hooks/useSnackbar';
import FilterBullet from '../../components/FilterBullet';

function Home() {
    const [books, setBooks] = React.useState<IBookProps[]>([]);
    const [booksAux, setBooksAux] = React.useState<IBookProps[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [modalFilter, setModalFilter] = React.useState(false);
    const [searchInputValue, setSearchInputValue] = React.useState('');

    const { error } = useSnackbar();

    const { signOut, userHeaders } = useAuth();

    const handlePressSearchIcon = () => {
        setIsLoading(true);

        if (searchInputValue === '') {
            setBooksAux(books);
            setIsLoading(false);
            return;
        }

        const newBooks: IBookProps[] = [];

        books.forEach(book => {
            if (
                book.title
                    .toLowerCase()
                    .includes(searchInputValue.toLowerCase())
            ) {
                newBooks.push(book);
            }
        });

        setBooksAux(newBooks);
        setIsLoading(false);
    };

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
                setBooksAux(response.data.data);
                setIsLoading(false);
            } catch (err) {
                error('Não foi possível carregar os livros');
                signOut();
            }
        };

        getBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, userHeaders]);

    return (
        <>
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
                        <TextArea
                            value={searchInputValue}
                            placeholder="Procure um livro"
                            onChangeText={text => setSearchInputValue(text)}
                        />
                        <SearchButton onPress={() => handlePressSearchIcon()}>
                            <SearchIcon />
                        </SearchButton>
                    </SearchInput>

                    <SearchButton onPress={() => setModalFilter(true)}>
                        <FilterIcon />
                    </SearchButton>
                </SearchWrapper>

                {isLoading ? (
                    <Loading>
                        <ActivityIndicator size="large" color="#333" />
                    </Loading>
                ) : (
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    <>
                        {booksAux.length === 0 ? (
                            <ErrorWrapper>
                                <ErrorText>Nenhum livro encontrado</ErrorText>
                            </ErrorWrapper>
                        ) : (
                            <BookList data={booksAux} renderItem={renderItem} />
                        )}
                    </>
                )}
            </Container>

            <ModalFilter
                isVisible={modalFilter}
                onBackButtonPress={() => setModalFilter(false)}
            >
                <ModalContainer>
                    <ModalHeader>
                        <LogoutButton onPress={() => setModalFilter(false)}>
                            <CloseIcon />
                        </LogoutButton>
                    </ModalHeader>

                    <ModalBody>
                        <ModalBodyText>Selecione a categoria</ModalBodyText>
                    </ModalBody>

                    <CategoriesBody>
                        <FilterBullet bulletTitle="Design" />
                        <FilterBullet bulletTitle="UX Design" />
                        <FilterBullet bulletTitle="UI Design" />
                        <FilterBullet bulletTitle="Arquitetura da informação" />
                        <FilterBullet bulletTitle="CSS" />
                        <FilterBullet bulletTitle="Usuabilidade" />
                        <FilterBullet bulletTitle="Design Thinking" />
                    </CategoriesBody>

                    <ModalBody>
                        <ModalBodyText>Selecione o ano</ModalBodyText>
                    </ModalBody>

                    <YearsBody>
                        <FilterBullet bulletTitle="2015" />
                        <FilterBullet bulletTitle="2016" />
                        <FilterBullet bulletTitle="2017" />
                        <FilterBullet bulletTitle="2018" />
                        <FilterBullet bulletTitle="2019" />
                        <FilterBullet bulletTitle="2020" />
                        <FilterBullet bulletTitle="2021" />
                    </YearsBody>

                    <FilterButton>
                        <FilterText>Filtrar</FilterText>
                    </FilterButton>
                </ModalContainer>
            </ModalFilter>
        </>
    );
}

export default Home;
