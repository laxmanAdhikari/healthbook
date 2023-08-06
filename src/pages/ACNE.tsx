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
      food: '/images/papaya.jpg',
      healthBenefits: 'Health Benefits 1',
      howToUse: 'How to Use 1',
      composition: 'Composition 1',
    },
    {
      food: '/images/papaya.jpg',
      healthBenefits: 'Health Benefits 2',
      howToUse: 'How to Use 2',
      composition: 'Composition 2',
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
