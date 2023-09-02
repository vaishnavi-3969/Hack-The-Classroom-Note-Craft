import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Book from '../components/Notebook/Book';

const Notebook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);
  const [editorContent, setEditorContent] = useState('');
  const [editorOpen, setEditorOpen] = useState(false);

  const addBook = () => {
    const newBook = {
      id: Date.now(),
      pages: [],
    };
    setBooks([...books, newBook]);
  };

  const addPage = () => {
    if (selectedBook) {
      const newPage = {
        id: Date.now(),
        content: '',
      };
      const updatedBook = { ...selectedBook, pages: [...selectedBook.pages, newPage] };
      setBooks(books.map((book) => (book.id === selectedBook.id ? updatedBook : book)));
    }
  };

  const handleEditorOpen = (pageId) => {
    setEditorOpen(true);
    if (selectedBook) {
      const page = selectedBook.pages.find((page) => page.id === pageId);
      if (page) {
        setEditorContent(page.content || '');
        setSelectedPage(page);
      }
    }
  };
  

  const handleEditorClose = () => {
    setEditorOpen(false);
  };

  const handlePageContentChange = (content) => {
    if (selectedPage) {
      setSelectedPage({ ...selectedPage, content });
      const updatedPages = selectedBook.pages.map((page) =>
        page.id === selectedPage.id ? { ...page, content } : page
      );
      const updatedBook = { ...selectedBook, pages: updatedPages };
      setBooks(books.map((book) => (book.id === selectedBook.id ? updatedBook : book)));
    }
  };
  const openEditor = (pageId) => {
    handleEditorOpen(pageId);
  };

  return (
    <div>
      <h1>Notebook</h1>
      <button onClick={addBook}>Add Book</button>
      <div className="books-container">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            selectedBook={selectedBook}
            setSelectedBook={setSelectedBook}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            openEditor={() => handleEditorOpen(book.id)} // Pass the book.id as pageId
          />

        ))}
      </div>
      {selectedPage && (
        <div>
          <h2>Editor</h2>
          <ReactQuill value={editorContent} onChange={handlePageContentChange} />
          <button onClick={handleEditorClose}>Close Editor</button>
        </div>
      )}
    </div>
  );
};

export default Notebook;
