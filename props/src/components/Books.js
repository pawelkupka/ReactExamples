import React, { useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books] = useState([
        { title: "In Search of Lost Time", author: "Marcel Proust" },
        { title: "Ulysses", author: "James Joyce" },
        { title: "Don Quixote", author: "Miguel de Cervantes" }
    ]);

    return (
        <div>
            {books.map((book, i) => <Book key={i} title={book.title} author={book.author} />)}
        </div>
    );
}

export default Books;
