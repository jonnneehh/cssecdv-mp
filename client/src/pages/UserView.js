import './css/UserView.css'
import ProductPost from '../components/ProductPost';
import ProductHeader from '../components/ProductHeader';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EditView from '../components/EditView';

function UserView(){
    const [products, setProducts] = useState([])
    const [view, setView] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect( () => {
        const result = axios.get('http://localhost:4000/products')

        async function axiosFetchData() {
            setIsLoading(true);
            try {
                const result = await axios.get('http://localhost:4000/products')
                do{
                    setProducts(result.data)
                    console.log("result.data: " + result.data)
                    console.log("products: " + products)
                }while(isLoading)
            } catch (error) {
                console.error(error);
            } finally { 
                setIsLoading(false);
                setView(Read)
            }
         }
        axiosFetchData();
    }, [])
     
    const Read = (
        <div className="posts-product">
            {products?.map((p) => (
                <ProductPost product={p} key={p.id}/>
            ))}
        </div>
    )

    const Edit = (
        <div className="posts-product">
            {products?.map((p) => (
                <EditView product={p} key={p.id}/>
            ))}
        </div>
    )
    
    function makeViewEdit(){
        return Edit
    }

    function makeViewRead(){
        return Read
    }

    function save(e){
        e.preventDefault()

        console.log("saved")
    }

    return(
        <>
            <ProductHeader />
            <div className="posts">
                {view}
                <div className="posts-buttons">
                    <div className="buttons">
                        <button type="submit" onClick={save}>Save</button>
                        <button onClick={ () => setView(makeViewRead()) } >Cancel</button>
                        <button onClick={ () => setView(makeViewEdit()) } >Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserView;