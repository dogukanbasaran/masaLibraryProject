import React from "react"
import bookImage from "../assets/images/books/anthony-giddens-sociology-6th.png"

class Book extends React.Component{
    render(){
        return(
            <div className="max-w-[400px] border m-2">
                <img src={bookImage}/>
                <div className="border">
                     <h2 className="text-[18px] flex justify-center">{this.props.book.name}</h2>
                     <h3 className="text-[14px] italic flex justify-center">{this.props.book.author}</h3>
                </div>
                <button className="bg-blue-500 w-full font-semibold text-white py-1">Detay için tıkla</button>
            </div>
        )
    }
}

export default Book;