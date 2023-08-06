// src/pages/Page1.tsx
import React from 'react';

interface AlzheimerProps {
  onPageClick: (page: number, title: string) => void;
}

const AlzheimerPage: React.FC<AlzheimerProps> = ({ onPageClick }) => {
  const handlePageClick = () => {
    onPageClick(3, 'ALZHEIMER');
  };

  return (
    <div>
      ALZHEIMER content goes here
      <button onClick={handlePageClick}>Go to Page 1</button>
    </div>
  );
};

export default AlzheimerPage;
