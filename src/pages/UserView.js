import './css/UserView.css'
import ProductPost from '../components/ProductPost';
import ProductHeader from '../components/ProductHeader';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EditView from '../components/EditView';

function UserView(){
    const [products, setProducts] = useState([])
    const [read, setRead] = useState('')

    useEffect( () => {
        let processing = true
        axiosFetchData(processing)
        return () => {
            processing = false
        }
    },[])

    const axiosFetchData = async(processing) => {
        await axios.get('http://localhost:4000/products')
        .then(res => {
            if (processing) {
                setProducts(res.data)
            }
        })
        .then()
        .catch(err => console.log(err))
    }

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
        
    const [view, setView] = useState(Read)

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