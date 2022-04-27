/* eslint-disable react/destructuring-assignment */
import React from 'react';

import {
    Container,
    Title,
    BookInfoWrapper,
    BookTitleWrapper,
    Auth,
    BookDescriptionWrapper,
    BookDescriptionText,
    BookImage,
} from './styles';

import BookImageDefault from '../../assets/images/Book.svg';

export interface IBookProps {
    id: string;
    title: string;
    description: string;
    authors: string[];
    pageCount: number;
    category: string;
    imageUrl: string;
    isbn10: string;
    isbn13: string;
    language: string;
    publisher: string;
    published: number;
}

interface IBook {
    book: IBookProps | null;
}

function BookCard(book: IBook) {
    const { book: bookItem } = book;

    return (
        <Container>
            {bookItem?.imageUrl ? (
                <BookImage source={{ uri: bookItem?.imageUrl }} />
            ) : (
                <BookImageDefault width={80} height={128} />
            )}

            <BookInfoWrapper>
                <BookTitleWrapper>
                    <Title>{bookItem?.title}</Title>
                    {bookItem?.authors.map(author => (
                        <Auth key={author}>{author}</Auth>
                    ))}
                </BookTitleWrapper>

                <BookDescriptionWrapper>
                    <BookDescriptionText>
                        {bookItem?.pageCount} páginas
                    </BookDescriptionText>
                    <BookDescriptionText>
                        Editora {bookItem?.publisher}
                    </BookDescriptionText>
                    <BookDescriptionText>
                        Publicado em {bookItem?.published}
                    </BookDescriptionText>
                </BookDescriptionWrapper>
            </BookInfoWrapper>
        </Container>
    );
}

export default BookCard;
