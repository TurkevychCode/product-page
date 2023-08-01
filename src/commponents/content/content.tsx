import {useEffect, useState} from "react";
import {getData} from "../service/getData";
import {Product} from "../service/types";
import Products from "../products/products";
import FavoritesProducts from "../favoritesProducts/favoritesProducts";

export default function Content() {
    const [products, setProducts] = useState<Product[]>([]);
    const [favoritesProducts, setFavoritesProducts] = useState<Product[]>([])
    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setProducts(data)
        }
        fetchData()
    }, [])
    const addToFavorite = (product: Product) => {
        setFavoritesProducts((prevFavoritesProducts) => [...prevFavoritesProducts, product])
    }

    return (
        <div className='content'>
            <FavoritesProducts favoritesProducts={favoritesProducts}/>
            <Products products={products} addToFavorite={addToFavorite}/>
        </div>
    );
}