// src/pages/Page1.tsx
import React from 'react';
import ContentGrid from '../components/ContentGrid';


const AdhdPage = () => {
  const contentData = [
    {
      food: 'Papayas.jpg',
      imageCaption: 'Papaya',
      healthBenefits: 'Papaya promotes elimination of waste products through the urine, reducing the accumulation of impurities on the skin.High in vitamin A, it helps to build healthy skin.',
      howToUse: 'Tropical Fruit Salad: combine chopped papaya,pineapple,kiwi,bannana and mango, and the juice of 1-2 freshly squeezed oranges',
      composition: 'Fresh Papayas Carbohydrate: 14g Fat:0g Protein: 1g Sodium: 4mg Vitamin A: 1,531 IU Vitamin C:86.5mg Calcium: 33.6mg',
    },
    {
      food: 'ButterSquash.jpg',
      imageCaption: 'Butter Squash',
      healthBenefits: 'Health Benefits 2',
      howToUse: 'How to Use it',
      composition: 'Composition 2',
    },
    {
      food: 'Peas.jpg',
      imageCaption: 'Peas',
      healthBenefits: 'Health Benefits 2',
      howToUse: 'How to Use it',
      composition: 'Composition 2',
    },
    {
      food: 'Avocados.jpg',
      imageCaption: 'Avocados',
      healthBenefits: 'Health Benefits 2',
      howToUse: 'How to Use it',
      composition: 'Composition 2',
    },
    {
      food: 'PumpkinSeeds.jpg',
      imageCaption: 'Pumpkin Seeds',
      healthBenefits: 'Health Benefits 2',
      howToUse: 'How to Use it',
      composition: 'Composition 2',
    },
    {
      food: 'Soybeans.jpg',
      imageCaption: 'Soybeans',
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

// eslint-disable-next-line import/no-anonymous-default-export
export default AdhdPage
