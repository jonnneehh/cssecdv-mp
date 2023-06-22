import './css/UserView.css'
import ProductPost from '../components/ProductPost';
import ProductHeader from '../components/ProductHeader';

function UserView(){
    return(
        <>
            <ProductHeader />
            <div className="posts">
                <div className="posts-product" id="0">
                    <ProductPost />
                    <ProductPost />
                    <ProductPost />
                    <ProductPost />
                    <ProductPost />
                    <ProductPost />
                    <ProductPost />
                    <ProductPost />
                    <ProductPost />
                    <ProductPost />
                </div>
                <div className="posts-buttons">
                    <div className="buttons">
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserView;