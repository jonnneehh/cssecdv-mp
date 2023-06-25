import './css/ProductPost.css'
import { useState } from 'react';

function ProductPost(props){
    const [quantity, setQuantity] = useState(props.product.quantity)

    return(
        <>
            <div className="product-post">
                <div className="product-id"><p>{props.product.id}</p></div>
                <div className="product-name"><p>{props.product.name}</p></div>
                <div className="product-description"><p>{props.product.description}</p></div>
                <div className="product-category"><p>{props.product.category}</p></div>
                <div className="product-cost"><p>Php {props.product.cost}</p></div>
                <div className="product-quantity">
                    <button onClick={() => setQuantity(quantity - 1)} type="button">-</button>
                    <p>{quantity}</p>
                    <button onClick={() => setQuantity(quantity + 1)} type="button">+</button>
                </div>
            </div>
        </>
    )
}

export default ProductPost;