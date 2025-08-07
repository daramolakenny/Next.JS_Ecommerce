
import fruit from "@/public/images/fruit.jpg"
// Dishes,Burger,Drinks,Snacks,Fries,Cake,Pizza,Soup,Sauce
const dataMap = {
  Offers: [
    { id: 1, name: "Salad", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:1" },
    { id: 2, name: "Jollof Rice", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:2" },
    { id: 3, name: "Porridge", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:3" },
    { id: 4, name: "Fried Rice", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:4" },
    { id: 5, name: "Beans", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:5" },
    { id: 6, name: "Coconut Rice", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:6" },
    { id: 7, name: "Beans Pod", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:7" },
    { id: 8, name: "Noodles", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:8" },
    { id: 9, name: "Potatoe Chip", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:9" },
    { id: 10, name: "Plantain", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:10" },
    { id: 11, name: "Pasta", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:11" },
    { id: 12, name: "Rice", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart",  cart: "Cart", url: "/itemsdetails/:12" },
  ],
  Dishes: [
    { id: 1, name: "Salad", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:1" },
    { id: 2, name: "Jollof Rice", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:2" },
    { id: 3, name: "Porridge", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:3" },
    { id: 4, name: "Fried Rice", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:4" },
    { id: 5, name: "Beans", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:5" },
    { id: 6, name: "Coconut Rice", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:6" },
    { id: 7, name: "Beans Pod", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:7" },
    { id: 8, name: "Noodles", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:8" },
    { id: 9, name: "Potatoe Chip", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:9" },
    { id: 10, name: "Plantain", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:10" },
    { id: 11, name: "Pasta", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:11" },
    { id: 12, name: "Rice", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart",  cart: "Cart", url: "/itemsdetails/:12" },
  ],
  Burgers: [
    { id: 1, name: "Salad", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:1" },
    { id: 2, name: "Jollof Rice", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:2" },
    { id: 3, name: "Porridge", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:3" },
    { id: 4, name: "Fried Rice", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:4" },
    { id: 5, name: "Beans", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:5" },
    { id: 6, name: "Coconut Rice", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:6" },
    { id: 7, name: "Beans Pod", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:7" },
    { id: 8, name: "Noodles", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:8" },
    { id: 9, name: "Potatoe Chip", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:9" },
    { id: 10, name: "Plantain", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:10" },
    { id: 11, name: "Pasta", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:11" },
    { id: 12, name: "Rice", icon : "/images/fruit.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart",  cart: "Cart", url: "/itemsdetails/:12" },
  ],
  Soup: [
    { id: 13, name: "Peppe Soup", icon : "/images/egg.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:13" },
    { id: 14, name: "Oha Soup", icon : "/images/egg.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:14" },
    { id: 15, name: "Ogbono Soup", icon : "/images/egg.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:15" },
    { id: 16, name: "Egusi Soup", icon : "/images/egg.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:16" },
    { id: 17, name: "Ofonugbu Soup", icon : "/images/egg.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:17" },
    { id: 18, name: "Vegetable Soup", icon : "/images/egg.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:18" },
    { id: 19, name: "Okro Soup", icon : "/images/egg.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:19" },
    { id: 20, name: "Black Soup", icon : "/images/egg.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:20" },
    { id: 21, name: "Ofansala Soup", icon : "/images/egg.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:21" },
    { id: 22, name: "Bitterleaf Soup", icon : "/images/egg.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:22" },
    { id: 23, name: "Ofeashara Soup", icon : "/images/egg.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:23" },
    { id: 24, name: "Chicken Soup", icon : "/images/egg.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:24" },
  ],
  Snacks: [
    { id: 37, name: "Sausage", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:37" },
    { id: 38, name: "Pie", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:38" },
    { id: 39, name: "Small Chops", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:39" },
    { id: 40, name: "Pancakes", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:40" },
    { id: 41, name: "Small Chops", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:39" },
    { id: 42, name: "Pancakes", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:40" },
  ],
  Drinks: [
    { id: 25, name: "Lemon Drink", icon : "/images/green.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:25" },
    { id: 26, name: "Cocacola", icon : "/images/green.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:26" },
    { id: 27, name: "Sweps Drink", icon : "/images/green.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:27" },
    { id: 28, name: "Cocacola", icon : "/images/green.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:28" },
    { id: 29, name: "Wine", icon : "/images/green.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:29" },
    { id: 30, name: "Malta Gold", icon : "/images/green.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:30" },
    { id: 31, name: "Cocacola", icon : "/images/green.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:31" },
    { id: 32, name: "Fruit juice", icon : "/images/green.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:32" },
    { id: 33, name: "Youghut", icon : "/images/green.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:33" },
    { id: 34, name: "Malta Guiness", icon : "/images/green.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:34" },
    { id: 35, name: "Fanta Drink", icon : "/images/green.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:35" },
    { id: 36, name: "Coca-Cola", icon : "/images/green.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:36" },
  ],
  Fries: [
    { id: 41, name: "Crunchy Chinchin", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:45" },
    { id: 42, name: "Chicken & Chip", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:46" },
    { id: 43, name: "Chicken & Chip", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:46" },
    { id: 42, name: "Chicken & Chip", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:46" },
    { id: 43, name: "Chicken & Chip", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:46" },
    { id: 43, name: "Chicken & Chip", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:46" },
  ],
  Sauce: [
    { id: 41, name: "Suya", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:41" },
    { id: 42, name: "Egg Roll", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:42" },
    { id: 48, name: "Shawarma", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:48" },
    { id: 43, name: "Doughnut", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:43" },
  ],
  Pizza: [
    { id: 44, name: "Homemade Pizza", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:44" },
    { id: 44, name: "Homemade Pizza", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:44" },
    { id: 44, name: "Homemade Pizza", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:44" },
    { id: 44, name: "Homemade Pizza", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:44" },
    { id: 44, name: "Homemade Pizza", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:44" },
    { id: 44, name: "Homemade Pizza", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:44" },
  ],
  Cake: [
    { id: 44, name: "Chocolate Cake", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:47" },
    { id: 45, name: "Chocolate Cake", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:47" },
    { id: 46, name: "Chocolate Cake", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:47" },
    { id: 44, name: "Chocolate Cake", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:47" },
    { id: 45, name: "Chocolate Cake", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:47" },
    { id: 46, name: "Chocolate Cake", icon : "/images/cabbage.jpg", price: "N100", Order: "Add to Cart", remove_order: "Remove from Cart", cart: "Cart", url: "/itemsdetails/:47" },
  ],
};

export default dataMap;

export const datacategories = [
    {
    id: 1,
    name: 'Corporate Event',
    url: "#",
  },
  {
    id: 2,
    name: 'Wedding $ BBQ',
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
    name: 'Birthday',
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

export const ingredients = {
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

export const link = [
  {
      id: 0,
      title: 'Home',
      href: '/',
  },
  {
      id: 1,
      title: 'Special Offers',
      href: '/offer',
  },
  {
      id: 2,
      title: 'Restaurants',
      href: '/restaurants',
  },
  {
      id: 3,
      title: 'Track Order',
      href: '/order',
  }
];
export const links = [
  {
      id: 0,
      title: 'Home',
      href: '/',
  },
  {
      id: 1,
      title: 'Browse Menu',
      href: '/menu',
  },
  {
      id: 2,
      title: 'Special Offers',
      href: '/offer',
  },
  {
      id: 3,
      title: 'Restaurants',
      href: '/restaurants',
  },
  {
      id: 4,
      title: 'Track Order',
      href: '/order',
  }
];

export const discountoffers = [
  {
    id: 0,
    title: "Fruit Juice",
    subtitle: "Refreshing and Healthy",
    icon: "/images/fruit.jpg",
    discount: -40,
    Order: "Add to Cart"
  },
  {
    id: 1,
    title: "Egg Roll",
    subtitle: "Delicious and Savory",
    icon: "/images/egg.jpg",
    discount: -20,
    Order: "Add to Cart"
  },
  {
    id: 2,
    title: "Green Salad",
    subtitle: "Fresh and Healthy",
    icon: "/images/green.jpg",
    discount: -30,
    Order: "Add to Cart"
  }
];

export const homediscountoffers = [
  {
    id: 0,
    title: "Fruit Juice",
    subtitle: "Refreshing and Healthy",
    icon: "/images/fruit.jpg",
    discount: -40,
    order: "Add to Cart"
  },
  {
    id: 1,
    title: "Egg Roll",
    subtitle: "Delicious and Savory",
    icon: "/images/egg.jpg",
    discount: -20,
    order: "Add to Cart"
  },
  {
    id: 2,
    title: "Green Salad",
    subtitle: "Fresh and Healthy",
    icon: "/images/green.jpg",
    discount: -30,
    order: "Add to Cart"
  }
];

export const infor = [
  {
    id: 1,
    text: "Monday:",
    time: "8:00 AM - 3:00 AM"
  },
  {
    id: 2,
    text: "Tuesday:",
    time: "8:00 AM - 3:00 AM"
  },
  {
    id: 3,
    text: "Wednesday:",
    time: "8:00 AM - 3:00 AM"
  },
  {
    id: 4,
    text: "Thursday:",
    time: "8:00 AM - 3:00 AM"
  },
  {
    id: 5,
    text: "Friday:",
    time: "8:00 AM - 3:00 AM"
  },
  {
    id: 6,
    text: "Saturday:",
    time: "8:00 AM - 3:00 AM"
  },
  {
    id: 7,
    text: "Sunday:",
    time: "8:00 AM - 3:00 AM"
  }
];
