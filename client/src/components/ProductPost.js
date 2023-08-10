import './css/ProductPost.css'
import { useState } from 'react';

function ProductPost(props) {
    //Removed the setId, setName, setDescription, setCategory, and setCost to avoid warning errors
    const [quantity, setQuantity] = useState(props.product.quantity)
    const [id] = useState(props.product.id)
    const [name] = useState(props.product.name)
    const [description] = useState(props.product.description)
    const [category] = useState(props.product.category)
    const [cost] = useState(props.product.cost)
    const [comment] = useState(props.product.comment)
    
    
    return (
        <>
            <div className="product-post" key={id}>
                <div className="product-id" ><p>{id}</p></div>
                <div className="product-name"><p>{name}</p></div>
                <div className="product-description"><p>{description}</p></div>
                <div className="product-category"><p>{category}</p></div>
                <div className="product-cost"><p>Php {cost}</p></div>
                <div className="product-quantity">
                    <button onClick={() => setQuantity(quantity - 1)} type="button">-</button>
                    <p>{quantity}</p>
                    <button onClick={() => setQuantity(quantity + 1)} type="button">+</button>
                </div>
                <div className="product-comment"><p>{comment}</p></div>
            </div>
        </>
    )
}

export default ProductPost;