import {useEffect, useState} from "react";
import {getData} from "../service/getData";
import {Product} from "../service/types";
import FavoritesProducts from "../favoritesProducts/favoritesProducts";
import ProductDetails from "../productDetails/productDetails";
import Products from "../products/products";

export default function Content() {
    const [products, setProducts] = useState<Product[]>([]);
    const [favoritesProducts, setFavoritesProducts] = useState<Product[]>([]);
    const [selectProduct, setSelectProduct] = useState<Product | null>(null);
    const [isProductDetailsVisible, setIsProductDetailsVisible] = useState<boolean>(false);


    useEffect(() => {
        (async () => {
            try {
                const data = await getData();
                setProducts(data)
            } catch (error) {
                console.error('Error fetching', error)
            }
        })()
    }, [])
    const addToFavorite = (product: Product) => {
        setFavoritesProducts((prevFavoritesProducts) => [...prevFavoritesProducts, product])
    }

    const handleProductMouseEnter = () => {
        setIsProductDetailsVisible(true);
    };

    const handleProductMouseLeave = () => {
        setIsProductDetailsVisible(false);
    };

    return (
        <div className='content'>
            {favoritesProducts.length > 0 &&
            <FavoritesProducts
                favoritesProducts={favoritesProducts}
                setSelectProduct={setSelectProduct}
                onMouseEnter={handleProductMouseEnter}
                onMouseLeave={handleProductMouseLeave}
            />}
            {isProductDetailsVisible && <ProductDetails products={selectProduct ? [selectProduct] : null}/>}
            {!isProductDetailsVisible && <Products products={products} addToFavorite={addToFavorite} hasFavorites={favoritesProducts.length > 0}/>}
        </div>
    );
}