import {Product} from "./types";

export async function getData (): Promise<Product[]>{
    try {
        const response = await fetch('https://testbackend.nc-one.com/image');
        return await response.json();
    }catch (e){
        console.error(e)
        return []
    }
}