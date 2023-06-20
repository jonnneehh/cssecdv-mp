import './css/UserView.css'
import ProductPost from '../components/ProductPost';

function UserView(){
    return(
        <>
            <div className="posts">
                <div className="posts-product" id="0">
                    <ProductPost />
                    <ProductPost />
                </div>
            </div>
        </>
    )
}

export default UserView;