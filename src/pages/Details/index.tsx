import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { IBookProps } from '../../components/BookCard';

import {
    Container,
    BookImage,
    Header,
    BackButton,
    Body,
    BookTitle,
    BookAuthor,
    InfoWrapper,
    InfoTitle,
    InfoBody,
    InfoItem,
    InfoContainer,
    InfoDescription,
    Description,
    AuthorDescription,
    Resume,
} from './styles';

import BackImage from '../../assets/images/back.svg';
import Aspas from '../../assets/images/aspas.svg';

interface IBookDetails {
    book: IBookProps;
}

const infomantion = [
    'Páginas',
    'Editora',
    'Publicação',
    'Idioma',
    'Título Original',
    'ISBN-10',
    'ISBN-13',
    'Categoria',
];

function Details({ book }: IBookDetails) {
    const history = useNavigation();

    const handleBack = useCallback(() => {
        history.goBack();
    }, [history]);

    const {
        title,
        authors,
        imageUrl,
        publisher,
        language,
        isbn10,
        isbn13,
        pageCount,
        category,
        published,
        description,
    } = book;

    return (
        <Container>
            <Header>
                <BackButton onPress={() => handleBack()}>
                    <BackImage />
                </BackButton>
            </Header>

            <Body>
                <BookImage source={{ uri: imageUrl }} />
                <BookTitle>{title}</BookTitle>
                <BookAuthor>{authors.join(', ')}</BookAuthor>

                <InfoWrapper>
                    <InfoTitle>INFORMAÇÕES</InfoTitle>

                    <InfoDescription>
                        <InfoContainer>
                            {infomantion.map(item => (
                                <InfoTitle key={item}>{item}</InfoTitle>
                            ))}
                        </InfoContainer>

                        <InfoBody>
                            <InfoItem>{pageCount} páginas</InfoItem>
                            <InfoItem>Editora {publisher}</InfoItem>
                            <InfoItem>{published}</InfoItem>
                            <InfoItem>{language}</InfoItem>
                            <InfoItem>{title}</InfoItem>
                            <InfoItem>{isbn10}</InfoItem>
                            <InfoItem>{isbn13}</InfoItem>
                            <InfoItem>{category}</InfoItem>
                        </InfoBody>
                    </InfoDescription>
                </InfoWrapper>

                <Description>
                    <InfoTitle>RESENHA DA EDITORA</InfoTitle>

                    <AuthorDescription>
                        <Resume>{description}</Resume>
                    </AuthorDescription>
                </Description>
            </Body>
        </Container>
    );
}

export default Details;
