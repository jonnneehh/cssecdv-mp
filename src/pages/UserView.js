import './css/UserView.css'
import ProductPost from '../components/ProductPost';
import ProductHeader from '../components/ProductHeader';
import { useContext } from 'react';
import Context from '../components/Context.js'
import EditView from '../components/EditView';

function UserView(){
    const products = useContext(Context)

    const regularView = (
            <div className="posts-product">
                {products.map((p) => (
                    <ProductPost product={p} />
                ))}
            </div>
    )

    const editableView = (
        <div className="posts-product">
            {products.map((p) => (
                <EditView product={p} />
            ))}
        </div>
    )
    
    var isEditable = false;
    function toggleView(){
        if(isEditable) {
            isEditable = false
            return {regularView}
        }
        else {
            isEditable = true
            return {editableView}
        }
    }
    return(
        <>
            <ProductHeader />
            <div className="posts">
                {regularView}
                <div className="posts-buttons">
                    <div className="buttons">
                        <button>Save</button>
                        <button>Cancel</button>
                        <button onClick={toggleView}>Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserView;