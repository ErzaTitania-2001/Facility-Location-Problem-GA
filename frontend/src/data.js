export const sliderItems = [
    {
        id: 1,
        // Comment the image below of laptop during development its a heavy image 
        // img: "https://www.pngmart.com/files/4/Macbook-PNG-Photo.png",
        img: "https://threeares.netlify.app/images/Home%20page.png",
        title: "Be The Tomorrow, Buy Smart",
        desc: "Your Online Sustainable Goods Store",
        bg: "ebfcf5",
        link: "/productview/0",
        size:"70%"
    },
    {
        id: 2,
        img: "https://threeares.netlify.app/images/about_us_1.png",
        title: "Buy Recycled Products",
        desc: "ThreeAre's is committed to selling high quality, natural products which are kind to the environment and minimize the negative impact to the planet. Recycled Materials is a key factor in our sustainable solution.",
        bg: "f9f6ff",
        link: "/productview/1",
        size:"80%"
    },
    {
        id: 3,
        img: "https://threeares.netlify.app/images/about_us_2.png",
        title: "Promoting Conscious Consumption",
        desc: "We want to live in a way that betters our planet and believe in maintaining the balance between human activity and natural processes. That is why our products are focused on improving the health of the global ecosystem.",
        bg: "e9e9e9cc",
        link: "/productview/2",
        size:"80%"
    },
    {
        id: 4,
        img: "https://threeares.netlify.app/images/about_us_3.png",
        title: "Biodegradable Products",
        desc: "By prioritizing Biodegradable Products, we believe that we can help shift the market and enhance consumer awareness regarding the impact of their purchasing decisions. Put your money towards a solution for environmental issues.",
        bg: "e9e9e9cc",
        link: "/productview/2",
        size:"80%"
    },
];

export const categories = [
    {
        id: 1,
        img: "https://threeares.netlify.app/images/product-1.jpg", 
        title: "BAMBOO TOOTHBRUSH",
        link: "/productlist/laptops",
    },
    {
        id: 2,
        img: "https://threeares.netlify.app/images/product-8.jpg",
        title: "REUSABLE STRAW",
        link: "/productlist/phones",
    },
    {
        id: 3,
        img: "https://threeares.netlify.app/images/product-4.jpg",
        title: "LAUNDRY BASKET",
        link: "/productlist/headphones",
    },
];

export const allProducts = [
    // Products all here 
    // Product Id starts from zero same as index to object
    {
        id: 0,
        title: "MACBOOK PRO 13-inch",
        desc: "M2 is the next generation of Apple silicon. Its 8-core CPU lets you zip through everyday tasks like creating documents and presentations, or take on more intensive workflows like developing in Xcode or mixing tracks in Logic Pro.",
        img: "https://149426355.v2.pressablecdn.com/wp-content/uploads/2020/05/13pro-keyboard.jpg",
        // Price and Price Quantity must be same
        price: 320000,
        priceQuantity:320000, 
        quantity:1,
        category:"laptops",
        popular:"yes",
        "Main Features": "8-Core CPU | 10-Core GPU",
        specs:{
            "Display": "Retina display",
            "Battery and Power": "4Up to 20 hours Apple TV app movie playbackGB",
            "Memory": "8GB unified memory",
            "Storage": "256GB SSD",
            "Charg­ing and Expan­sion": "Two Thunderbolt / USB 4 ports",
            "Key­board and Track­pad": "Backlit Magic Keyboard",
            "Wireless": "Wi-Fi 802.11ax Wi-Fi 6 wireless networking",
            "Bluetooth": "Bluetooth 5.0 wireless technology",
            "Camera": "720p FaceTime HD camera",
            "Audio": "Stereo speakers with high dynamic range",
            "Display Support": "Native DisplayPort output over USB‑C",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 1,
        title: "IPHONE 13 PRO",
        desc: "Apple iPhone 13 Pro smartphone. Announced Sep 2021. Features 6.1″ display, Apple A15 Bionic chipset, 3095 mAh battery, 1024 GB storage, 6 GB RAM.",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 220000,
        priceQuantity:220000, 
        quantity:1,
        category:"phones",
        popular:"yes",
        "Main Features": "A15 Bionic chipset | 256 GB ROM | 6 GB RAM",
        specs:{
            RAM: "6 GB",
            ROM: "256 GB",
            "Network Technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
            "Announced": "2021, September 14",
            "Status": "Available. Released 2021, September 24",
            "Dimensions": "146.7 x 71.5 x 7.7 mm (5.78 x 2.81 x 0.30 in)",
            "Weight": "204 g (7.20 oz)",
            "Card slot": "No",
            "Internal": "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM",
            "MAIN CAMERA": "12 MP, f/1.5, 26mm (wide), 1.9µm, dual pixel PDAF, sensor-shift OIS",
            "SELFIE CAMERA": "12 MP, f/2.2, 23mm (wide), 1/3.6",
            "Loudspeaker": "Yes, with stereo speakers",
            "WLAN": "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
            "Sensors": "Face ID, accelerometer, gyro, proximity, compass, barometer",
            "BATTERY": "Li-Ion 3095 mAh, non-removable (12.11 Wh)",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FFX",
        },
    },
    {
        id: 2,
        title: "SONY WH-1000XM5",
        desc: "The WH-1000XM5 earphones are not only equipped with two sets of processors that can control eight microphones, an automatic noise reduction optimizer that can automatically optimize the noise reduction function according to the wearing condition and environment, and a tailor-made driver unit, but also equipped with Industry-leading Noise Cancellation1 technology takes distraction-free listening and call clarity to a whole new level.",
        img: "https://helios-i.mashable.com/imagery/reviews/01HUTTQhSs8SWLx3ouc0f7q/hero-image.fill.size_1200x1200.v1653070267.jpg",
        // Price and Price Quantity must be same
        price: 84000,
        priceQuantity:84000, 
        quantity:1,
        category:"headphones",
        popular:"yes",
        "Main Features": "Noise Cancelling | Processor QN1",
        specs:{
            "Bluetooth version": "5.2",
            "Active noise cancellation": "yes",
            "Ambient mode": "yes",
            "Multipoint": "yes",
            "Battery life": "30 hours (ANC on), 40 hours (ANC off)",
            "Bluetooth codecs": "LDAC, AAC, SBC",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 3,
        title: "IPHONE 13 PRO MAX 3",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 33,
        priceQuantity:33, 
        quantity:1,
        category:"phones",
        popular:"yes",
        "Main Features": "RAM : 4 GB | ROM : 32 GB",
        specs:{
            RAM: "4 GB",
            ROM: "32 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 4,
        title: "IPHONE 13 PRO MAX 4",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 100,
        priceQuantity:100, 
        quantity:1,
        category:"phones",
        popular:"yes",
        "Main Features": "RAM : 4 GB | ROM : 32 GB",
        specs:{
            RAM: "4 GB",
            ROM: "32 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
            "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 5,
        title: "IPHONE 13 PRO MAX 5",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 1000,
        priceQuantity:100, 
        quantity:1,
        category:"headphones",
        popular:"no",
        "Main Features": "RAM : 4 GB | ROM : 64 GB",
        specs:{
            RAM: "4 GB",
            ROM: "64 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
            "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 6,
        title: "IPHONE 13 PRO MAX 6",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 100,
        priceQuantity:100, 
        quantity:1,
        category:"laptops",
        popular:"no",
        "Main Features": "RAM : 6 GB | ROM : 64 GB",
        specs:{
            RAM: "6 GB",
            ROM: "64 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
            "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 7,
        title: "IPHONE 13 PRO MAX 7",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 100,
        priceQuantity:100, 
        quantity:1,
        category:"phones",
        popular:"no",
        "Main Features": "RAM : 6 GB | ROM : 64 GB",
        specs:{
            RAM: "6 GB",
            ROM: "64 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
            "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 8,
        title: "IPHONE 13 PRO MAX 8 head",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 100,
        priceQuantity:100, 
        quantity:1,
        category:"headphones",
        popular:"no",
        "Main Features": "RAM : 6 GB | ROM : 64 GB",
        specs:{
            RAM: "6 GB",
            ROM: "64 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
            "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
];

// Items added to cart 
export const CartItemsData=[
    // Cart Items will be added here through product buttons - update via states
];
export const totaPriceOfCartItemsData=[]; // this will recive data form the totalPrice function in Cart.jsx and then will be retrived to App.js state;

// export const popularProducts = [
// ];