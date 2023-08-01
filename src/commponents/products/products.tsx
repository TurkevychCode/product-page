import {Product} from "../service/types";
import {FaHeart} from "react-icons/fa";

interface ProductsProps {
    products: Product[];
    addToFavorite: (product: Product) => void
}

export default function Products({products, addToFavorite}: ProductsProps) {
    return (
        <div className='products'>
            {
                products.map((product) => (
                    <div className='products-card' key={product.id}>
                        <div className='products-card-firstControlBlock'>
                            <img className='products-card-firstControlBlock-image' src={product.image}
                                 alt='image product'/>
                            <p className='products-card-firstControlBlock-name'>{product.title}</p>
                        </div>
                        <div className='products-card-controlBlock'>
                            <p className='products-card-controlBlock-price'>$ {product.price}</p>
                            <button className='products-card-controlBlock-likeButton'
                                    onClick={() => addToFavorite(product)}><FaHeart
                                className='products-card-controlBlock-likeButton-heart'/></button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}