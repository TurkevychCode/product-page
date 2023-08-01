import {Product} from "../service/types";
import {FaHeart} from "react-icons/fa";

interface ProductDetailsProp {
    products: Product[] | null;
}

export default function ProductDetails({products}: ProductDetailsProp) {
    if (!products || products.length === 0) {
        return null;
    }
    return (
        <div className='productDetails'>
            {
                products.map((product, key) => (
                    <div className='productDetails-block' key={key}>
                        <img className='productDetails-block-image' src={product.image} alt="product image"/>
                        <div className='productDetails-block-titlePrice'>
                            <p className='productDetails-block-titlePrice-title'>{product.title}</p>
                            <div className='productDetails-block-titlePrice-priceBlock'>
                                <p className='productDetails-block-titlePrice-priceBlock-price'>{product.price}</p>
                                <button className='productDetails-block-titlePrice-priceBlock-button'><FaHeart
                                    className='productDetails-block-titlePrice-priceBlock-button-heart'/></button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}