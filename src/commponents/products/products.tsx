import {Product} from "../service/types";
import {FaHeart} from "react-icons/fa";
import {useState} from "react";

interface ProductsProps {
    products: Product[];
    addToFavorite: (product: Product) => void;
    hasFavorites: boolean
}

export default function Products({products, addToFavorite, hasFavorites}: ProductsProps) {
    const [isHearted, setIsHearted] = useState<{ [key: string]: boolean }>({});
    const handleHeartClick = (productId:number) => {
        setIsHearted((prevState) => ({
            ...prevState,
            [productId]: !prevState[productId],
        }));
    }
    return (
        <div className={`products ${hasFavorites ? 'products-with-favorites' : ''}`}>
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
                                    onClick={() => {
                                        handleHeartClick(product.id);
                                        addToFavorite(product)}}>
                                <FaHeart className={isHearted[product.id] ? 'products-card-controlBlock-likeButton-heart active'
                                    : 'products-card-controlBlock-likeButton-heart'}/>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}