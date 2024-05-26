const products = [
    // Electronics
    {
        name: "SPARK Go 2024",
        price: 21299,
        category: "Smartphones",
        brand: "TECNO",
        url: 'https://static-01.daraz.pk/p/d093a0421a266accff2d4b8d23d3b57f.jpg_750x750.jpg_.webp'
    },
    {
        name: "13C",
        price: 25249,
        category: "Smartphones",
        brand: "Redmi",
        url: 'https://static-01.daraz.pk/p/f8a4839bf6a2b18bc830b422b6cddac5.jpg_750x750.jpg_.webp'
    },
    {
        name: "A3",
        price: 20499,
        category: "Smartphones",
        brand: "Redmi",
        url: 'https://static-01.daraz.pk/p/ada94bcebb9d4fb7f926cc5c7ba7d97d.jpg_750x750.jpg_.webp'
    },
    {
        name: "Note 50",
        price: 23444,
        category: "Smartphones",
        brand: "Realme",
        url: 'https://static-01.daraz.pk/p/74ddb6565b1888e0c474a470bf70c153.png_750x750.jpg_.webp'
    },
    {
        name: "A05",
        price: 30999,
        category: "Smartphones",
        brand: "Samsung",
        url: 'https://static-01.daraz.pk/p/5e2aa195de3e62658bd7b6162d322592.jpg_750x750.jpg_.webp'
    },

    // Footwear
    {
        name: "I12",
        price: 770,
        category: "Earbuds",
        brand: "TWS",
        url: 'https://static-01.daraz.pk/p/a76b10fc73f1e3f05c31de35044fd1ea.jpg_750x750.jpg_.webp'
    },
    {
        name: "I12",
        price: 770,
        category: "Earbuds",
        brand: "TWS",
        url: 'https://static-01.daraz.pk/p/a76b10fc73f1e3f05c31de35044fd1ea.jpg_750x750.jpg_.webp'
    },
    {
        name: "I12",
        price: 770,
        category: "Earbuds",
        brand: "TWS",
        url: 'https://static-01.daraz.pk/p/a76b10fc73f1e3f05c31de35044fd1ea.jpg_750x750.jpg_.webp'
    },
    {
        name: "I12",
        price: 770,
        category: "Earbuds",
        brand: "TWS",
        url: 'https://static-01.daraz.pk/p/a76b10fc73f1e3f05c31de35044fd1ea.jpg_750x750.jpg_.webp'
    },
    {
        name: "I12",
        price: 770,
        category: "Earbuds",
        brand: "TWS",
        url: 'https://static-01.daraz.pk/p/a76b10fc73f1e3f05c31de35044fd1ea.jpg_750x750.jpg_.webp'
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i].category);
// }


function renderProducts(s) {
    console.log(s.innerHTML);
}