import './css/EditView.css'
import { useState } from 'react';

function EditView(props){
    const [quantity, setQuantity] = useState(props.product.quantity)

    return(
        <>
            <div className="product-post">
                <div className="product-id">
                    <input type="textbox" defaultValue={props.product.id}></input>
                </div>
                <div className="product-name">
                    <input type="textbox" defaultValue={props.product.name}></input>
                </div>
                <div className="product-description">
                    <input type="textbox" defaultValue={props.product.description}></input>
                </div>
                <div className="product-category">
                    <input type="textbox" defaultValue={props.product.category}></input>
                </div>
                <div className="product-cost">
                    <input type="textbox" defaultValue={props.product.cost}></input>
                </div>
                <div className="product-quantity">
                    <button onClick={() => setQuantity(quantity - 1)} type="button">-</button>
                    <p>{quantity}</p>
                    <button onClick={() => setQuantity(quantity + 1)} type="button">+</button>
                </div>
            </div>
        </>
    )
}

export default EditView;