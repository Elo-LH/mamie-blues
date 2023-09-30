export const recipes = [
  {
    id: '0000001',
    name: 'French Crêpes',
    description: 'Pan cooked & delicious without sugar',
    author: {
      name: 'Simone',
      country: 'France',
    },
    difficulty: 'Easy',
    cost: 'Cheap',
    timing: [
      { name: 'Total', minutes: 100 },
      { name: 'Preparation', minutes: 10 },
      { name: 'Cooking', minutes: 30 },
      { name: 'Resting', minutes: 60 },
    ],
    servings: 5,
    ingredients: [
      {
        name: 'Flour',
        quantity: 500,
        metric: 'gram',
      },
      {
        name: 'Milk',
        quantity: 1,
        metric: 'liter',
      },
      {
        name: 'Eggs',
        quantity: 5,
        metric: null,
      },
    ],
    steps: [
      {
        number: 1,
        name: 'Add eggs to flour',
        ingredients: [
          {
            name: 'Flour',
            quantity: 500,
            metric: 'gram',
          },
          {
            name: 'Eggs',
            quantity: 5,
            metric: null,
          },
        ],
        description:
          "Put all the flour in a bol. Make room in the middle for the eggs. Break and put the eggs in the middle of the floor and mix till its becoming difficult, then we'll add the milk.",
        picture: null,
      },
      {
        number: 2,
        name: 'Add milk to mix',
        ingredients: [
          {
            name: 'Milk',
            quantity: 1,
            metric: 'liter',
          },
        ],
        description:
          'Add slowly some milk to be able to mix all the flour. You need to have a consistent dough. Then work it with a wooden spoon making mouvement from the side to push it all in the middle till your dough is uniform. Then add slowly all the milk while mixing',
        picture: null,
      },
      {
        number: 3,
        name: 'Let the dough rest',
        ingredients: [],
        description:
          'Cover the bowl and let it rest 1 hour minimum in the fridge.',
        picture: null,
      },
      {
        number: 4,
        name: 'Cook the crêpes in the pan',
        ingredients: [],
        description:
          "Heat a pan between medium and high heat, put some butter to oil it. Add a ladle of dough in the pan and make circular mouvement with the pan to spread it all over thanks to gravity. Then let it cook until the edges start to come off. Turn it over for a few seconds and then put it on a plate. Do it again until bowl of dough is empty. It's better to oil the pan regularly with butter, each time or only when it start to stick, at your preference.",
        picture: null,
      },
    ],
  },
  {
    id: '0000002',
    name: 'Tortillas',
    description: 'Fill it with whatever you want',
    author: {
      name: 'Rosa',
      country: 'Spain',
    },
    difficulty: 'Easy',
    cost: 'Cheap',
    timing: [
      { name: 'Total', minutes: 1540 },
      { name: 'Preparation', minutes: 90 },
      { name: 'Cooking', minutes: 30 },
      { name: 'Resting', minutes: 1440 },
    ],
    servings: 6,
    ingredients: [
      {
        name: 'Flour',
        quantity: 500,
        metric: 'gram',
      },
      {
        name: 'Milk',
        quantity: 1,
        metric: 'liter',
      },
      {
        name: 'Eggs',
        quantity: 5,
        metric: null,
      },
    ],
    steps: [
      {
        number: 1,
        name: 'Add eggs to flour',
        ingredients: [
          {
            name: 'Flour',
            quantity: 500,
            metric: 'gram',
          },
          {
            name: 'Eggs',
            quantity: 5,
            metric: null,
          },
        ],
        description:
          "Put all the flour in a bol. Make room in the middle for the eggs. Break and put the eggs in the middle of the floor and mix till its becoming difficult, then we'll add the milk.",
        picture: null,
      },
      {
        number: 2,
        name: 'Add milk to mix',
        ingredients: [
          {
            name: 'Milk',
            quantity: 1,
            metric: 'liter',
          },
        ],
        description:
          'Add slowly some milk to be able to mix all the flour. You need to have a consistent dough. Then work it with a wooden spoon making mouvement from the side to push it all in the middle till your dough is uniform. Then add slowly all the milk while mixing',
        picture: null,
      },
      {
        number: 3,
        name: 'Let the dough rest',
        ingredients: [],
        description:
          'Cover the bowl and let it rest 1 hour minimum in the fridge.',
        picture: null,
      },
      {
        number: 4,
        name: 'Cook the crêpes in the pan',
        ingredients: [],
        description:
          "Heat a pan between medium and high heat, put some butter to oil it. Add a ladle of dough in the pan and make circular mouvement with the pan to spread it all over thanks to gravity. Then let it cook until the edges start to come off. Turn it over for a few seconds and then put it on a plate. Do it again until bowl of dough is empty. It's better to oil the pan regularly with butter, each time or only when it start to stick, at your preference.",
        picture: null,
      },
    ],
  },
  {
    id: '0000003',
    name: 'Pancakes',
    description: 'With chocolate chips and apple to make it more fluffy',
    author: {
      name: 'Elizabeth',
      country: 'England',
    },
    difficulty: 'Easy',
    cost: 'Cheap',
    timing: [
      { name: 'Total', minutes: 35 },
      { name: 'Preparation', minutes: 20 },
      { name: 'Cooking', minutes: 15 },
      { name: 'Resting', minutes: 0 },
    ],
    servings: 6,
    ingredients: [
      {
        name: 'Flour',
        quantity: 500,
        metric: 'gram',
      },
      {
        name: 'Baking powder',
        quantity: 1,
        metric: 'table spoon',
      },
      {
        name: 'Sugar',
        quantity: 2,
        metric: 'table spoon',
      },
      {
        name: 'Chocolate',
        quantity: 100,
        metric: 'gram',
      },
      {
        name: 'Apple compote',
        quantity: 20,
        metric: 'gram',
      },
      {
        name: 'Oil',
        quantity: 2,
        metric: 'table spoon',
      },
      {
        name: 'Egg',
        quantity: 1,
        metric: null,
      },
    ],
    steps: [
      {
        number: 1,
        name: 'Add eggs to flour',
        ingredients: [
          {
            name: 'Flour',
            quantity: 500,
            metric: 'gram',
          },
          {
            name: 'Eggs',
            quantity: 5,
            metric: null,
          },
        ],
        description:
          "Put all the flour in a bol. Make room in the middle for the eggs. Break and put the eggs in the middle of the floor and mix till its becoming difficult, then we'll add the milk.",
        picture: null,
      },
      {
        number: 2,
        name: 'Add milk to mix',
        ingredients: [
          {
            name: 'Milk',
            quantity: 1,
            metric: 'liter',
          },
        ],
        description:
          'Add slowly some milk to be able to mix all the flour. You need to have a consistent dough. Then work it with a wooden spoon making mouvement from the side to push it all in the middle till your dough is uniform. Then add slowly all the milk while mixing',
        picture: null,
      },
      {
        number: 3,
        name: 'Let the dough rest',
        ingredients: [],
        description:
          'Cover the bowl and let it rest 1 hour minimum in the fridge.',
        picture: null,
      },
      {
        number: 4,
        name: 'Cook the crêpes in the pan',
        ingredients: [],
        description:
          "Heat a pan between medium and high heat, put some butter to oil it. Add a ladle of dough in the pan and make circular mouvement with the pan to spread it all over thanks to gravity. Then let it cook until the edges start to come off. Turn it over for a few seconds and then put it on a plate. Do it again until bowl of dough is empty. It's better to oil the pan regularly with butter, each time or only when it start to stick, at your preference.",
        picture: null,
      },
    ],
  },
  {
    id: '0000004',
    name: 'Pasta',
    description: `With fresh eggs, it's something else !`,
    author: {
      name: 'Lucia',
      country: 'Italy',
    },
    difficulty: 'Easy',
    cost: 'Cheap',
    timing: [
      { name: 'Total', minutes: 180 },
      { name: 'Preparation', minutes: 120 },
      { name: 'Cooking', minutes: 60 },
      { name: 'Resting', minutes: 0 },
    ],
    servings: 6,
    ingredients: [
      {
        name: 'Flour',
        quantity: 500,
        metric: 'gram',
      },
      {
        name: 'Milk',
        quantity: 1,
        metric: 'liter',
      },
      {
        name: 'Eggs',
        quantity: 5,
        metric: null,
      },
    ],
    steps: [
      {
        number: 1,
        name: 'Add eggs to flour',
        ingredients: [
          {
            name: 'Flour',
            quantity: 500,
            metric: 'gram',
          },
          {
            name: 'Eggs',
            quantity: 5,
            metric: null,
          },
        ],
        description:
          "Put all the flour in a bol. Make room in the middle for the eggs. Break and put the eggs in the middle of the floor and mix till its becoming difficult, then we'll add the milk.",
        picture: null,
      },
      {
        number: 2,
        name: 'Add milk to mix',
        ingredients: [
          {
            name: 'Milk',
            quantity: 1,
            metric: 'liter',
          },
        ],
        description:
          'Add slowly some milk to be able to mix all the flour. You need to have a consistent dough. Then work it with a wooden spoon making mouvement from the side to push it all in the middle till your dough is uniform. Then add slowly all the milk while mixing',
        picture: null,
      },
      {
        number: 3,
        name: 'Let the dough rest',
        ingredients: [],
        description:
          'Cover the bowl and let it rest 1 hour minimum in the fridge.',
        picture: null,
      },
      {
        number: 4,
        name: 'Cook the crêpes in the pan',
        ingredients: [],
        description:
          "Heat a pan between medium and high heat, put some butter to oil it. Add a ladle of dough in the pan and make circular mouvement with the pan to spread it all over thanks to gravity. Then let it cook until the edges start to come off. Turn it over for a few seconds and then put it on a plate. Do it again until bowl of dough is empty. It's better to oil the pan regularly with butter, each time or only when it start to stick, at your preference.",
        picture: null,
      },
    ],
  },
]
