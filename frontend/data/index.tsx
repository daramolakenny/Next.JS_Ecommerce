
import fruit from "@/public/images/fruit.jpg"

const dataMap = {
  Dishes: [
    { id: 1, name: "Salad", icon : "/images/fruit.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 2, name: "Jollof Rice", icon : "/images/fruit.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 3, name: "Porriage", icon : "/images/fruit.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 4, name: "Fried Rice", icon : "/images/fruit.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 5, name: "Beans", icon : "/images/fruit.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 6, name: "Coconut Rice", icon : "/images/fruit.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 7, name: "Beans Pod", icon : "/images/fruit.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 8, name: "Noodles", icon : "/images/fruit.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 9, name: "Potatoe Chip", icon : "/images/fruit.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 10, name: "Plantain", icon : "/images/fruit.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 11, name: "Pasta", icon : "/images/fruit.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 12, name: "Rice", icon : "/images/fruit.jpg", price: "$100", Order: "+", remove_order: "-",  cart: "Cart", url: "/itemsdetails/:id" },
  ],
  Soup: [
    { id: 1, name: "Peppe Soup", icon : "/images/egg.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 2, name: "Oha Soup", icon : "/images/egg.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 3, name: "Ogbono Soup", icon : "/images/egg.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 4, name: "Egusi Soup", icon : "/images/egg.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 5, name: "Ofonugbo Soup", icon : "/images/egg.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 6, name: "Vegetable Soup", icon : "/images/egg.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 7, name: "Okro Soup", icon : "/images/egg.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 8, name: "Black Soup", icon : "/images/egg.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 9, name: "Ofansala Soup", icon : "/images/egg.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 10, name: "Bitterleaf Soup", icon : "/images/egg.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 11, name: "Ofeashara Soup", icon : "/images/egg.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 12, name: "Chicken Soup", icon : "/images/egg.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
  ],
  Drinks: [
    { id: 1, name: "Lemon Drink", icon : "/images/green.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 2, name: "Cocacola", icon : "/images/green.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 3, name: "Sweps Drink", icon : "/images/green.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 4, name: "Cocacola", icon : "/images/green.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 5, name: "Wine", icon : "/images/green.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 6, name: "Malta Gold", icon : "/images/green.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 7, name: "Cocacola", icon : "/images/green.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 8, name: "Fruit juice", icon : "/images/green.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 9, name: "Youghut", icon : "/images/green.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 10, name: "Malta Guiness", icon : "/images/green.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 11, name: "Fanta Drink", icon : "/images/green.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 12, name: "Cocacola", icon : "/images/green.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
  ],
  Snacks: [
    { id: 1, name: "Sausage", icon : "/images/cabbage.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 2, name: "Pie", icon : "/images/cabbage.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 3, name: "Small Chops", icon : "/images/cabbage.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 4, name: "Pancakes", icon : "/images/cabbage.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 5, name: "Suya", icon : "/images/cabbage.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 6, name: "Egg Roll", icon : "/images/cabbage.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 7, name: "Doughut", icon : "/images/cabbage.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 8, name: "Homemade Pizza", icon : "/images/cabbage.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 9, name: "Crunchy Chinchin", icon : "/images/cabbage.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 10, name: "Chicken & Chip", icon : "/images/cabbage.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 11, name: "Chocolate Cake", icon : "/images/cabbage.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
    { id: 12, name: "Shawama", icon : "/images/cabbage.jpg", price: "$100", Order: "+", remove_order: "-", cart: "Cart", url: "/itemsdetails/:id" },
  ],
};

export default dataMap;

export const datacategories = [
  {
    id: 1,
    name: 'Birthday',
    url: "#",
  },
  {
    id: 2,
    name: 'Wedding',
    url: "#",
  },
  {
    id: 3,
    name: 'Anniversary',
    url: "#",
  },
  {
    id: 4,
    name: 'Burial',
    url: "#",
  },
  {
    id: 5,
    name: 'Kingship',
    url: "#",
  },
  {
    id: 6,
    name: 'House Warming',
    url: "#",
  },
  {
    id: 7,
    name: 'Get Together',
    url: "#",
  },
];


const ingredients = {
  Dishes: [
    {}
  ],
  Soup: [
    {}
  ],
  Drinks: [
    {}
  ],
  Snacks: [
    {}
  ]
}