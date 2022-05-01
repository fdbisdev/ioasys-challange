import React, { useCallback, useEffect } from 'react';
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

const filterCategoriesInitialState = {
    design: false,
    uxdesign: false,
    uidesign: false,
    arquitetura: false,
    css: false,
    usuabilidade: false,
    designthinking: false,
};

const filterYearsInitialState = {
    DOISMIL15: false,
    DOISMIL16: false,
    DOISMIL17: false,
    DOISMIL18: false,
    DOISMIL19: false,
    DOISMIL20: false,
    DOISMIL21: false,
};

// eslint-disable-next-line no-shadow
enum filterCategoriesEnum {
    DESIGN,
    UXDESIGN,
    UIDESIGN,
    ARQUITETURA,
    CSS,
    USUABILIDADE,
    DESIGNTHINKING,
}

enum filterYearsEnum {
    DOISMIL15,
    DOISMIL16,
    DOISMIL17,
    DOISMIL18,
    DOISMIL19,
    DOISMIL20,
    DOISMIL21,
}

function Home() {
    const [books, setBooks] = React.useState<IBookProps[]>([]);
    const [booksAux, setBooksAux] = React.useState<IBookProps[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [modalFilter, setModalFilter] = React.useState(false);
    const [filterCategories, setFilterCategories] = React.useState(
        filterCategoriesInitialState,
    );
    const [filterYears, setFilterYears] = React.useState(
        filterYearsInitialState,
    );
    const [searchInputValue, setSearchInputValue] = React.useState('');

    const { error } = useSnackbar();

    const { signOut, userHeaders } = useAuth();

    const handlePressCategories = (categoryElement: number) => {
        switch (categoryElement) {
            case filterCategoriesEnum.DESIGN:
                setFilterCategories({
                    design: !filterCategories.design,
                    uxdesign: filterCategories.uxdesign,
                    uidesign: filterCategories.uidesign,
                    arquitetura: filterCategories.arquitetura,
                    css: filterCategories.css,
                    usuabilidade: filterCategories.usuabilidade,
                    designthinking: filterCategories.designthinking,
                });
                break;
            case filterCategoriesEnum.UXDESIGN:
                setFilterCategories({
                    design: filterCategories.design,
                    uxdesign: !filterCategories.uxdesign,
                    uidesign: filterCategories.uidesign,
                    arquitetura: filterCategories.arquitetura,
                    css: filterCategories.css,
                    usuabilidade: filterCategories.usuabilidade,
                    designthinking: filterCategories.designthinking,
                });
                break;
            case filterCategoriesEnum.UIDESIGN:
                setFilterCategories({
                    design: filterCategories.design,
                    uxdesign: filterCategories.uxdesign,
                    uidesign: !filterCategories.uidesign,
                    arquitetura: filterCategories.arquitetura,
                    css: filterCategories.css,
                    usuabilidade: filterCategories.usuabilidade,
                    designthinking: filterCategories.designthinking,
                });
                break;
            case filterCategoriesEnum.ARQUITETURA:
                setFilterCategories({
                    design: filterCategories.design,
                    uxdesign: filterCategories.uxdesign,
                    uidesign: filterCategories.uidesign,
                    arquitetura: !filterCategories.arquitetura,
                    css: filterCategories.css,
                    usuabilidade: filterCategories.usuabilidade,
                    designthinking: filterCategories.designthinking,
                });
                break;
            case filterCategoriesEnum.CSS:
                setFilterCategories({
                    design: filterCategories.design,
                    uxdesign: filterCategories.uxdesign,
                    uidesign: filterCategories.uidesign,
                    arquitetura: filterCategories.arquitetura,
                    css: !filterCategories.css,
                    usuabilidade: filterCategories.usuabilidade,
                    designthinking: filterCategories.designthinking,
                });
                break;
            case filterCategoriesEnum.USUABILIDADE:
                setFilterCategories({
                    design: filterCategories.design,
                    uxdesign: filterCategories.uxdesign,
                    uidesign: filterCategories.uidesign,
                    arquitetura: filterCategories.arquitetura,
                    css: filterCategories.css,
                    usuabilidade: !filterCategories.usuabilidade,
                    designthinking: filterCategories.designthinking,
                });
                break;
            case filterCategoriesEnum.DESIGNTHINKING:
                setFilterCategories({
                    design: filterCategories.design,
                    uxdesign: filterCategories.uxdesign,
                    uidesign: filterCategories.uidesign,
                    arquitetura: filterCategories.arquitetura,
                    css: filterCategories.css,
                    usuabilidade: filterCategories.usuabilidade,
                    designthinking: !filterCategories.designthinking,
                });
                break;
            default:
                setFilterCategories({
                    design: filterCategories.design,
                    uxdesign: filterCategories.uxdesign,
                    uidesign: filterCategories.uidesign,
                    arquitetura: filterCategories.arquitetura,
                    css: filterCategories.css,
                    usuabilidade: filterCategories.usuabilidade,
                    designthinking: filterCategories.designthinking,
                });
                break;
        }
    };

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
                        <FilterBullet
                            onPress={() =>
                                handlePressCategories(
                                    filterCategoriesEnum.DESIGN,
                                )
                            }
                            active={filterCategories.design}
                            bulletTitle="Design"
                        />
                        <FilterBullet
                            onPress={() =>
                                handlePressCategories(
                                    filterCategoriesEnum.UXDESIGN,
                                )
                            }
                            active={filterCategories.uxdesign}
                            bulletTitle="UX Design"
                        />
                        <FilterBullet
                            onPress={() =>
                                handlePressCategories(
                                    filterCategoriesEnum.UIDESIGN,
                                )
                            }
                            active={filterCategories.uidesign}
                            bulletTitle="UI Design"
                        />
                        <FilterBullet
                            onPress={() =>
                                handlePressCategories(
                                    filterCategoriesEnum.ARQUITETURA,
                                )
                            }
                            active={filterCategories.arquitetura}
                            bulletTitle="Arquitetura da informação"
                        />
                        <FilterBullet
                            onPress={() =>
                                handlePressCategories(filterCategoriesEnum.CSS)
                            }
                            active={filterCategories.css}
                            bulletTitle="CSS"
                        />
                        <FilterBullet
                            onPress={() =>
                                handlePressCategories(
                                    filterCategoriesEnum.USUABILIDADE,
                                )
                            }
                            active={filterCategories.usuabilidade}
                            bulletTitle="Usuabilidade"
                        />
                        <FilterBullet
                            onPress={() =>
                                handlePressCategories(
                                    filterCategoriesEnum.DESIGNTHINKING,
                                )
                            }
                            active={filterCategories.designthinking}
                            bulletTitle="Design Thinking"
                        />
                    </CategoriesBody>

                    <ModalBody>
                        <ModalBodyText>Selecione o ano</ModalBodyText>
                    </ModalBody>

                    <YearsBody>
                        <FilterBullet
                            active={filterYears.DOISMIL15}
                            bulletTitle="2015"
                        />
                        <FilterBullet
                            active={filterYears.DOISMIL16}
                            bulletTitle="2016"
                        />
                        <FilterBullet
                            active={filterYears.DOISMIL17}
                            bulletTitle="2017"
                        />
                        <FilterBullet
                            active={filterYears.DOISMIL18}
                            bulletTitle="2018"
                        />
                        <FilterBullet
                            active={filterYears.DOISMIL19}
                            bulletTitle="2019"
                        />
                        <FilterBullet
                            active={filterYears.DOISMIL20}
                            bulletTitle="2020"
                        />
                        <FilterBullet
                            active={filterYears.DOISMIL21}
                            bulletTitle="2021"
                        />
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
