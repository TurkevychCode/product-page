import {Product} from "../service/types";
import {FaHeart} from "react-icons/fa";

interface ProductsProps {
    products: Product[];
}

export default function Products({products}: ProductsProps) {
    return (
        <div className='products'>
            {
                products.map((product) => (
                    <div className='products-card' key={product.id}>
                        <img className='products-card-image' src={product.src} alt='image product'/>
                        <p className='products-card-name'>{product.name}</p>
                        <div className='products-card-controlBlock'>
                            <p className='products-card-controlBlock-price'>$ {product.price}</p>
                            <button className='products-card-controlBlock-likeButton'><FaHeart
                                className='products-card-controlBlock-likeButton-heart'/></button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}