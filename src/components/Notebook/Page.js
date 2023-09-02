import React, { useState } from 'react';

const Page = ({ page, selectedPage, setSelectedPage, handleEditorOpen, handleEditorClose, handlePageContentChange }) => {
  const handlePageClick = () => {
    setSelectedPage(page);
    if (!page.content) {
      // Open the editor only if the page content is empty
      handleEditorOpen(page.id);
    }
  };

  return (
    <div
      className={`page ${selectedPage && selectedPage.id === page.id ? 'selected' : ''}`}
      onClick={handlePageClick}
    >
      Page {page.id}
      {page.content && <p className="page-content">{page.content}</p>}
    </div>
  );
};

export default Page;
