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
        name: "M10",
        price: 880,
        category: "Earbuds",
        brand: "TWS",
        url: 'https://static-01.daraz.pk/p/99e2b72de2ebd9ae0e8aa946b92d4438.png_750x750.jpg_.webp'
    },
    {
        name: "Airbud 550",
        price: 3889,
        category: "Earbuds",
        brand: "Audionic",
        url: 'https://static-01.daraz.pk/p/454188e4769bb9037534ce496f725720.jpg_750x750.jpg_.webp'
    },
    {
        name: "Airbud 425",
        price: 3889,
        category: "Earbuds",
        brand: "Audionic",
        url: 'https://static-01.daraz.pk/p/44766359d8e374a061f5c7268aa552be.png_750x750.jpg_.webp'
    },
    {
        name: "Airbud 625 Pro",
        price: 3799,
        category: "Earbuds",
        brand: "Audionic",
        url: 'https://static-01.daraz.pk/p/f3759500e3e5377c31be10e439c4319d.png_750x750.jpg_.webp'
    },

    // Home Appliances
    {
        name: "T10 Ultra",
        price: 1859,
        category: "Smart Watches",
        brand: "China",
        url: 'https://static-01.daraz.pk/p/0a3c665c603c07c50d1d2d754def7581.jpg_750x750.jpg_.webp'
    },
    {
        name: "T800 Series 8 T800 Pro",
        price: 1499,
        category: "Smart Watches",
        brand: "China",
        url: 'https://static-01.daraz.pk/p/3abf23488b2b1c5ff204b55a7e143d36.jpg_750x750.jpg_.webp'
    },
    {
        name: "116 Plus",
        price: 1399,
        category: "Smart Watches",
        brand: "China",
        url: 'https://static-01.daraz.pk/p/6f4baa5a141f7ca7440df3b2ea793e03.jpg_750x750.jpg_.webp'
    },
    {
        name: "T500/T500 ultra pro",
        price: 1199,
        category: "Smart Watches",
        brand: "China",
        url: 'https://static-01.daraz.pk/p/e6c6b14b54f595d8d01fad2b9170acd0.jpg_750x750.jpg_.webp'
    },
    {
        name: "G9 Ultra Max",
        price: 3990,
        category: "Smart Watches",
        brand: "Haino Teko Fendior",
        url: 'https://static-01.daraz.pk/p/2c74191c30c34b6608df298f9053f692.jpg_750x750.jpg_.webp'
    },

    // Stationery
    {
        name: "32 H-CAST LED/TV D2M Series",
        price: 38999,
        category: "LED TVS",
        brand: "Haier",
        url: 'https://static-01.daraz.pk/p/eebcab98585e864fee0a56d0513632d9.jpg_750x750.jpg_.webp'
    },
    {
        name: "L32X6",
        price: 34999,
        category: "LED TVS",
        brand: "Changhong Ruba",
        url: 'https://static-01.daraz.pk/p/25992e2b414a34616c06cee0fac7d474.jpg_750x750.jpg_.webp'
    },
    {
        name: "S5400",
        price: 53999,
        category: "LED TVS",
        brand: "TCL",
        url: 'https://static-01.daraz.pk/p/7fa0b931c4e6a803a4b33cb731544f5f.jpg_750x750.jpg_.webp'
    },
    {
        name: "U55X718",
        price: 38999,
        category: "LED TVS",
        brand: "Changhong Ruba",
        url: 'https://static-01.daraz.pk/p/083c54f8cdd48a2266db5cce96a1889e.jpg_750x750.jpg_.webp'
    },
    {
        name: "32D3400",
        price: 45000,
        category: "LED TVS",
        brand: "TCL",
        url: 'https://static-01.daraz.pk/p/c64739f128dd04293c930d17da52f80f.jpg_750x750.jpg_.webp'
    },

    // Furniture
    {
        name: "Chromebook G8",
        price: 10700,
        category: "Laptops",
        brand: "Hp",
        url: 'https://pk-live-21.slatic.net/kf/S04e967c0f6814e008f9ef3a2bda62d0a4.jpg_750x750.jpg_.webp'
    },
    {
        name: "THINKPAD 11e",
        price: 14999,
        category: "Laptops",
        brand: "LENOVO",
        url: 'https://static-01.daraz.pk/p/ef2362591dd8c006174661053ad80414.jpg_750x750.jpg_.webp'
    },
    {
        name: "CHROMEBOOK 100E",
        price: 10250,
        category: "Laptops",
        brand: "LENOVO",
        url: 'https://static-01.daraz.pk/p/a0aa0cfadae20f4889fa9171fcfea3c4.jpg_750x750.jpg_.webp'
    },
    {
        name: "Surface Pro 5",
        price: 57500,
        category: "Laptops",
        brand: "Microsoft",
        url: 'https://static-01.daraz.pk/p/476b84c0ef8232661a75abb9a151ecfa.png_750x750.jpg_.webp'
    },
    {
        name: "FQ2505TU",
        price: 134999,
        category: "Laptops",
        brand: "Hp",
        url: 'https://static-01.daraz.pk/p/4f8a6a08f45269274fc1355e873544b9.png_750x750.jpg_.webp'
    },

    // Fitness
    {
        name: "PlayStation 5",
        price: 260000,
        category: "Gaming Consoles",
        brand: "Sony",
        url: 'https://pk-live-21.slatic.net/kf/Sb08b0189c64b47d889e8ecd793c0bcaa5.jpg_750x750.jpg_.webp'
    },
    {
        name: "SERIES X",
        price: 198000,
        category: "Gaming Consoles",
        brand: "XBOX",
        url: 'https://static-01.daraz.pk/p/bd2a637b7bcd5ff0957e4fd8d3a5d62c.jpg_750x750.jpg_.webp'
    },
    {
        name: "SERIES S",
        price: 135000,
        category: "Gaming Consoles",
        brand: "XBOX",
        url: 'https://static-01.daraz.pk/p/ade7f087e24c6ba324023982cd5e5057.jpg_750x750.jpg_.webp'
    },
    {
        name: "G923 Steering Wheel",
        price: 129000,
        category: "Gaming Consoles",
        brand: "Logitech",
        url: 'https://static-01.daraz.pk/p/c5929196d1d22d2fce9e9d859ca0afb6.jpg_750x750.jpg_.webp'
    },
    {
        name: "PlayStation 4 Slim",
        price: 55000,
        category: "Gaming Consoles",
        brand: "Sony",
        url: 'https://static-01.daraz.pk/p/5ad64654e124f1eac25770d998005660.jpg_750x750.jpg_.webp'
    },

    // Kitchen Appliances
    {
        name: "Alpha FX3",
        price: 1300000,
        category: "Cameras",
        brand: "Sony",
        url: 'https://static-01.daraz.pk/p/86fb83b0bce10f1252ab74acd3860e93.jpg_750x750.jpg_.webp'
    },
    {
        name: "a7 III ILCE7M3/B",
        price: 500000,
        category: "Cameras",
        brand: "Sony",
        url: 'https://static-01.daraz.pk/p/91fa7a86466fcdc7ff70b8d4195ebef1.jpg_750x750.jpg_.webp'
    },
    {
        name: "D7100 DSLR",
        price: 120000,
        category: "Cameras",
        brand: "Nikon",
        url: 'https://static-01.daraz.pk/p/d146c37d58b13ae1ea126aa44cf29f4d.jpg_750x750.jpg_.webp'
    },
    {
        name: "Cyber-shot DSC-H300",
        price: 77999,
        category: "Cameras",
        brand: "Sony",
        url: 'https://static-01.daraz.pk/p/84c25734966a3da97967709d3572ee8e.jpg_750x750.jpg_.webp'
    },
    {
        name: "IXUS 185",
        price: 66999,
        category: "Cameras",
        brand: "Canon",
        url: 'https://static-01.daraz.pk/p/f9fa0277082adb0b53358cb949aaaaa4.jpg_750x750.jpg_.webp'
    },
];

const div = document.querySelector('.div');

products.map(item => {
    div.innerHTML += `
<div class="card" style="width: 16rem;">
    <div class="card-body">
      <div class="text-center mb-2">
        <img width="150px" height="150px" src=${item.url} alt="">
      </div>
      <h5 class="card-title">${item.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${item.brand}</h6>
      <p class="card-text mb-1">${item.price} PKR</p>
      <a href="#" class="card-link text-decoration-none">Add to Cart</a>
    </div>
</div>
`});

function renderProducts(index) {
    div.innerHTML = '';
    const filteredArray = products.filter(item => item.category === `${index.innerHTML}`);
    if (index.innerHTML === 'All items') {
        products.map(item => {
            div.innerHTML += `
        <div class="card" style="width: 16rem;">
            <div class="card-body">
              <div class="text-center mb-2">
                <img width="150px" height="150px" src=${item.url} alt="">
              </div>
              <h5 class="card-title">${item.name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${item.brand}</h6>
              <p class="card-text mb-1">${item.price} PKR</p>
              <a href="#" class="card-link text-decoration-none">Add to Cart</a>
            </div>
        </div>
        `
        })
    } else {
        filteredArray.map(item => {
            div.innerHTML += `
            <div class="card" style="width: 16rem;">
            <div class="card-body">
            <div class="text-center mb-2">
            <img width="150px" height="150px" src=${item.url} alt="">
            </div>
            <h5 class="card-title">${item.name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${item.brand}</h6>
            <p class="card-text mb-1">${item.price} PKR</p>
            <a href="#" class="card-link text-decoration-none">Add to Cart</a>
            </div>
            </div>
            `
        })
    }
}