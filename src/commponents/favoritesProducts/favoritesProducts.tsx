import {Product} from "../service/types";
import {FaHeart} from "react-icons/fa";

interface FavoritesProductsProp {
    favoritesProducts: Product[];
}

export default function FavoritesProducts({favoritesProducts}: FavoritesProductsProp) {
    return (
        <div className='favoritesProducts'>
            <h2 className='favoritesProducts-title'>Favorites</h2>
            <div className='favoritesProducts-productsBlock'>
                {favoritesProducts.map((product,key) => (
                    <div className="favoritesProducts-productsBlock-card" key={key}>
                        <img className='favoritesProducts-productsBlock-card-image' src={product.image}
                             alt="favorite product image"/>
                        <div className='favoritesProducts-productsBlock-card-blockTitlePrice'>
                            <p className='favoritesProducts-productsBlock-card-blockTitlePrice-title'>{product.title}</p>
                            <div className='favoritesProducts-productsBlock-card-blockTitlePrice-price'>
                                <p className='favoritesProducts-productsBlock-card-blockTitlePrice-price-priceText'>$ {product.price}</p>
                                <button className='favoritesProducts-productsBlock-card-blockTitlePrice-price-button'>
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