// src/pages/Page1.tsx
import React from 'react';
import ContentGrid from '../components/ContentGrid';


const AdhdPage = () => {
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
  ];

  return (
    <div>
      {/* Other content for the ACNE page */}
      <ContentGrid data={contentData} />
    </div>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default AdhdPage
