import {useEffect, useState} from "react";
import {getData} from "../service/getData";
import {Product} from "../service/types";
import Products from "../products/products";

export default function Content() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setProducts(data)
        }
        fetchData()
    }, [])
    return (
        <div className='content'>
            <Products products={products}/>
        </div>
    );
}