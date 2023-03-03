import './App.css';

import {useState, useEffect} from "react";

function App() {
  const [books, setBooks] = useState([]);
  const unUsedVar = true; 

  useEffect(() => {
		fetch('/books')
			.then(res => res.json())
			.then(data => setBooks(data))
	}, [])

  return (
		<div>
			{books && books.map(book => ( 
				<div className="book">Title: {book.title}</div>
			))}
		</div>
  );
}

export default App;
