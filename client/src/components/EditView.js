import './css/EditView.css'
import { useState } from 'react';

function EditView(props){
    const [quantity, setQuantity] = useState(props.product.quantity)
    const [id, setId] = useState(props.product.id)
    const [name, setName] = useState(props.product.name)
    const [description, setDescription] = useState(props.product.description)
    const [category, setCategory] = useState(props.product.category)
    const [cost, setCost] = useState(props.product.cost)

    return(
        <>
            <div className="product-post" key={id}>
                <div className="product-id">
                    <input type="text" id="post-id" name="post-id" defaultValue={id} onChange={ (e) => setId(e.target.value)}></input>
                </div>
                <div className="product-name">
                    <input type="text" id="post-name" name="post-name" defaultValue={name} onChange={ (e) => setName(e.target.value)}></input>
                </div>
                <div className="product-description">
                    <textarea id="post-description" name="post-description" defaultValue={description} onChange={ (e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="product-category">
                    <input type="text" id="post-category" name="post-category" defaultValue={category} onChange={ (e) => setCategory(e.target.value)}></input>
                </div>
                <div className="product-cost">
                    <input type="text" id="post-category" name="post-cost" defaultValue={cost} onChange={ (e) => setCost(e.target.value)}></input>
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