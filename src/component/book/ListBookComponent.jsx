import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import moment from 'moment';

const ListBookComponent = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        ApiService.fetchBooks().then((res) => {
            setBooks(res.data);
        });
    }, []);

    const deleteBook = (bookId) => {
        ApiService.deleteBook(bookId).then(() => {
            setBooks(books.filter(book => book.id !== bookId));
        });
    };

    return (
        <div>
            <h2 className="text-center">Book Details</h2>
            <button className="btn btn-success" onClick={() => navigate('/add-book')}>Add Book</button>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ISBN</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Release Date</th>
                    <th>Editorial</th>
                </tr>
                </thead>
                <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.isbn}</td>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td>{moment(book.releaseDate).format('MM/DD/YYYY')}</td>
                        <td>{book.editorial}</td>
                        <td><button className="btn btn-danger" onClick={() => deleteBook(book.id)}>Delete</button></td>
                        <td><button className="btn btn-primary" onClick={() => { window.localStorage.setItem("bookId", book.id); navigate('/edit-book'); }}>Edit</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListBookComponent;
