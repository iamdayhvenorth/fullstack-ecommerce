

export interface BestDealProps {
    id: number;
    src: string;
    alt: string;
    price: number;
    discount?: string;
    availability?: "Sold Out";
    deal?: "Hot";
    initialPrice?: number;
    title: string;
    className?: string
}

export interface TopRatedProps {
    src: string;
    alt: string;
    title: string;
    price: number;
}

export type CartPopupItem = {
    id: Number ;
    alt:String;
    image: String;
    quantity: Number;
    price: Number;
    title: String;
}

export interface BlogProps {
    id: number;
    image: string;
    alt: string;
    title: string;
    author: string;
    date: string;
    comments: number;
    description: string;
    category: string
}


export type CategoryType =  "Electronics Devices"|
"Computer & Laptop"|
"Home & Kitchen"|
"Mobile"|
"Wearables"|
"Audio"|
"Transportation"|
"Home Entertainment"|
"Computing"|
"Technology"|
"Gaming"|
"Fashion";


export type BrandType = string


type Brand = "Sony" | "Apple" | "Nike" | "Samsung" | "Adidas" | "L'Oreal" | "Panasonic" | "Dell" | "Asus" | "HP";



export type ProductType = {
    id:number
    title:string;
    alt: string;
    rating:number
    price: number;
    discount?: number;
    initialPrice?: number;
    category: CategoryType;
    brand: BrandType;
    tags: string[];
    description: string;
    images: string[];
    quantity:number
    inStock: boolean;
    colors: string[]
    availability?: "Sold Out";
    deal?: "Hot" | "Best Deal";
}

export type FaqType = {
    id: number;
    question: string;
    answer: string;
}


export type Member = {
    id: number;
    name: string;
    role: string;
    image: string;
}