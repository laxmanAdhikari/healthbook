// src/pages/Page1.tsx
import React from 'react';

interface AdhdProps {
  onPageClick: (page: number, title: string) => void;
}

const AdhdPage: React.FC<AdhdProps> = ({ onPageClick }) => {
  const handlePageClick = () => {
    onPageClick(2, 'ADHD');
  };

  return (
    <div>
      ADHD content goes here
      <button onClick={handlePageClick}>Go to Page 1</button>
    </div>
  );
};

export default AdhdPage;
