// src/pages/Page1.tsx
import React from 'react';
import ContentGrid from '../components/ContentGrid';


const AdhdPage = () => {
  const contentData = [
    {
      food: 'Bananas.jpg',
      imageCaption: 'Bananas',
      healthBenefits: 'Vitamin B6 found in bananas is n essential nutrient needed for producing brain chemical such as dopamine, serotonin and norepinephrine, which play a role in maintaining normal behavior.',
      howToUse: 'Banana Peanut Butter Smoothie: blend 1 sliced fresh or frozen banana, 2 tablespoons of unsweetened peanut butter, 1 date, and 1 cup unsweetened non-dairy milk.',
      composition: 'Fresh Bananas\nCarbohydrate: 34 g\nFat: 0 g\nProtein: 2 g\nSodium: 2 mg\nVitamin B6: 0.6 mg\nMagnesium: 40.5 mg\nIron: 0.4 mg',
    },
    {
      food: 'Apricots.jpg',
      imageCaption: 'Apricots',
      healthBenefits: 'Apricots are a good source of iron, a key nutrient for the healthy development of the central nervous system. Iron deficiency may lead to decreased attention span and behavioral disorders.',
      howToUse: 'Apricot Date Balls: process 1 1/2 cups dried apricots, 3/4 cup pitted dates, 1 cup chopped almonds, 1 cup unsweetened desiccated coconut. Add just enough water to be able to form small balls. Roll in coconut and refrigerate.',
      composition: 'Dried Apricots\nCarbohydrate: 81 g\nFat: 1 g\nProtein: 4 g\nSodium: 13 mg\nVitamin B6: 0.2 mg\nIron: 3.5 mg\nZinc: 0.5 mg',
    },
    {
      food: 'ChiaSeeds.jpg',
      imageCaption: 'Chia Seeds',
      healthBenefits: 'Chia seeds contain omega-3 fatty acids which assist brain cell communication, and facilitate the normal transmission of the neurotransmitters serotonin and dopamine in the brain.',
      howToUse: 'Banana Chia Pudding: blend 1 1/2 cups non-dairy milk, 1/2 cup unsweetened peanut butter, and 2 ripe bananas. Pour into a bowl. Stir in 3 tablespoons of chia seeds. Cover. Refrigerate for at least 5 hours before serving.',
      composition: 'Chia Seed\nCarbohydrate: 72 g\nFat: 51 g\nProtein: 26 g\nSodium: 31 mg\nCalcium: 1,029 mg\nZinc: 5.71 g\nOmega-3: 28,610 mg',
    },
    {
      food: 'Peanuts.jpg',
      imageCaption: 'Peanuts',
      healthBenefits: 'Zinc found in peanuts is a cofactor for enzymes which play a role in the metabolism for neurotransmitters. Zinc deficiency slows mental development and contributes to hyperactivity.',
      howToUse: 'Peanut Apricot Trail Mix: combine 1/2 cup peanuts, 1/2 cup cashews, 1/2 cup almonds, 1/2 cup sunflower seed, 1/2 cup pumpkin seed, 1/2 cup unsweetened banana slices, 1/2 cup raisins and 1/2 cup dried apricot chunks. Store in a glass jar.',
      composition: 'Dry Roasted Peanuts\nCarbohydrate: 31 g\nFat: 73 g\nProtein: 35 g\nSodium: 9 mg\nVitamin B6: 0.4 mg\nMagnesium: 257 mg\nSelenium: 11 mcg',
    },
    {
      food: 'SoyBeans.jpg',
      imageCaption: 'Soybeans',
      healthBenefits: 'Tofu, which is made from soybeans, contains the minerals zinc, phosphorous, seleniumm, and calcium, as well as protien and riboflavin which work together to decrease the risk of ADHD.',
      howToUse: 'Scrambled Tofu: sauté 1 chopped onion in a little olive oil. Add one package crumbed tofu, 1/2 teaspoon cumin, 1/2 teaspoon turmeric, 1/2 teaspoon onion powder, 1/2 teaspoon garlic powder, salt to taste. Stir-fry until slightly browned. ',
      composition: 'Regular Tofu\nCarbohydrate: 4 g\nFat: 12 g\nProtein: 20 g\nSodium: 18 mg\nPhosphorous: 240 mg\nSelenium: 11 mcg\nZinc: 2 mg',
    },
    {
      food: 'NavyBeans.jpg',
      imageCaption: 'Navy Beans',
      healthBenefits: 'Navy beans contain magnesium which helps to activate approximately 300 enzymes and controls some of the processes of the central nervous system. Magnesium deficiency can cause neuromuscular hyperactivity.',
      howToUse: 'Navy Bean Hummus: process 1 1/2 cups cood navy beans, 2 tablespoons tahini, 1/2 teaspoon garlic powder, 1/2 teaspoon onion powder, 1/4 teaspoon cumin, 2 tablespoons lemon juice, 1 tablespoon olive oil, and salt to taste.',
      composition: 'Cooked Navy Beans\nCarbohydrate: 48 g\nFat: 1 g\nProtein: 15 g\nSodium: 0 mg\nMagnesium: 96.4 mg\nPhosphorus: 262 mg\nZinc: 1.9 mg',
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
