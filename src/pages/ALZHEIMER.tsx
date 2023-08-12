// src/pages/Page1.tsx
import React from 'react';
import ContentGrid from '../components/ContentGrid';


const AlzheimerPage = () => {
  const contentData = [
    {
      food: 'Papayas.jpg',
      imageCaption: 'Blueberries',
      healthBenefits: 'Blueberries contain many antioxidants including vitamins A,C,and E, which aare absorbed into the cells to protect them against oxidization by free radicals.',
      howToUse: 'Blueberry Pecan Oatmeal: top a bowl of cooked oatmeal with fresh, ripe blueberries, a tablespoon of chopped pecan, and a drizzle of honey.',
      composition: 'Fresh Blueberries\nCarbohydrate: 21 g\nFat: 0 g\nProtein: 1 g\nSodium: 1 mg\nVitamin A: 79.9 IU\nVitamin C: 14.4 mg\nVitamin E: 0.8 mg',
    },
    {
      food: 'ButterSquash.jpg',
      imageCaption: 'Collard Greens',
      healthBenefits: 'Silicon, found in green leafy vegetables such as collard green, helps prevent absorption of aluminium. They also contain folic acid, which helps to kepp homocysteine levels from going too high.',
      howToUse: 'Sautéed Collard Greens: shred collard greens finely. Sauté lightly with chopped garlic and a little olive oil. Squeeze a little lime juice over sautéed collard greens when ready to serve.',
      composition: 'Cooked Collards\nCarbohydrate: 9 g\nFat: 1 g\nProtein: 4 g\nSodium: 30 mg\nFolate: 177 mcg\nVitamin A: 15,416 IU\nVitamin C: 34.6 mg',
    },
    {
      food: 'Peas.jpg',
      imageCaption: 'Black-Eyed Peas',
      healthBenefits: 'Tryptophan, found in black-eyed peas, cannot be produced by the body. The body needs an adequate amount of this amino acid to prevent and deal with neurological disorders.',
      howToUse: 'Black-Eyed Pea Soup: in a large pot combine 2 cups shredded collard greens, 6 cups vegetable broth, 1/2 cup each chopped carrots, celery, and onion, and minced garlic until tender. Add cooked black-eyed peas and salt to taste.',
      composition: 'Boiled Black-Eyed Peas\nCarbohydrate: 36 g\nFat: 1 g\nProtein: 13 g\nSodium: 7 mg\nVitamin A: 25.8 IU\nCalcium: 41.3 mg\nMagnesium: 91.9 mg',
    },
    {
      food: 'Avocados.jpg',
      imageCaption: 'Flaxseeds',
      healthBenefits: 'Vitamin E, an antioxidant found in flaxseeds, not only protects neurons from free radicals, but also helps to repair the neurons in the areas that the neurotransmitters enter them.',
      howToUse: 'A tablespoon of ground flaxseeds can be blended into fruit smoothies or sprinkled on cereal. It can also be mixed into yogurt and applesauce, or sprinkled over a vegetable salad.',
      composition: 'Ground Flaxseeds\nCarbohydrate: 32 g\nFat: 48 g\nProtein: 16 g\nSodium: 32 mg\nCalcium: 286.4 mg\nMagnesium: 438.4 mg\nFolate: 97.6 mg',
    },
    {
      food: 'PumpkinSeeds.jpg',
      imageCaption: 'Carob',
      healthBenefits: 'Carob contains calcium, which helps to prevent the absorption of aluminium into the body. It also contains magnesium, which supports adequate biochemical reactions necessary for brain health.',
      howToUse: 'Hot Carob Drink: whisk 1 cup non-dairy milk and 1 tablespoon carob flour in a saucepan on medium heat. Add 1 tablespoon honey and 1 teaspoon vanila extract.',
      composition: 'Carob Powder\nCarbohydrate: 92 g\nFat: 1 g\nProtein: 5 g\nSodium: 36 mg\nCalcium: 358 mg\nMagnesium: 55.6 mg\nVitamin A: 14.4 IU',
    },
    {
      food: 'Soybeans.jpg',
      imageCaption: 'Buckwheat',
      healthBenefits: 'Magnesium found in buckwheat contributes to building a healthy nervous system, and plays an important role in maintaining health for the brain and preventing Alzheimers.',
      howToUse: 'Buckwheat Salad: combine cooked buckwheat with red onion, broccoli florets, yellow pepper, green olives, chopped walnuts, dill ,mint, lime juice, and a little olive oil and salt.',
      composition: 'Buckwheat\nCarbohydrate: 122 g\nFat: 6 g\nProtein: 23 g\nSodium: 2 mg\nCalcium: 30.6 mg\nMagnesium: 393 mg\nFolate: 51 mcg',
    },
  ];


  return (
    <div>
      {/* Other content for the ACNE page */}
      <ContentGrid data={contentData} />
    </div>
  );
};

export default AlzheimerPage;
