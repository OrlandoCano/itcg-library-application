import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListBookComponent from './component/book/ListBookComponent';
import AddBookComponent from './component/book/AddBookComponent';
import EditBookComponent from './component/book/EditBookComponent';

function App() {
  return (
      <Router>
        <div className="container">
            <div className="col-md-9">
                <h1 className="text-center" style={style}>React book Application</h1>
                  <Routes>
                    <Route path="/" element={<ListBookComponent />} />
                    <Route path="/books" element={<ListBookComponent />} />
                    <Route path="/add-book" element={<AddBookComponent />} />
                    <Route path="/edit-book" element={<EditBookComponent />} />
                  </Routes>
            </div>
        </div>
      </Router>
  );
}

const style = {
    color: 'green',
    margin: '10px'
}

export default App;
