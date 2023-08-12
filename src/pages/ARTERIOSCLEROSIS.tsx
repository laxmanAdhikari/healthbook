// src/pages/Page1.tsx
import React from 'react';
import ContentGrid from '../components/ContentGrid';


const ArteriosclerosisPage = () => {
  const contentData = [
    {
      food: 'Papayas.jpg',
      imageCaption: 'Kiwifruit',
      healthBenefits: 'Papaya promotes elimination of waste products through the urine, reducing the accumulation of impurities on the skin.High in vitamin A, it helps to build healthy skin.',
      howToUse: 'Tropical Fruit Salad: combine chopped papaya,pineapple,kiwi,bannana and mango, and the juice of 1-2 freshly squeezed oranges',
      composition:'Fresh Papayas\nCarbohydrate: 14g\nFat: 0g\nProtein: 1g\nSodium: 4mg\nVitamin A: 1,531 IU\nVitamin C: 86.5mg\nCalcium: 33.6mg'
    },
    {
      food: 'ButterSquash.jpg',
      imageCaption: 'Pomegranates',
      healthBenefits: 'Butternut, like all vegetables,promptes efficient elimination of waste, and is particularly high in vitaimnA.It also contains vitamin c,calcium and a small amount of iron.',
      howToUse: 'Tropical Fruit Salad: combine chopped papaya,pineapple,kiwi,bannana and mango, and the juice of 1-2 freshly squeezed oranges',
      composition: 'Baked Butternut\nCarbohydrate: 16g\nFat:0g\nProtein: 1g\nSodium: 6mg\nVitamin A: 14,883 IU\nVitamin C:29.4mg\nCalcium: 67.2mg',
    },
    {
      food: 'Peas.jpg',
      imageCaption: 'Almonds',
      healthBenefits: 'Peas are high in niacin and contain vitamins A and C, calcium and iron, which are essential for healthy skin and hair. High in fiber, they assist in the elimination of toxcins from the body.',
      howToUse: 'Green Pea Guacamole:  Process 1 peeled, chopped avocado, 3 chopped green onions, 2 cloves garlic, 16 ounces thawed frozen peas, 4 tablespoons lime juice and a pinch of salt, until smooth. Enjoy with vegetable sticks or crackers at mealtime.',
      composition: 'Fresh Green Peas\nCarbohydrate: 21 g\n Fat:1 g\n Protein: 8 g\n Sodium: 7 mg\n Vitamin A: 1,109 IU\n Vitamin C: 58 mg',
    },
    {
      food: 'Avocados.jpg',
      imageCaption: 'Sppinach',
      healthBenefits: 'Vitamin E found in avocado works with vitamin A to buid healthy skin cells. Avocados are a source of fiber which helps detoxcify the body and contain calcium which promotes a clear skin.',
      howToUse: 'Creamy Avocado Pasta: process 1 avocado, 1 clove garlic, 1/4 cup fresh basil leaves, 1 tablespoon olive oil, 1 tablespoon fresh lemon juice, a little water as needed and salt to taste, until creamy. Stir into hot cooked pasta.',
      composition: 'Fresh Avocados\nCarbohydrate: 13 g\nFat: 22 g\nProtein: 3 g\nSodium: 11 mg\nVitamin C: 15 mg\nCalcium: 18 mg\nIron: 0.8 mg',
    },
    {
      food: 'PumpkinSeeds.jpg',
      imageCaption: 'Garlic',
      healthBenefits: 'Soybeans, as well as the foods made from them, such as soymilk and tofu, contain phytoestrogens that help to balance the hormones, which reduces the risk of acne.',
      howToUse: 'Mixed Berry Smoothie: blend 2 cups fresh or frozen mixed berries, 1 sliced banana, 1 cup plain unsweetened soy milk and 1 tablespoon honey until smooth and creamy.',
      composition: 'Plain Soy Milk\nCarbohydrate: 8 g\nFat: 4 g\nProtein: 7 g\nSodium: 119 mg\nCalcium: 299 mg\nIron: 1.1 mg\nZinc: 0.6 mg',
    },
    {
      food: 'Soybeans.jpg',
      imageCaption: 'Pinto Beans',
      healthBenefits: 'Soybeans, as well as the foods made from them, such as soymilk and tofu, contain phytoestrogens that help to balance the hormones, which reduces the risk of acne.',
      howToUse: 'Mixed Berry Smoothie: blend 2 cups fresh or frozen mixed berries, 1 sliced banana, 1 cup plain unsweetened soy milk and 1 tablespoon honey until smooth and creamy.',
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

export default ArteriosclerosisPage;
