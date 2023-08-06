// src/pages/Page1.tsx
import React from 'react';
import ContentGrid from '../components/ContentGrid';

interface AcneProps {
  onPageClick: (page: number, title: string) => void;
}

const AcnePage: React.FC<AcneProps> = ({ onPageClick }) => {
  const handlePageClick = () => {
    onPageClick(0, 'ACNE');
  };

  const contentData = [
    {
      column1: 'Food 1',
      column2: 'Health Benefits 1',
      column3: 'How to Use 1',
      column4: 'Composition 1',
    },
    {
      column1: 'Food 2',
      column2: 'Health Benefits 2',
      column3: 'How to Use 2',
      column4: 'Composition 2',
    },
    // Add more rows as needed for your content
  ];

  return (
    <div>
      <ContentGrid data={contentData} />
    </div>
  );
};

export default AcnePage;
