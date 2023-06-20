import './css/ProductPost.css'

function ProductPost(){
    return(
        <>
            <div className="product-post">
                <div className="product-id"><p>TC-1032</p></div>
                <div className="product-name"><p>Tea Cup</p></div>
                <div className="product-description"><p>A tea cup made of ceramic</p></div>
                <div className="product-category"><p>Glassware</p></div>
                <div className="product-cost"><p>Php 30.00</p></div>
                <div className="product-quantity">
                    <button type="button">-</button>
                    <p>13</p>
                    <button type="button">+</button>
                </div>
            </div>
        </>
    )
}

export default ProductPost;