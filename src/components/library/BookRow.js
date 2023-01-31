import React from 'react';

export default function BookRow({books, setBooks}) {

    const book_delete = (index) => {
        let copy = books;
        copy.splice(index, 1); // deleting the element at index
        setBooks([...copy]);   // updating my books array to modified copy array
        
        // books.splice(index, 1) wrong because we can't directly change books
        // we have to use setBooks, as props are immutable;
    
    }


    return (
        <div>
            <table>
                {
                    books.map((book, index) => {
                        return (
                            <div>
                                <tbody>
                                    <th>Book Id</th>
                                    <th>Book Name</th>
                                    <th>Author Name</th>
                                    <tr>
                                        <td>{book.bookId}</td>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                        <button>Edit</button>
                                        <button onClick={() => book_delete(index)}>Delete</button>
                                    </tr>
                                </tbody>
                            </div>
                        )
                    })
                }
            </table>
        </div>
    )
}
