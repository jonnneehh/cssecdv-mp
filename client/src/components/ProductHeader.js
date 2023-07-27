import './css/ProductHeader.css'

function ProductHeader(){
    return(
        <>
            <div className="product-header">
                <div className="header-id"><p>ID</p></div>
                <div className="header-name"><p>Name</p></div>
                <div className="header-description"><p>Description</p></div>
                <div className="header-category"><p>Category</p></div>
                <div className="header-cost"><p>Cost</p></div>
                <div className="header-quantity"><p>Quantity</p></div>
            </div>
        </>
    )
}

export default ProductHeader;