import {Product} from "../service/types";
import {FaHeart} from "react-icons/fa";
import {Dispatch, SetStateAction} from "react";

interface FavoritesProductsProp {
    favoritesProducts: Product[];
    setSelectProduct: Dispatch<SetStateAction<Product | null>>;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function FavoritesProducts({favoritesProducts,onMouseEnter,
                                              onMouseLeave, setSelectProduct}: FavoritesProductsProp) {


    const handleMouseEnter = (product: Product) => {
        setSelectProduct(product);
        onMouseEnter();
    };

    const handleMouseLeave = () => {
        setSelectProduct(null);
        onMouseLeave();
    };

    return (
            <div className='favoritesProducts'>
                <h2 className='favoritesProducts-title'>Favorites</h2>
                <div className='favoritesProducts-productsBlock'
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>
                    {favoritesProducts.map((product, key) => (
                        <div className="favoritesProducts-productsBlock-card" key={key}
                             onMouseEnter={() => handleMouseEnter(product)}
                             onMouseLeave={handleMouseLeave}>
                            <img className='favoritesProducts-productsBlock-card-image' src={product.image}
                                 alt="favorite product image"/>
                            <div className='favoritesProducts-productsBlock-card-blockTitlePrice'>
                                <p className='favoritesProducts-productsBlock-card-blockTitlePrice-title'>{product.title}</p>
                                <div className='favoritesProducts-productsBlock-card-blockTitlePrice-price'>
                                    <p className='favoritesProducts-productsBlock-card-blockTitlePrice-price-priceText'>$ {product.price}</p>
                                    <button
                                        className='favoritesProducts-productsBlock-card-blockTitlePrice-price-button'
                                    >
                                        <FaHeart
                                            className='favoritesProducts-productsBlock-card-blockTitlePrice-price-button-heart'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}