import React from 'react';
import { StatusBar } from 'react-native';

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
} from './styles';

import LogoBlack from '../../assets/images/logoBlack.svg';
import Logout from '../../assets/images/Logout.svg';
import SearchIcon from '../../assets/images/searchIcon.svg';
import FilterIcon from '../../assets/images/filterIcon.svg';

import { useAuth } from '../../hooks/useAuth';
import BookCard from '../../components/BookCard';

function Home() {
    const { signOut } = useAuth();

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

            <BookCard />
        </Container>
    );
}

export default Home;
