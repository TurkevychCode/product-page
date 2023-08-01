import {Product} from "./types";

export async function getData (): Promise<Product[]>{
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        return await response.json();
    }catch (e){
        console.error(e)
        return []
    }
}