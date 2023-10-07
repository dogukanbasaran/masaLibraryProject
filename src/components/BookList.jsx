import React from 'react';
import Book from './Book';
import { BookContext } from '../contexts/BookContext';

class BookList extends React.Component{
    render(){
        return (
            <BookContext.Consumer>
                {value => {
                    return(
                        <section className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-10'>
                             {value.books.map((book, index) => {
                                return <Book book={book}
                                            key={index}
                                />
                             })}
                        </section>
                    )
                }}
            </BookContext.Consumer>
        )
    }
}

export default BookList