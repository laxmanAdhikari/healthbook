// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import AcnePage from './pages/ACNE';
import AdhdPage from './pages/ADHD';
import AlzheimerPage from './pages/ALZHEIMER';
import Title from './components/Title';
import AnxietyPage from './pages/ANXIETY';
import AnemiaPage from './pages/ANEMIA';
import ArteriosclerosisPage from './pages/ARTERIOSCLEROSIS';

interface PageProps {
  onPageClick: (page: number) => void;
}

const pagesData = [
  { 
    title: 'ACNE',
    paragraph:'The local inflammation of the skin when hair follicies become blocked by dead skin cells. Sebum accumulates in the sebaceous glands,making them swollen and inflammed and causing eruption on the skin. Acne commonly occurs on the face, neck, chest shoulders and back',
    component: AcnePage
  },
  { 
    title: 'ADHD',
    paragraph:'Attention deficit hyperactivity disorder is a chronic condition which begins in childhood and may last into adulthood. This brain disorder manifests itself persistently through symptoms such as difficulty in concentracting and paying attention, impulsive behavior and hyperactivity', 
    component: AdhdPage 
  },
  { 
    title: 'ALZHEIMER',
    paragraph:'A progressive disease which causes degeneration and death of brain cells, and results in a steady decline in memory and mental function. It begins with mild memory loss, progressing to mental confusion, apathy, and in many cases depression. It is the most common cause of dementia, and results in the loss of intellectual and social skills.', 
    component: AlzheimerPage 
  },
  { 
    title: 'ANEMIA',
    paragraph:'A condition in which the body does not have an adequate supply of red blood cells or hemoglobin. Hemoglobin assists in carrying oxygen to the cells in the body. Fatigue results when the organs do not get the oxygen they need to function properly. Anemia can also cause symptoms such as shortness of breath, palpitations, and a paler then normal skin color.', 
    component: AnemiaPage 
  },
  { 
    title: 'ANXIETY',
    paragraph:'A recurring feeling of nervousness, fear and apprehension because of a percieved danger, a feeling that id difficult to control and may be out of proportion to the actual danger. Axiety can cause physiological changes in the body such as sweating, trembling, dizziness and a rapid heartbeat.', 
    component: AnxietyPage 
  },
  { 
    title: 'ARTERIOSCLEROSIS',
    paragraph:'A condition in which the arteries become thicker and start to harden, which occurs in the heart as well as elsewhere in the body. When arteries harden, they restrict the flow of nutrient-laden, oxygen rich blood to organs, muscle nd tissues. This can lead to stroke, heart attack or eventual organ failure.', 
    component: ArteriosclerosisPage 
  },
  { 
    title: 'ARTHRITIS',
    paragraph:'Arthritus is inflammation of one or more joints. While there are many kinds of arthritus, rheumatoid arthritus and osteoarthritus are the most common. Rheumatoid arthritus is an autoimmune disese thar targets the joint linings. Osteoarthritus occus when the cartilage that covers the end of the bones starts to wear away. Symptoms of arthritus include redness, swelling, stiffness and pain.', 
    component: AlzheimerPage 
  },
  { 
    title: 'ASTHMA',
    paragraph:'A condition that makes breathing difficult as a result of airways narrowing, swelling and producing extra mucus. This can trigger shortness of breath, wheezing and coughing. For some individuals, an asthma attack can be life threatening, while for others it is just a minor issue.', 
    component: AlzheimerPage 
  },
  { 
    title: 'BRONCHITUS',
    paragraph:'Inflammation of the air passages in the lungs. Acute bronchitus is usually caused by a viral infection and starts as a cold and sinus infection which spreads to the airways in the lung. Chronic bronchitus usually occurs in people who smoke, and manifests with inflamed airways and a persistent wet cough. Eventually, scar tissue forms in the lungs and breathing becomes difficult.', 
    component: AlzheimerPage 
  },
  { 
    title: 'CANCER',
    paragraph:'A condition that results from abnormal cell growth and can start in any place and spread through the tissues of the body. Some cancers form tumors or masses of tissue, while others may not. This disease interferes with the normal functioning of the body, and if not controlled, may result in death. There are almost 100 different kinds of cancer.', 
    component: AlzheimerPage 
  },
  { 
    title: 'CANDIDIASIS',
    paragraph:'An opportunistic disease caused by the Candidia fungus which results in infection, particularly in individuals with reduced immune function or those taking antibiotics. This infection most commonly affects the skin, the oral mucosa, the respiratory tract and genital tract.', 
    component: AlzheimerPage 
  },
  { 
    title: 'CANKER SORES',
    paragraph:'These are the most common open mouth sores, usually found inside the lip or cheek, and are also kmown as aphthous ulcers. They are often painful, yellow or white in color, and thr soft tissue around them is usually read and inflamed. Canker sores will usually heall in one to three weeks, with the pain diminishing after seven to ten days.', 
    component: AlzheimerPage 
  },

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
