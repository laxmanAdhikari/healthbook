// src/pages/Page1.tsx
import React from 'react';
import ContentGrid from '../components/ContentGrid';


const AcnePage = () => {
  const contentData = [
    {
      food: 'Papayas.jpg',
      healthBenefits: 'Papaya is effective',
      howToUse: 'How to Use 1',
      composition: 'Composition 1',
    },
    {
      food: 'ButterSquash.jpg',
      healthBenefits: 'Health Benefits 2',
      howToUse: 'How to Use it',
      composition: 'Composition 2',
    },
    {
      food: 'Peas.jpg',
      healthBenefits: 'Health Benefits 2',
      howToUse: 'How to Use it',
      composition: 'Composition 2',
    },
    {
      food: 'Avocados.jpg',
      healthBenefits: 'Health Benefits 2',
      howToUse: 'How to Use it',
      composition: 'Composition 2',
    },
    {
      food: 'PumpkinSeeds.jpg',
      healthBenefits: 'Health Benefits 2',
      howToUse: 'How to Use it',
      composition: 'Composition 2',
    },
    {
      food: 'Soybeans.jpg',
      healthBenefits: 'Health Benefits 2',
      howToUse: 'How to Use it',
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


export default AcnePage;
