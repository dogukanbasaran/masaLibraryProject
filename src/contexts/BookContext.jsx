import React from "react";
import bookImage from "../assets/images/books/anthony-giddens-sociology-6th.png"
export const BookContext = React.createContext();

class BookContextProvider extends React.Component{
    state = {
        books: [
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},
            {name: "Kitap adı", author: "Yazar Adı", description: "Açıklama", imageURL: "kitap foto", downloadURL: "İndirme Linki"},

        ]
    }

    render(){
        return(
            <BookContext.Provider value={this.state}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}


export default BookContextProvider;