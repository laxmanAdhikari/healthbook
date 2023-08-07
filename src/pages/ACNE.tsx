// src/pages/Page1.tsx
import React from 'react';
import ContentGrid from '../components/ContentGrid';


const AcnePage = () => {
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
      healthBenefits: 'Papaya promotes elimination of waste products through the urine, reducing the accumulation of impurities on the skin.High in vitamin A, it helps to build healthy skin.',
      howToUse: 'Tropical Fruit Salad: combine chopped papaya,pineapple,kiwi,bannana and mango, and the juice of 1-2 freshly squeezed oranges',
      composition: 'Fresh Papayas Carbohydrate: 14g Fat:0g Protein: 1g Sodium: 4mg Vitamin A: 1,531 IU Vitamin C:86.5mg Calcium: 33.6mg',
    },
    {
      food: 'Peas.jpg',
      imageCaption: 'Peas',
      healthBenefits: 'Papaya promotes elimination of waste products through the urine, reducing the accumulation of impurities on the skin.High in vitamin A, it helps to build healthy skin.',
      howToUse: 'Tropical Fruit Salad: combine chopped papaya,pineapple,kiwi,bannana and mango, and the juice of 1-2 freshly squeezed oranges',
      composition: 'Fresh Papayas Carbohydrate: 14g Fat:0g Protein: 1g Sodium: 4mg Vitamin A: 1,531 IU Vitamin C:86.5mg Calcium: 33.6mg',
    },
    {
      food: 'Avocados.jpg',
      imageCaption: 'Avocados',
      healthBenefits: 'Papaya promotes elimination of waste products through the urine, reducing the accumulation of impurities on the skin.High in vitamin A, it helps to build healthy skin.',
      howToUse: 'Tropical Fruit Salad: combine chopped papaya,pineapple,kiwi,bannana and mango, and the juice of 1-2 freshly squeezed oranges',
      composition: 'Fresh Papayas Carbohydrate: 14g Fat:0g Protein: 1g Sodium: 4mg Vitamin A: 1,531 IU Vitamin C:86.5mg Calcium: 33.6mg',
    },
    {
      food: 'PumpkinSeeds.jpg',
      imageCaption: 'Pumpkin Seeds',
      healthBenefits: 'Papaya promotes elimination of waste products through the urine, reducing the accumulation of impurities on the skin.High in vitamin A, it helps to build healthy skin.',
      howToUse: 'Tropical Fruit Salad: combine chopped papaya,pineapple,kiwi,bannana and mango, and the juice of 1-2 freshly squeezed oranges',
      composition: 'Fresh Papayas Carbohydrate: 14g Fat:0g Protein: 1g Sodium: 4mg Vitamin A: 1,531 IU Vitamin C:86.5mg Calcium: 33.6mg',
    },
    {
      food: 'Soybeans.jpg',
      imageCaption: 'Soybeans',
      healthBenefits: 'Papaya promotes elimination of waste products through the urine, reducing the accumulation of impurities on the skin.High in vitamin A, it helps to build healthy skin.',
      howToUse: 'Tropical Fruit Salad: combine chopped papaya,pineapple,kiwi,bannana and mango, and the juice of 1-2 freshly squeezed oranges',
      composition: 'Fresh Papayas Carbohydrate: 14g Fat:0g Protein: 1g Sodium: 4mg Vitamin A: 1,531 IU Vitamin C:86.5mg Calcium: 33.6mg',
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
