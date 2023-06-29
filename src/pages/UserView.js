import './css/UserView.css'
import ProductPost from '../components/ProductPost';
import ProductHeader from '../components/ProductHeader';
import { useContext, useState } from 'react';
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

    const [view, setView] = useState(<regularView />)
    function toggleView(){
        if(view === <regularView />){
            setView(<editableView />)
        }
        else{
            setView(<regularView />)
        }
    }
 
    return(
        <>
            <ProductHeader />
            <div className="posts">   
                {view}
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