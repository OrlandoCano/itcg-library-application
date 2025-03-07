import axios from 'axios';

const API_URL = 'http://localhost:8080/v1/api/books';

const ApiService = {
    fetchBooks: () => axios.get(API_URL),
    fetchBookById: (bookId) => axios.get(`${API_URL}/${bookId}`),
    deleteBook: (bookId) => axios.delete(`${API_URL}/${bookId}`),
    addBook: (book) => axios.post(API_URL, book),
    editBook: (book) => axios.put(API_URL, book)
};

export default ApiService;
