// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import AcnePage from './pages/ACNE';
import AdhdPage from './pages/ADHD';
import AlzheimerPage from './pages/ALZHEIMER';
import Title from './components/Title';
import ContentGrid from './components/ContentGrid';

const pagesData = [
  { title: 'ACNE', component: AcnePage },
  { title: 'ADHD', component: AdhdPage },
  { title: 'ALZHEIMER', component: AlzheimerPage },
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
    // Add your paragraph content here for each page
    if (currentPage === 0) {
      return "Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It often causes whiteheads, blackheads, or pimples, and usually appears on the face, forehead, chest, upper back, and shoulders. Acne is most common among teenagers, but it can affect people of all ages.";
    } else if (currentPage === 1) {
      return "ADHD stands for Attention Deficit Hyperactivity Disorder. It is a neurodevelopmental disorder that affects both children and adults. People with ADHD may have difficulty paying attention, staying organized, and controlling impulsive behaviors. Treatment for ADHD often includes medication, therapy, and lifestyle changes.";
    } else if (currentPage === 2) {
      return "Alzheimer's disease is a progressive neurodegenerative disorder that affects memory, thinking, and behavior. It is the most common cause of dementia in older adults. As the disease progresses, individuals may experience confusion, mood swings, and difficulty with daily tasks. There is currently no cure for Alzheimer's disease, but treatments can help manage symptoms.";
    }
    return "";
  };

  const getPageContent = (currentPage: number) => {
    const PageComponent = pagesData[currentPage].component;
    return (
      <>
        <PageComponent onPageClick={handlePageClick} />
        <div className="flip-sign" onClick={handleNextPage}>
          &#10149;
          <div className="flip-text">Flip</div>
        </div>
      </>
    );
  };
  
  const contentData = [
    { food: '/images/papaya.jpg', healthBenefits: "ertrtrtrgfgfgfdgfdgfdgfdgfgHealth Benefits 1", howToUse: "How to Use 1", composition: "Composition 1" },
    { food: '/images/papaya.jpg', healthBenefits: "Health Benefits 2", howToUse: "How to Use 2", composition: "Composition 2" },
  ];

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
            <ContentGrid data={contentData} />
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
