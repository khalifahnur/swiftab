const restaurants = [
  {
    Title: "New Restaurants",
    data: [
      {
        id: 101,
        image: require("../assets/images/restaurants/res1.jpeg"),
        restaurantName: "The Gourmet Kitchen",
        location: "New York, USA",
        rate: 4.5,
        about: [
          {
            id: 1,
            cuisine: "International",
            location: "Manhattan",
            averageprice: 25,
            hrsofoperation: "10:00 - 22:00",
          },
        ],
        menu: [
          {
            breakfast: [
              {
                id: 1,
                image: "https://example.com/breakfast1.jpg",
                name: "Pancakes",
                description: "Fluffy pancakes served with syrup and butter.",
                cost: 8,
                rate: 4.7,
              },
            ],
            lunch: [
              {
                id: 1,
                image: "https://example.com/lunch1.jpg",
                name: "Grilled Chicken Salad",
                description:
                  "Mixed greens with grilled chicken and vinaigrette.",
                cost: 12,
                rate: 4.8,
              },
            ],
            dinner: [
              {
                id: 1,
                image: "https://example.com/dinner1.jpg",
                name: "Steak Frites",
                description: "Juicy steak with crispy fries.",
                cost: 25,
                rate: 4.9,
              },
            ],
          },
        ],
        review: [
          {
            review: [
              {
                name: "John Doe",
                image: "https://example.com/user1.jpg",
                reviewTxt: "Amazing food and great service!",
                rating: 4.8,
              },
            ],
          },
        ],
      },
      {
        id: 102,
        image: require("../assets/images/restaurants/res2.jpeg"),
        restaurantName: "Sushi Paradise",
        location: "Tokyo, Japan",
        rate: 4.9,
        about: [
          {
            id: 2,
            cuisine: "Japanese",
            location: "Shibuya",
            averageprice: 30,
            hrsofoperation: "11:00 - 23:00",
          },
        ],
        menu: [
          {
            breakfast: [
              {
                id: 2,
                image: "https://example.com/breakfast2.jpg",
                name: "Tamago Sushi",
                description: "Sweet egg omelette over sushi rice.",
                cost: 5,
                rate: 4.9,
              },
            ],
            lunch: [
              {
                id: 2,
                image: "https://example.com/lunch2.jpg",
                name: "Sashimi Platter",
                description: "Fresh slices of tuna, salmon, and yellowtail.",
                cost: 20,
                rate: 5,
              },
            ],
            dinner: [
              {
                id: 2,
                image: "https://example.com/dinner2.jpg",
                name: "Omakase",
                description: "Chef's special selection of sushi.",
                cost: 50,
                rate: 5,
              },
            ],
          },
        ],
        review: [
          {
            review: [
              {
                name: "Akira Tanaka",
                image: "https://example.com/user2.jpg",
                reviewTxt: "Best sushi in Tokyo!",
                rating: 5,
              },
            ],
          },
        ],
      },
      {
        id: 103,
        image: require("../assets/images/restaurants/res3.jpeg"),
        restaurantName: "Pasta Haven",
        location: "Rome, Italy",
        rate: 4.7,
        about: [
          {
            id: 3,
            cuisine: "Italian",
            location: "Centro Storico",
            averageprice: 18,
            hrsofoperation: "12:00 - 23:00",
          },
        ],
        menu: [
          {
            breakfast: [
              {
                id: 3,
                image: "https://example.com/breakfast3.jpg",
                name: "Cappuccino & Croissant",
                description: "Classic Italian breakfast.",
                cost: 6,
                rate: 4.5,
              },
            ],
            lunch: [
              {
                id: 3,
                image: "https://example.com/lunch3.jpg",
                name: "Spaghetti Carbonara",
                description:
                  "Traditional Roman pasta dish with eggs and pancetta.",
                cost: 12,
                rate: 4.8,
              },
            ],
            dinner: [
              {
                id: 3,
                image: "https://example.com/dinner3.jpg",
                name: "Lasagna",
                description: "Layered pasta with meat and cheese.",
                cost: 15,
                rate: 4.9,
              },
            ],
          },
        ],
        review: [
          {
            review: [
              {
                name: "Sophia Rossi",
                image: "https://example.com/user3.jpg",
                reviewTxt: "Best pasta I’ve ever had!",
                rating: 4.9,
              },
            ],
          },
        ],
      },
      {
        id: 104,
        image: require("../assets/images/restaurants/res4.jpeg"),
        restaurantName: "Burger Shack",
        location: "Los Angeles, USA",
        rate: 4.4,
        about: [
          {
            id: 4,
            cuisine: "American",
            location: "Downtown LA",
            averageprice: 10,
            hrsofoperation: "11:00 - 22:00",
          },
        ],
        menu: [
          {
            breakfast: [
              {
                id: 4,
                image: "https://example.com/breakfast4.jpg",
                name: "Breakfast Burger",
                description: "Burger with egg, bacon, and cheese.",
                cost: 8,
                rate: 4.2,
              },
            ],
            lunch: [
              {
                id: 4,
                image: "https://example.com/lunch4.jpg",
                name: "Cheeseburger",
                description: "Classic cheeseburger with fries.",
                cost: 10,
                rate: 4.5,
              },
            ],
            dinner: [
              {
                id: 4,
                image: "https://example.com/dinner4.jpg",
                name: "BBQ Burger",
                description: "Burger with BBQ sauce and onion rings.",
                cost: 12,
                rate: 4.6,
              },
            ],
          },
        ],
        review: [
          {
            review: [
              {
                name: "Alex Johnson",
                image: "https://example.com/user4.jpg",
                reviewTxt: "Juicy burgers and great atmosphere.",
                rating: 4.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    Title: "Recommended Restaurants",
    data: [
      {
        id: 105,
        image: require("../assets/images/restaurants/res5.jpeg"),
        restaurantName: "Spice Symphony",
        location: "Mumbai, India",
        rate: 4.8,
        about: [
          {
            id: 5,
            cuisine: "Indian",
            location: "Bandra",
            averageprice: 15,
            hrsofoperation: "12:00 - 23:30",
          },
        ],
        menu: [
          {
            breakfast: [
              {
                id: 5,
                image: "https://example.com/breakfast5.jpg",
                name: "Masala Dosa",
                description: "Crispy dosa filled with spiced potatoes.",
                cost: 4,
                rate: 4.7,
              },
            ],
            lunch: [
              {
                id: 5,
                image: "https://example.com/lunch5.jpg",
                name: "Chicken Biryani",
                description: "Fragrant rice cooked with chicken and spices.",
                cost: 10,
                rate: 4.9,
              },
            ],
            dinner: [
              {
                id: 5,
                image: "https://example.com/dinner5.jpg",
                name: "Butter Chicken",
                description: "Creamy tomato-based chicken curry.",
                cost: 12,
                rate: 5,
              },
            ],
          },
        ],
        review: [
          {
            review: [
              {
                name: "Ravi Kumar",
                image: "https://example.com/user5.jpg",
                reviewTxt: "Authentic Indian flavors, highly recommend!",
                rating: 4.9,
              },
            ],
          },
        ],
      },
      {
        id: 106,
        image: require("../assets/images/restaurants/res6.jpeg"),
        restaurantName: "Seafood Delight",
        location: "Sydney, Australia",
        rate: 4.6,
        about: [
          {
            id: 6,
            cuisine: "Seafood",
            location: "Darling Harbour",
            averageprice: 22,
            hrsofoperation: "12:00 - 22:00",
          },
        ],
        menu: [
          {
            breakfast: [
              {
                id: 6,
                image: "https://example.com/breakfast6.jpg",
                name: "Salmon Bagel",
                description: "Bagel with smoked salmon and cream cheese.",
                cost: 10,
                rate: 4.6,
              },
            ],
            lunch: [
              {
                id: 6,
                image: "https://example.com/lunch6.jpg",
                name: "Fish & Chips",
                description: "Battered fish served with crispy fries.",
                cost: 15,
                rate: 4.7,
              },
            ],
            dinner: [
              {
                id: 6,
                image: "https://example.com/dinner6.jpg",
                name: "Grilled Lobster",
                description:
                  "Lobster grilled to perfection with garlic butter.",
                cost: 40,
                rate: 4.9,
              },
            ],
          },
        ],
        review: [
          {
            review: [
              {
                name: "Emily Brown",
                image: "https://example.com/user6.jpg",
                reviewTxt: "Fantastic seafood with a beautiful view.",
                rating: 4.8,
              },
            ],
          },
        ],
      },
      {
        id: 107,
        image: require("../assets/images/restaurants/res7.jpeg"),
        restaurantName: "Vegan Bites",
        location: "Berlin, Germany",
        rate: 4.5,
        about: [
          {
            id: 7,
            cuisine: "Vegan",
            location: "Mitte",
            averageprice: 18,
            hrsofoperation: "10:00 - 21:00",
          },
        ],
        menu: [
          {
            breakfast: [
              {
                id: 7,
                image: "https://example.com/breakfast7.jpg",
                name: "Avocado Toast",
                description: "Whole grain toast topped with smashed avocado.",
                cost: 7,
                rate: 4.4,
              },
            ],
            lunch: [
              {
                id: 7,
                image: "https://example.com/lunch7.jpg",
                name: "Vegan Buddha Bowl",
                description: "Quinoa, chickpeas, and fresh veggies in a bowl.",
                cost: 12,
                rate: 4.6,
              },
            ],
            dinner: [
              {
                id: 7,
                image: "https://example.com/dinner7.jpg",
                name: "Vegan Lasagna",
                description: "Layered pasta with vegan cheese and vegetables.",
                cost: 14,
                rate: 4.7,
              },
            ],
          },
        ],
        review: [
          {
            review: [
              {
                name: "Linda Müller",
                image: "https://example.com/user7.jpg",
                reviewTxt: "Delicious and healthy vegan options.",
                rating: 4.6,
              },
            ],
          },
        ],
      },
      {
        id: 108,
        image: require("../assets/images/restaurants/res8.jpeg"),
        restaurantName: "Taco Fiesta",
        location: "Mexico City, Mexico",
        rate: 4.8,
        about: [
          {
            id: 8,
            cuisine: "Mexican",
            location: "Condesa",
            averageprice: 10,
            hrsofoperation: "11:00 - 23:00",
          },
        ],
        menu: [
          {
            breakfast: [
              {
                id: 8,
                image: "https://example.com/breakfast8.jpg",
                name: "Huevos Rancheros",
                description: "Eggs with salsa and tortillas.",
                cost: 6,
                rate: 4.7,
              },
            ],
            lunch: [
              {
                id: 8,
                image: "https://example.com/lunch8.jpg",
                name: "Tacos Al Pastor",
                description: "Tacos with marinated pork and pineapple.",
                cost: 8,
                rate: 4.9,
              },
            ],
            dinner: [
              {
                id: 8,
                image: "https://example.com/dinner8.jpg",
                name: "Enchiladas",
                description: "Corn tortillas rolled with cheese and chicken.",
                cost: 12,
                rate: 4.8,
              },
            ],
          },
        ],
        review: [
          {
            review: [
              {
                name: "Carlos Reyes",
                image: "https://example.com/user8.jpg",
                reviewTxt: "Authentic Mexican food, highly recommend!",
                rating: 4.9,
              },
            ],
          },
        ],
      },
    ],
  },
];
export default restaurants;
