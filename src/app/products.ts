export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  negative: number;
  positive: number;
  quantity: number;
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'Orange',
    price: 200,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 120,
    positive: 367,
    quantity: 150,
    category: 'citrus',
    image: 'assets/images/1.svg',
  },
  {
    id: 2,
    name: 'Banana',
    price: 130,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 90,
    positive: 401,
    quantity: 0,
    category: 'tropical',
    image: 'assets/images/2.svg',
  },
  {
    id: 3,
    name: 'Watermallon',
    price: 60,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 11,
    positive: 47,
    quantity: 111,
    category: 'melons',
    image: 'assets/images/3.svg',
  },
  {
    id: 4,
    name: 'Pear',
    price: 35,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 67,
    positive: 201,
    quantity: 33,
    category: 'apples and pears',
    image: 'assets/images/4.svg',
  },
  {
    id: 5,
    name: 'Pineapple',
    price: 200,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 98,
    positive: 206,
    quantity: 22,
    category: 'tropical',
    image: 'assets/images/5.svg',
  },
  {
    id: 6,
    name: 'Apple',
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 84,
    positive: 380,
    quantity: 65,
    category: 'apples and pears',
    image: 'assets/images/6.svg',
  },
  {
    id: 7,
    name: 'Strawberry',
    price: 300,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 23,
    positive: 98,
    quantity: 360,
    category: 'berries',
    image: 'assets/images/7.svg',
  },
  {
    id: 8,
    name: 'Cherry',
    price: 155,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 16,
    positive: 46,
    quantity: 156,
    category: 'stone',
    image: 'assets/images/8.svg',
  },
  {
    id: 9,
    name: 'Plum',
    price: 50,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 66,
    positive: 195,
    quantity: 11,
    category: 'stone',
    image: 'assets/images/9.svg',
  },
  {
    id: 10,
    name: 'Gojo berries',
    price: 360,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 78,
    positive: 250,
    quantity: 66,
    category: 'berries',
    image: 'assets/images/10.svg',
  },
  {
    id: 11,
    name: 'Kiwi',
    price: 110,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 19,
    positive: 95,
    quantity: 150,
    category: 'berries',
    image: 'assets/images/11.svg',
  },
  {
    id: 12,
    name: 'Mandarin',
    price: 80,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 100,
    positive: 401,
    quantity: 26,
    category: 'citrus',
    image: 'assets/images/12.svg',
  },
  {
    id: 13,
    name: 'Grapes',
    price: 320,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 160,
    positive: 780,
    quantity: 166,
    category: 'berries',
    image: 'assets/images/13.svg',
  },
  {
    id: 14,
    name: 'Melon',
    price: 30,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 55,
    positive: 205,
    quantity: 92,
    category: 'melons',
    image: 'assets/images/14.svg',
  },
  {
    id: 15,
    name: 'Lemon',
    price: 15,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 105,
    positive: 360,
    quantity: 10,
    category: 'citrus',
    image: 'assets/images/15.svg',
  },
  {
    id: 16,
    name: 'Pomegranate',
    price: 400,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 12,
    positive: 44,
    quantity: 29,
    category: 'berries',
    image: 'assets/images/16.svg',
  },
  {
    id: 17,
    name: 'Lime',
    price: 500,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna purus, scelerisque a tortor ullamcorper, tempor elementum leo.',
    negative: 111,
    positive: 365,
    quantity: 55,
    category: 'citrus',
    image: 'assets/images/17.svg',
  },
];
