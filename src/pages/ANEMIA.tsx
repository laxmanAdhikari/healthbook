// src/pages/Page1.tsx
import React from 'react';
import ContentGrid from '../components/ContentGrid';


const AnemiaPage = () => {
  const contentData = [
    {
      food: 'Papayas.jpg',
      imageCaption: 'Molasses',
      healthBenefits: 'Blackstrap molasses is a rich and safe source of iron supplementation and preferable to iron supplements, which sometimes carry health risks.',
      howToUse: 'Pumpkin Pie Smoothie: blend 1 cup non-dairy milk, 1/2 cup cooked pumpkin, 1 teaspoon blackstrap molasses, 1 teaspoon pumpkin pie spice, and 1 fresh or frozen banan.',
      composition:'Molasses\nCarbohydrate: 252 g\nFat: 0 g\nProtein: 0 g\nSodium: 125 mg\nIron: 15.9 mg\nCalcium: 691 mg\nMagnesium: 816 mg'
    },
    {
      food: 'ButterSquash.jpg',
      imageCaption: 'Soybeans',
      healthBenefits: 'Soybeans are a good source of iron and folate, nutrients the body needs in order to be able to create new red blood cells.',
      howToUse: 'Soybean Hummus: process 2 cups cooked soybeans, 1/2 cup water, 3 teaspoons lemon juice, 2 medium cloves garlic, and 1 teaspoon of salt. Enjoy with carrot or celery sticks, or on dried crackers.',
      composition: 'Cooked Soybeans\nCarbohydrate: 17 g\nFat: 15 g\nProtein: 29 g\nSodium: 2 mg\nIron: 8.8 mg\nFolate: 92.9 mcg\nVitamin C: 2.9 mg',
    },
    {
      food: 'Peas.jpg',
      imageCaption: 'Asparagus',
      healthBenefits: 'The folic acid found in asparagus helps to optimize the celluar processes of the body, enabling it to produce sufficient red blood cells. It also contains iron, which helps prevent deficiency.',
      howToUse: 'Steamed Asparagus: place asparagus in a steamer basket over boiling water for 2-6 minutes. Cover. Steam until soft enough to pierce. Drizzle with a little olive oil and lemon juice. Add salt to taste.',
      composition: 'Cooked Asparagus\nCarbohydrate: 8 g\n Fat: 0 g\n Protein: 4 g\n Sodium: 26 mg\nVitamin C: 13.8 mg\nFolate: 268 mcg\nIron: 1.6 mg',
    },
    {
      food: 'Avocados.jpg',
      imageCaption: 'Beets',
      healthBenefits: 'Beets provide a good supply of folic acid, a nutrient essential to the manufacture of red blood cells. They also provide vitamin C, whih helps with the absorption of iron.',
      howToUse: 'Beet Veggie Salad: on individual plates, layer baby spinach, shredded beets, shredded carrots, cooked quinoa, edamame, slivered almonds, cubed avocado and cilantro. Drizzle with a little lime juice and olive oil.',
      composition: 'Fresh Beets\nCarbohydrate: 13 g\nFat: 0 g\nProtein: 2 g\nSodium: 106 mg\nFolate: 148 mcg\nIron: 1.1 mg\nVitamin C: 6.7 mg',
    },
    {
      food: 'PumpkinSeeds.jpg',
      imageCaption: 'Turmeric',
      healthBenefits: 'Turmeric provides the body with some of the iron required to make red blood cells. A deficiency in iron has linked with deficiency anemias, often found in the ailing or elderly.',
      howToUse: 'Mix 1 tablespoon of powdered turmeric very thoroughly into non-dairy milk of your choice. Drink 1-3 times a day with meals.',
      composition: `Turmeric Powder
                     Carbohydrate: 65 g\n Fat: 16 g
                     Protein: 16 g 
                     Sodium: 48 mg 
                     Folate: 41.6 mcg 
                     Iron: 44.8 mg 
                     Vitamin C: 27.2 mg'`,
    },
    {
      food: 'Soybeans.jpg',
      imageCaption: 'Oranges',
      healthBenefits: 'Vitamin C as well as the folic acid in citrus fruit such as oranges helps with iron absorption. The folic acid also optimizes cellular processes supporting the production of red blood cells.',
      howToUse: 'Orange Salad Dressing: blend 3 tablespoons orange juice, 1 teaspoon honey, 3 teaspoons lime juice, 1/2 ripe avocado, 3 tablespoons oive oil, 1/4 teaspoon cumin, and salt to taste.',
      composition: 'Fresh Orange Juice\nCarbohydrate: 26 g\nFat: 0 g\nProtein: 2 g\nSodium: 2 mg\nFolate: 74.4 mcg\nIron: 0.5 mg\nVitamin C: 124 mg',
    },
  ];

  return (
    <div>
      {/* Other content for the ACNE page */}
      <ContentGrid data={contentData} />
    </div>
  );
};

export default AnemiaPage;
