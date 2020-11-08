export const data = {
  products: [
    {
      _id: '1',
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '2',
      name: 'Adidas Fit Shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '3',
      name: 'Lacoste Free Shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      _id: '4',
      name: 'Nike Slim Pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      _id: '5',
      name: 'Puma Slim Pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '6',
      name: 'Adidas Fit Pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};

export const navData = [
  {
    id: 1,
    link: "/new-arrivals",
    title: "NEW ARRIVALS",
    position: "left",
  },
  {
    id: 2,
    link: "/shop",
    title: "SHOP",
    position: "left",
  },
  {
    id: 3,
    link: "/collections",
    title: "COLLECTIONS",
    position: "left",
  },
  {
    id: 4,
    link: "/",
    title: "SEARCH",
    position: "right",
  },
  {
    id: 5,
    link: "/signin",
    title: "SIGN IN",
    position: "right",
  },
  {
    id: 6,
    link: "/cart",
    title: "CART",
    position: "right",
  },
  {
    id: 7,
    link: "/favorites",
    title: "FAVORITES",
    position: "right",
  },
];


 export const sidebarData = [
          {
            id:'CATEGORIES',
            title: 'CATEGORIES',
            type: 'simple',
            children: ["TOPS", "TEES AND TANKS", "SHIRTS", "DRESSES", "JACKETS", "KNITWEAR", "JUMPSUITS", "BOTTOMS", "INTIMATES", "SHORTS", "JEANS", "SKIRTS", "SALE", "SHOP ALL"],
          },

          {
            id: 'FILTERS',
            title: 'FILTERS',
            type: 'drawer',
            children: [{title: 'SIZE', subchilds: ["sm", "md", "lg", "xl"]},
                       {title: 'PRICE', subchilds: ["$100", "$200", "$500", "$600"]},
                       {title: 'COLOR', subchilds: ["black", "blue", "red", "white"]}
                      ],
          },

      ];
