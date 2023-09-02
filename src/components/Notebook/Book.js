import React from 'react';
import Page from './Page';
import { FaPlus } from 'react-icons/fa'; // Add the icon import

const Book = ({ book, selectedBook, setSelectedBook, selectedPage, setSelectedPage, openEditor }) => {
    const handleBookClick = () => {
        setSelectedBook(book);
        setSelectedPage(null);
    };

    return (
        <div className={`book ${selectedBook && selectedBook.id === book.id ? 'selected' : ''}`}>
            <h2 onClick={handleBookClick}>Book {book.id}</h2>
            <button onClick={() => openEditor(book.id)}> {/* Pass the book.id as pageId */}
                <FaPlus /> Add Page
            </button>

            <div className="pages-container">
                {book.pages.map((page) => (
                    <Page
                        key={page.id}
                        page={page}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </div>
        </div>
    );
};

export default Book;
