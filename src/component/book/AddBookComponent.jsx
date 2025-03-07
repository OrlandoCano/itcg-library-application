import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const AddBookComponent = () => {
    const [book, setBook] = useState({ isbn: '', name: '', author: '', releaseDate: '', editorial: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const saveBook = (e) => {
        e.preventDefault();
        ApiService.addBook(book).then(() => {
            navigate('/books');
        });
    };

    return (
        <div>
            <h2 className="text-center">Add Book</h2>
            <form>
                <div className="form-group">
                    <label>ISBN:</label>
                    <input type="text" name="isbn" className="form-control" value={book.isbn} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Book's name:</label>
                    <input name="name" className="form-control" value={book.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input name="author" className="form-control" value={book.author} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Release Date:</label>
                    <input type="date" name="releaseDate" className="form-control" value={book.releaseDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Editorial:</label>
                    <input type="text" name="editorial" className="form-control" value={book.editorial} onChange={handleChange} />
                </div>
                <button className="btn btn-success" onClick={saveBook}>Save</button>
            </form>
        </div>
    );
};

export default AddBookComponent;
