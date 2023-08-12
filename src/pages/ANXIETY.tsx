// src/pages/Page1.tsx
import React from 'react';
import ContentGrid from '../components/ContentGrid';


const AnxietyPage = () => {
  const contentData = [
    {
      food: 'Papayas.jpg',
      imageCaption: 'Walnuts',
      healthBenefits: 'Walnuts are a rich source of omega-3 fatty acids, which may help to lower the level of cytokines resulting from nervousness and this may help reduce anxiety.',
      howToUse: 'Walnut Pesto: process 1/2 cup walnuts, 2 cups fresh basil, 1-2 cloves garlic, 1/4 cup olive oil, and salt to taste. Use on pasta or sandwiches or mix with grains.',
      composition:'Fresh Papayas\nCarbohydrate: 14g\nFat: 0g\nProtein: 1g\nSodium: 4mg\nVitamin A: 1,531 IU\nVitamin C: 86.5mg\nCalcium: 33.6mg'
    },
    {
      food: 'ButterSquash.jpg',
      imageCaption: 'Bananas',
      healthBenefits: 'Bananas contain carbohydrates, vitamin B6, magnesium, and potassium. A deficiency in any of these nutrients has been found to contribute toward anxiety.',
      howToUse: 'Banana Sunflower Seed Oatmeal: top a bowl of oatmeal with sliced banana, chopped strawberries, 2 teaspoons sunflower seeds and a drizzle of honey.',
      composition: 'Baked Butternut\nCarbohydrate: 16g\nFat:0g\nProtein: 1g\nSodium: 6mg\nVitamin A: 14,883 IU\nVitamin C:29.4mg\nCalcium: 67.2mg',
    },
    {
      food: 'Peas.jpg',
      imageCaption: 'Millet',
      healthBenefits: 'Millet is a good source of phosphorous, which is required for the efficient functioning of the brain. A deficiency in phosphorous is a factor contributing to anxiety.',
      howToUse: 'Millet Veggie Salad: combine cooked millet with chopped cucumber and tomato, yellow bell pepper slices, sliced green onions a little fresh parsley and mint, olive oil, lemon juice, and a little salt.',
      composition: 'Fresh Green Peas\nCarbohydrate: 21 g\n Fat:1 g\n Protein: 8 g\n Sodium: 7 mg\n Vitamin A: 1,109 IU\n Vitamin C: 58 mg',
    },
    {
      food: 'Avocados.jpg',
      imageCaption: 'Barley',
      healthBenefits: 'The complex carbohydrates found in barley may help to increase the serotonin levels in the brain. Having adequate serotonin has a calming effect on the body.',
      howToUse: 'Barley Burgers: mash 2 cups cooked barley and 2 cups cooked pinto beans. Add 1/2 cup finely chopped onion, 1/2 teaspoon sage, 1/4 cup flour, 1 tablespoon olive oil, and 1 teaspoon salt. Form into burgers. Bake at 360°F for 40 minutes, turning over after 20 minutes.',
      composition: 'Fresh Avocados\nCarbohydrate: 13 g\nFat: 22 g\nProtein: 3 g\nSodium: 11 mg\nVitamin C: 15 mg\nCalcium: 18 mg\nIron: 0.8 mg',
    },
    {
      food: 'PumpkinSeeds.jpg',
      imageCaption: 'Mung Beans',
      healthBenefits: 'The choline found in mung beans helps to maintain the central nervous system and prevent choline deficiency, which contributes toward causing anxiety.',
      howToUse: 'Mung Bean Sprouts: rinse and then soak 2 tablespoons  mung beans in water; cover for 8 hours. Drain. Rinse. Place in jar and cover top with cheesecloth and hold cloth on with an elastic band. Keep in cool dark place. Rinse and drain every 12 hours for 2-5 days until sprouted.',
      composition: `Dried Green Pepitas
                     Carbohydrate: 25 g\n Fat: 63 g
                     Protein: 34 g 
                     Sodium: 25 mg 
                     Calcium: 59.3 mg 
                     Iron: 20.7 mg 
                     Zinc: 10.3 mg'`,
    },
    {
      food: 'Soybeans.jpg',
      imageCaption: 'Sunflower Seeds',
      healthBenefits: 'Sunflower seeds contain zinc, an  important trace element. Zinc helps alleviate the symptoms of anxiety that can be casued by a zinc deficiency.',
      howToUse: 'Sunflower Seed Smoothie: blend 1 1/4 cups non-dairy milk, 1 sliced banana, 1 slice fresh pineapple, 2 tablespoons sunflower seeds, and 1 teaspoon honey.',
      composition: 'Plain Soy Milk\nCarbohydrate: 8 g\nFat: 4 g\nProtein: 7 g\nSodium: 119 mg\nCalcium: 299 mg\nIron: 1.1 mg\nZinc: 0.6 mg',
    },
  ];

  return (
    <div>
      {/* Other content for the ACNE page */}
      <ContentGrid data={contentData} />
    </div>
  );
};

export default AnxietyPage;
