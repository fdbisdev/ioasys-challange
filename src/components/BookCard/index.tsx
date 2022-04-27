import React from 'react';

import {
    Container,
    Title,
    BookInfoWrapper,
    BookTitleWrapper,
    Auth,
    BookDescriptionWrapper,
    Pages,
    PublishingCompany,
    Year,
} from './styles';

import BookImage from '../../assets/images/Book.svg';

function BookCard() {
    return (
        <Container>
            <BookImage width={80} height={122} />

            <BookInfoWrapper>
                <BookTitleWrapper>
                    <Title>Book Title</Title>
                    <Auth>Geoffrey</Auth>
                </BookTitleWrapper>

                <BookDescriptionWrapper>
                    <Pages>150 páginas</Pages>
                    <PublishingCompany>Editora Loyola</PublishingCompany>
                    <Year>Publicado em 2020</Year>
                </BookDescriptionWrapper>
            </BookInfoWrapper>
        </Container>
    );
}

export default BookCard;
