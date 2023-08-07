// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import AcnePage from './pages/ACNE';
import AdhdPage from './pages/ADHD';
import AlzheimerPage from './pages/ALZHEIMER';
import Title from './components/Title';

interface PageProps {
  onPageClick: (page: number) => void;
}

const pagesData = [
  { title: 'ACNE',paragraph:'Acne is a skin condition', component: AcnePage },
  { title: 'ADHD',paragraph:'ADHD is...', component: AdhdPage },
  { title: 'ALZHEIMER',paragraph:'ALZHEIMER is ..', component: AlzheimerPage },
];


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = pagesData.length;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const getCurrentTitle = () => {
    return pagesData[currentPage].title;
  };

  const getCurrentParagraph = () => {
    return pagesData[currentPage].paragraph;
  };

  const getCurrentComponent = () => {
    const CurrentPageComponent = pagesData[currentPage].component as React.FC<PageProps>;
    return <CurrentPageComponent onPageClick={handlePageClick} />;
  };
  
  return (
    <div className="app-container">
      <div className="left-panel">
        <div className="table-of-contents">
          <h2>Table of Contents</h2>
          <ul>
            {pagesData.map((page, index) => (
              <li key={index} onClick={() => handlePageClick(index)}>
                {page.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="center-panel">
        <div className="header">
        <Title title={getCurrentTitle()} paragraph={getCurrentParagraph()} />
        </div>
        <div className="book-container">
          <div className="pages" data-current-page={currentPage}>
            {getCurrentComponent()}
          </div>
        </div>
        <div className="footer">
          <div className="copy-right">
              &copy; 2023 Your Website
          </div>
          <div className="navigation">
            <button onClick={handlePrevPage} disabled={currentPage === 0}>Previous Page</button>
            <span>Page {currentPage + 1} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>Next Page</button>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default App;
