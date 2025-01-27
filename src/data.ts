import {
    LockKeyholeOpen,
    CreditCard,
    UserRound,
    Truck,
    WalletCards,
    Store,
    ShoppingBag ,
    Heart,
    Layers,
    LayoutDashboard,
    LogOut,
    Settings,
    ShoppingCart,
    MapPin,
    GitCompare,
    Headphones,
    Flame,
    CircleHelp
  } from "lucide-react";



  
import { BlogProps, BrandType, CartPopupItem,CategoryType, FaqType, Member, ProductType } from "../types";

  
interface Product {
    id: number;
    src: string;
    alt: string;
    price: number;
    discount?: string;
    availability?: "Sold Out";
    deal?: "Hot";
    initialPrice?: number;
    title: string;
}

interface Support {
    id: number;
    Icon: any ;
    title: string;
}

interface AccountLink {
    id: number;
    title: string;
    Icon: any;
    path: string
}

export const productCat = [
    {
        id: 1,
        cat: "Monitor",
        img:"/images/monitor-and-keyboard.png",
        alt:"Monitor & Keyboard"
    },
    {
        id: 2,
        cat: "Smart Phones",
        img:"/images/black-iphone.png",
        alt:"Black Iphone"
    },
    {
        id: 3,
        cat: "Accessories",
        img:"/images/headphone-black.png",
        alt:"Black Headphone"
    },
    {
        id: 4,
        cat: "Electronics",
        img:"/images/red-keyboard.png",
        alt:"Red Keyboard"
    },
    {
        id: 5,
        cat:"Camera & Photo",
        img:"/images/canon-camera.png",
        alt:"Canon Camera"
    },
    {
        id: 6,
        cat: "Appliances",
        img:"/images/white-airconditioner.png",
        alt:"Ahite AC"
    },
    {
        id: 7,
        cat: "TV & Homes",
        img:"/images/Led-TV.png",
        alt:"Led TV"
    },


]


export const accountLinks:AccountLink[] = [
    {
        id: 1,
        title: 'Dashboard',
        Icon: LayoutDashboard,
        path: '/account/dashboard'
    },
    {
        id: 2,
        title: 'Order History',
        Icon: Layers,
        path: '/account/order'
    },
    {
        id: 3,
        title: 'Track Order',
        Icon: MapPin,
        path: '/track-order'
    },
    {
        id: 4,
        title: 'Shopping Cart',
        Icon: ShoppingCart,
        path: '/shopping-cart'
    },
    {
        id: 5,
        title: 'Wishlist',
        Icon: Heart,
        path: '/wishlist'
    },
    {
        id: 6,
        title: 'Cards & Address',
        Icon: CreditCard,
        path: '/account/payment'
    },
    {
        id: 7,
        title: 'Profile',
        Icon: Settings,
        path: '/account/profile'
    },
    {
        id: 8,
        title: 'Logout',
        Icon: LogOut,
        path: '/profile-route'
    },

]

export const popularTags:string[] = [
    "Game",
    "Asus Laptops", 
    "TV","Macbook",
    "SSD",
    "Iphone",
    "Power Bank", 
    "Microwave",
    "Speaker",
    "Samsung",
]


export const products: Product[] = [
    {
        id: 1,
        src: '/images/white-drone.png',
        alt: 'White Drone',
        price: 2300,
        availability: 'Sold Out',
        title: 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear'
    },
    {
        id: 2,
        src: '/images/black-pixel.png',
        alt: 'Black Pixel',
        price: 420,
        title: 'Simple Mobile 4G LTE Prepaid Smartphone'
    },
    {
        id: 3,
        src: '/images/black-game-pad.png',
        alt: 'Black Game-Pad',
        price: 420,
        discount: '18% Off',
        title: '4K UHD LED Smart TV with Chromecast Built-in',
        initialPrice: 320,
    },
    {
        id: 4,
        src: '/images/black-md-headset.png',
        alt: 'Black Headset',
        price: 1200,
        title: 'Sony DSCHX8 High Zoom Point & Shoot Camera'
    },
    {
        id: 5,
        src: '/images/infinix-phone.png',
        alt: 'Infinix',
        price: 420,
        title: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor'
    },
    {
        id: 6,
        src: '/images/drone-controller.png',
        alt: 'Drone Controller',
        price: 500,
        title: 'Portable Wshing Machine, 11lbs capacity Model 18NMFIAM',
        initialPrice: 699,
    },
    {
        id: 7,
        src: '/images/white-monitor.png',
        alt: 'White Monitor',
        price: 399,
        title: '2-Barrel Carburetor Carb 2100 Engine Increase Horsepower',
        deal: "Hot"
    },
    {
        id: 8,
        src: '/images/white-round-cctv.png',
        alt: 'White CCTV',
        price: 300,
        discount: '32% Off',
        title: 'JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black',
        initialPrice: 399,
    },
    // Add more products here...
]

export const popularTopics: {id: number, topic:string}[] =  [
    {
        id: 1,
        topic: "How do I return my item?"
    },
    {
        id: 2,
        topic: "What are the 'Delivery Timelines'?"
    },
    {
        id: 3,
        topic: "How to cancel Clicon Order."
    },
    {
        id: 4,
        topic: "What is Clicons Returns Policy?"
    },
    {
        id: 5,
        topic: "What is 'Discover Your Daraz Campaign 2022'?"
    },
    {
        id: 6,
        topic: "Ask the Digital and Device Community"
    },
    {
        id: 7,
        topic: "How long is the refund process?"
    },
    {
        id: 8,
        topic: "What is the Voucher & Gift Offer in this Campaign?"
    },
    {
        id: 9,
        topic: "How to change my shop name?"
    },
]

export const support: Support[] = [
    {
        id: 1,
        Icon: Truck ,
        title: "Track Order"
    },
    {
        id: 2,
         Icon: LockKeyholeOpen,
        title: "Reset Password"
    },
    {
        id: 3,
         Icon: CreditCard,
        title: "Payment Option"
    },
    {
        id: 4,
         Icon: UserRound,
        title: "User & Account"
    },
    {
        id: 5,
         Icon: LockKeyholeOpen,
        title: "Wishlist & Compare"
    },
    {
        id: 6,
         Icon: ShoppingBag ,
        title: "Shopping & Billing"
    },
    {
        id: 7,
         Icon: ShoppingCart,
        title: "Shopping Cart & Wallet"
    },
    {
        id: 8,
         Icon: Store,
        title: "Sell on clicon"
    },

]

export const cartProducts: CartPopupItem[] = [
    {
        id: 1,
        image: '/images/white-round-cctv.png',
        alt: 'White Round CCTV',
        price: 2300,
        quantity: 1,
        title: 'Canon EOS 1500D DSLR Camera Body+ 18-55 mm'
    },
    {
        id: 2,
        image: '/images/black-md-headset.png',
        alt: 'Black Headset',
        price: 269,
        quantity: 2,
        title: 'Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone'
    },

]

export const blogLists: BlogProps[] = [
    {
        id: 1,
        image: "/images/unsplash-3.png",
        alt: "High-tech drone controller with sleek design",
        author: "Roberts",
        category: "Technology",
        comments: 300,
        date: "2022-12-01",
        description: "This innovative drone controller offers a seamless gaming experience, with precision controls and an ergonomic design that fits comfortably in your hands.",
        title: "Incredible Drone Controller Revolutionizes Your Gaming Experience"
    },
    {
        id: 2,
        image: "/images/unsplash-2.png",
        alt: "Stylish smartwatch on a wrist",
        author: "Smith",
        category: "Wearables",
        comments: 210,
        date: "2023-01-10",
        description: "Stay connected and track your fitness goals with this stylish smartwatch, featuring advanced health monitoring and a sleek display that complements any look.",
        title: "The Best Smartwatch for 2023: A Comprehensive Review"
    },
    {
        id: 3,
        image: "/images/unsplash-1.png",
        alt: "Wireless earbuds with a charging case",
        author: "Marvin McKinney",
        category: "Audio",
        comments: 95,
        date: "2023-03-22",
        description: "Enjoy high-quality sound with these wireless earbuds, designed for comfort and equipped with a long-lasting battery for all-day listening.",
        title: "Top 5 Wireless Earbuds for Superior Sound Quality"
    },
    {
        id: 4,
        image: "/images/unsplash-3.png",
        alt: "Modern smart TV in a living room",
        author: "Taylor",
        category: "Home Entertainment",
        comments: 380,
        date: "2023-05-15",
        description: "Upgrade your home entertainment with the latest smart TVs, offering stunning 4K resolution and smart features for a more immersive viewing experience.",
        title: "How to Choose the Right Smart TV for Your Home"
    },
    {
        id: 5,
        image: "/images/unsplash-2.png",
        alt: "Electric scooter on a city street",
        author: "Chris",
        category: "Transportation",
        comments: 270,
        date: "2023-07-08",
        description: "Effortlessly navigate city streets with these affordable electric scooters, offering speed, convenience, and a sustainable way to get around.",
        title: "Affordable Electric Scooters: Ride in Style Without Breaking the Bank"
    },
    {
        id: 6,
        image: "/images/unsplash-6.png",
        alt: "High-performance gaming laptop",
        author: "Sarah",
        category: "Computing",
        comments: 430,
        date: "2023-02-18",
        description: "Dominate your favorite games with the latest gaming laptops, designed for peak performance with cutting-edge graphics and fast processors.",
        title: "Top Gaming Laptops to Boost Your Gameplay in 2023"
    },
    {
        id: 7,
        image: "/images/unsplash-3.png",
        alt: "Modern kitchen appliances on a counter",
        author: "David",
        category: "Home & Kitchen",
        comments: 150,
        date: "2023-04-25",
        description: "Transform your kitchen with these essential appliances, from smart refrigerators to high-speed blenders, perfect for a modern and efficient home.",
        title: "Must-Have Kitchen Appliances for a Modern Home"
    },
    {
        id: 8,
        image: "/images/unsplash-2.png",
        alt: "Latest smartphone model in hand",
        author: "Emily",
        category: "Mobile",
        comments: 520,
        date: "2023-06-12",
        description: "Discover the latest smartphones, featuring cutting-edge cameras, powerful processors, and sleek designs that keep you connected on the go.",
        title: "The Ultimate Guide to Choosing Your Next Smartphone"
    }
]


export const categories = [
   {
    id:1,
    name: "Electronics Devices",
   },
   {
    id:2,
    name: "Computer & Laptop",
   },
   {
    id:3,
    name:  "Home & Kitchen",
   },
   {
    id:4,
    name:  "Mobile",
    sub_cat: [
        {id:1, name: "Tablets"},
        {id:2, name: "Laptops"},
        {id:3, name: "Mobile Phones"},
        {id:4, name: "Headphones"},
        {id:5, name: "Smart TVs"},
        {id:6, name: "Wearable Devices"},
        {id:7, name: "Audio Devices"},
        {id:8, name: "Home Entertainment"},
        {id:9, name: "Computing"},
        {id:10, name: "Technology"},
        {id:11, name: "Gaming"},
        {id:12, name: "Fashion"},
    ]
   },
   {
    id:5,
    name:  "Wearables",
   },
   {
    id:6,
    name: "Audio",
   },
   {
    id:7,
    name:  "Transportation",
   },
   {
    id:8,
    name:  "Home Entertainment",
   },
   {
    id:9,
    name: "Technology",
   },
   
   {
    id:10,
    name: "Gaming",
   },
   
   {
    id:11,
    name: "Fashion",
   }, 
]

export const brands:BrandType[] = [
    "Apple",
    "Samsung",
    "Google",
    "Xiaomi",
    "Huawei",
    "Oppo",
    "OnePlus",
    "Asus",
    "Lenovo",
    "Acer",
    "Dell",
    "HP",
]

export const price_ranges = [
    "All Price",
    "Under $20",
    "$20 - $100",
    "$10 - $300",
    "$300 - $500",
    "$500 - $1000",
    "$1000 - $5000",
    "Over $5000",
]

type NavLink = {
    id: number;
    label: string;
    path: string;
    icon: any
}
export const navLinks:NavLink[] = [
    {
        id: 1,
        label: "Track Order",
        path: "/track-order",
        icon: MapPin
    },
    {
        id: 2,
        label: "About Us",
        path: "/about",
        icon: GitCompare
    },
    {
        id: 3,
        label: "Customer Support",
        path: "/support",
        icon: Headphones
    },
    {
        id: 4,
        label: "Blog",
        path: "/blog",
        icon: Flame
    },
    {
        id: 5,
        label: "Need Help",
        path: "/help",
        icon: CircleHelp
    },
]




export const allProducts:ProductType[] = [
    {
        id: 1,
        title: "Apple iPhone 14 Pro",
        alt: "iPhone 14 Pro in Space Gray",
        rating: 4.8,
        price: 1199,
        initialPrice: 1332,
        category: "Electronics Devices",
        brand: "Apple",
        tags: ["smartphone", "mobile", "Apple", "iOS"],
        description: "The latest iPhone 14 Pro with A16 Bionic chip, Super Retina XDR display, and advanced camera systems.",
        images: ["/images/black-md-headset.png", "/images/black-md-headset.png"],
        quantity: 100,
        inStock: true,
        colors: ["Space Gray", "Silver", "Gold", "Deep Purple"]
    },
    {
        id: 2,
        title: "Sony WH-1000XM5 Wireless Headphones",
        alt: "Sony Noise Cancelling Headphones",
        rating: 4.6,
        price: 349,
        initialPrice: 410,
        category: "Electronics Devices",
        brand: "Sony",
        tags: ["headphones", "wireless", "noise-cancelling", "Sony"],
        description: "Experience premium sound quality with Sony WH-1000XM5. Industry-leading noise-cancellation with adaptive sound control.",
        images: ["/images/black-cctv.png", "/images/black-md-headset.png"],
        quantity: 50,
        inStock: true,
        colors: ["Black", "Silver"]
    },
    {
        id: 3,
        title: "Nike Air Max 270",
        alt: "Nike Air Max 270 Sneakers",
        rating: 3.2,
        price: 150,
        category: "Fashion",
        brand: "Nike",
        tags: ["sneakers", "Nike", "footwear", "Air Max"],
        description: "Nike Air Max 270 delivers maximum cushioning and comfort with a striking design inspired by the Air Max heritage.",
        images: ["/images/boom-box-xy.png", "/images/black-md-headset.png"],
        quantity: 200,
        inStock: true,
        colors: ["White", "Black", "Red"]
    },
    {
        id: 4,
        title: "L'Oreal Paris Revitalift Serum",
        alt: "L'Oreal Anti-Aging Serum",
        rating: 4.3,
        price: 25,
        discount: 5,
        initialPrice: 26.5,
        category: "Fashion",
        brand: "L'Oreal",
        tags: ["serum", "beauty", "skincare", "anti-aging"],
        description: "L'Oreal Revitalift Serum with hyaluronic acid and vitamin C for younger-looking skin. Reduces wrinkles and fine lines.",
        images: ["/images/canon-camera.png", "/images/black-md-headset.png"],
        quantity: 500,
        inStock: true,
        colors: ["Clear"]
    },
    {
        id: 5,
        title: "Adidas Ultraboost Running Shoes",
        alt: "Adidas Ultraboost Black Running Shoes",
        rating: 4.5,
        price: 180,
        category: "Fashion",
        brand: "Adidas",
        tags: ["running", "shoes", "Adidas", "Ultraboost"],
        description: "Adidas Ultraboost shoes for unmatched energy return and comfort on your runs. Featuring Boost midsole cushioning.",
        images: ["/images/drone-controller.png", "/images/black-md-headset.png"],
        quantity: 75,
        inStock: true,
        colors: ["Black", "Gray"]
    },
    {
        id: 6,
        title: "Dell XPS 13 Laptop",
        alt: "Dell XPS 13 in Silver",
        rating: 4.8,
        price: 999,
        discount: 10,
        initialPrice: 1249,
        category: "Electronics Devices",
        brand: "Dell",
        tags: ["laptop", "Dell", "XPS", "ultrabook"],
        description: "Dell XPS 13 with InfinityEdge display, 11th Gen Intel processors, and powerful graphics in a sleek and portable design.",
        images: ["/images/black-md-headset.png", "/images/black-md-headset.png"],
        quantity: 30,
        inStock: true,
        colors: ["Silver", "White"]
    },
    {
        id: 7,
        title: "Samsung Galaxy S23 Ultra",
        alt: "Samsung Galaxy S23 Ultra in Phantom Black",
        rating: 4.7,
        price: 1199,
        deal: "Best Deal",
        initialPrice: 1299,
        category: "Electronics Devices",
        brand: "Samsung",
        tags: ["smartphone", "Samsung", "Galaxy", "Android"],
        description: "Samsung Galaxy S23 Ultra features a 200MP camera, powerful Snapdragon 8 Gen 2 chip, and a stunning AMOLED display for a premium smartphone experience.",
        images: ["/images/red-keyboard.png", "/images/samsung-s23-ultra-back.jpg"],
        quantity: 150,
        inStock: true,
        colors: ["#000000", "#E5E5E5", "#B4E1FA"]
      },
      {
        id: 8,
        title: "Bose QuietComfort 45",
        alt: "Bose QuietComfort 45 Noise Cancelling Headphones",
        rating: 4.5,
        price: 329,
        deal: "Hot",
        initialPrice: 379,
        category: "Audio",
        brand: "Bose",
        tags: ["headphones", "Bose", "noise-cancelling", "wireless"],
        description: "Bose QuietComfort 45 delivers industry-leading noise cancellation, comfortable fit, and up to 24 hours of battery life for immersive sound anywhere.",
        images: ["/images/silver-infinix.png"],
        quantity: 80,
        inStock: true,
        colors: ["#FFFFFF", "#282828"]
      },
      {
        id: 9,
        title: "Sony A7 IV Mirrorless Camera",
        alt: "Sony A7 IV Camera with 28-70mm Lens",
        rating: 4.8,
        price: 2499,
        deal: "Hot",
        initialPrice: 2799,
        category: "Electronics Devices",
        brand: "Sony",
        tags: ["camera", "Sony", "mirrorless", "A7 IV"],
        description: "Sony A7 IV is a high-performance mirrorless camera with a 33MP full-frame sensor, advanced autofocus, and 4K video recording for professionals and enthusiasts.",
        images: ["/images/silver-macbook-pro.png"],
        quantity: 20,
        inStock: true,
        colors: ["#000000"]
      },
      {
        id: 10,
        title: "Adidas Ultraboost 22",
        alt: "Adidas Ultraboost 22 Running Shoes",
        rating: 4.6,
        price: 190,
        category: "Fashion",
        brand: "Adidas",
        tags: ["running", "shoes", "Adidas", "Ultraboost"],
        description: "Adidas Ultraboost 22 delivers exceptional comfort and energy return with Boost cushioning and a Primeknit+ upper, perfect for runners and athletes.",
        images: ["/images/ps5.png"],
        quantity: 100,
        inStock: true,
        colors: ["#FFFFFF", "#000000", "#FF4500"]
      },
      {
        id: 11,
        title: "L'Oreal Paris Revitalift Cream",
        alt: "L'Oreal Revitalift Anti-Aging Cream",
        rating: 4.3,
        price: 35,
        category: "Fashion",
        brand: "L'Oreal",
        tags: ["skincare", "beauty", "L'Oreal", "anti-aging"],
        description: "L'Oreal Paris Revitalift Anti-Aging Cream hydrates, firms, and revitalizes skin, reducing wrinkles and promoting a youthful glow with every use.",
        images: ["/images/mp-box.png"],
        quantity: 300,
        inStock: true,
        colors: ["#FFFFFF", "#FF0000"]
      },
      {
        id: 12,
        title: "LG OLED Evo C3 55-Inch TV",
        alt: "LG OLED Evo C3 Smart TV",
        rating: 4.9,
        price: 1799,
        discount: 12,
        category: "Home Entertainment",
        brand: "LG",
        tags: ["TV", "LG", "OLED", "smart"],
        description: "LG OLED Evo C3 delivers breathtaking visuals with perfect blacks, infinite contrast, and Dolby Atmos for an unmatched cinematic experience at home.",
        images: ["/images/monitor-and-keyboard.png"],
        quantity: 40,
        inStock: true,
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 13,
        title: "Fitbit Charge 5",
        alt: "Fitbit Charge 5 Fitness Tracker",
        rating: 4.4,
        price: 149,
        category: "Wearables",
        brand: "Fitbit",
        tags: ["fitness", "tracker", "Fitbit", "health"],
        description: "Fitbit Charge 5 tracks your activity, sleep, and heart rate with precision, featuring a sleek design and long battery life to keep you moving.",
        images: ["/images/infinix-phone.png"],
        quantity: 200,
        inStock: true,
        colors: ["#1E90FF", "#000000", "#FFD700"]
      },
      {
        id: 14,
        title: "Nintendo Switch OLED",
        alt: "Nintendo Switch OLED Model",
        rating: 4.8,
        price: 349,
        category: "Gaming",
        brand: "Nintendo",
        tags: ["gaming", "console", "Nintendo", "Switch"],
        description: "Nintendo Switch OLED offers an enhanced gaming experience with a vibrant 7-inch display, improved audio, and dock with a wired LAN port for multiplayer fun.",
        images: ["/images/led-TV.png"],
        quantity: 60,
        inStock: true,
        colors: ["#FF0000", "#000000", "#FFFFFF"]
      },
      {
        id: 15,
        title: "HP Spectre x360",
        alt: "HP Spectre x360 Convertible Laptop",
        rating: 4.7,
        price: 1499,
        category: "Computer & Laptop",
        brand: "HP",
        tags: ["laptop", "HP", "Spectre", "convertible"],
        description: "HP Spectre x360 features a stunning 4K OLED display, Intel Evo platform, and flexible design, offering unparalleled versatility and performance.",
        images: ["/images/headphone-black.png"],
        quantity: 30,
        inStock: true,
        colors: ["#C0C0C0", "#000000"]
      },
      {
        id: 16,
        title: "Canon PIXMA G6020",
        alt: "Canon PIXMA G6020 MegaTank All-in-One Printer",
        rating: 4.2,
        price: 249,
        deal: "Best Deal",
        initialPrice: 279,
        category: "Technology",
        brand: "Canon",
        tags: ["printer", "Canon", "MegaTank", "All-in-One"],
        description: "Canon PIXMA G6020 is a versatile MegaTank all-in-one printer with high-yield ink bottles, wireless connectivity, and superior print quality for home and office use.",
        images: ["/images/external-webcam.png"],
        quantity: 75,
        inStock: true,
        colors: ["#000000", "#FFFFFF"]
      }
];



export const faqs:FaqType[] = [
    {
        id:1,
        question: "How can I track my order?",
        answer: "Once your order is shipped, you will receive a tracking number via email. You can use this number on the courier's website to track your order's status and estimated delivery time."
    },
    {
        id: 2,
        question: "Do you offer free shipping?",
        answer: "Yes! We offer free standard shipping on all orders over $50. For orders under $50, a shipping fee will apply based on your location."
    },
    {
        id: 3,
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy. If you're not completely satisfied with your purchase, you can return it within 30 days of receiving your order for a full refund or exchange. Please ensure the item is in its original condition."
    },
    {
        id: 4,
        question: "What payment methods do you accept?",
        answer: "We accept a wide range of payment methods, including credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are securely processed through our payment gateway."
    }
  ];


export const members:Member[] = [
    {
        id: 1,
        name: "John Doe",
        role: "Chief Executive Officer",
        image: "/images/member1.png"
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Assistant CEO",
       image: "/images/member2.png"
    },
    {
        id: 3,
        name: "Mike Johnson",
        role: "Head of Designer",
        image: "/images/member3.png"
    },
    {
        id: 4,
        name: "Mike Johnson",
        role: "UX Designer",
        image: "/images/member4.png"
    },
    {
        id: 5,
        name: "Mike Johnson",
        role: "Product Designer",
        image: "/images/member5.png"
    },
    {
        id: 6,
        name: "Mike Johnson",
        role: "Head of Development",
        image: "/images/member3.png"
    },
    {
        id: 7,
        name: "Mike Johnson",
        role: "Design Engineer",
        image: "/images/member1.png"
    },
    {
        id: 8,
        name: "Kevin Gilbert",
        role: "UI Designer",
        image: "/images/member2.png"
    },

]

type Countries = {
    name: string;
    code: string;
}

export const countries:Countries[] = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Brazil", code: "BR" },
    { name: "Brunei", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cabo Verde", code: "CV" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo (Congo-Brazzaville)", code: "CG" },
    { name: "Costa Rica", code: "CR" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czechia (Czech Republic)", code: "CZ" },
    { name: "Democratic Republic of the Congo", code: "CD" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Eswatini (Swaziland)", code: "SZ" },
    { name: "Ethiopia", code: "ET" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Greece", code: "GR" },
    { name: "Grenada", code: "GD" },
    { name: "Guatemala", code: "GT" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Honduras", code: "HN" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Laos", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia", code: "FM" },
    { name: "Moldova", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar (Burma)", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "North Korea", code: "KP" },
    { name: "North Macedonia", code: "MK" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" },
    { name: "Romania", code: "RO" },
    { name: "Russia", code: "RU" },
    { name: "Rwanda", code: "RW" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Korea", code: "KR" },
    { name: "South Sudan", code: "SS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syria", code: "SY" },
    { name: "Taiwan", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Vatican City", code: "VA" },
    { name: "Venezuela", code: "VE" },
    { name: "Vietnam", code: "VN" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" }
  ];


 
  


