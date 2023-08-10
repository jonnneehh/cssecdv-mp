import './css/UserView.css'
import ProductPost from '../components/ProductPost';
import ProductHeader from '../components/ProductHeader';
import { useEffect, useState } from 'react';
import EditView from '../components/EditView';
import useFetch from '../hooks/useFetch';
import axios from '../api/axios.js'
import { useNavigate } from "react-router-dom"

function UserView(){
    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    const [view, setView] = useState(null) 
    const { data } = useFetch("http://localhost:4000/products");
    const [user, setUser] = useState(null)

    /**
     * Session Timeout
     */
    function checkForInactivity(){
        const expireTime = localStorage.getItem("expireTime")

        if(expireTime < Date.now()){
            alert("Session Timeout!")
            navigate('/login')
        }
    }

    function updateExpireTime(){
        const expireTime = Date.now() + 10000
        localStorage.setItem("expireTime", expireTime)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            checkForInactivity()
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    })
    useEffect(() => {
        updateExpireTime()

        window.addEventListener("click", updateExpireTime)
        window.addEventListener("keypress", updateExpireTime)
        window.addEventListener("scroll", updateExpireTime)
        window.addEventListener("mousemove", updateExpireTime)

        return() => {
            window.addEventListener("click", updateExpireTime)
            window.addEventListener("keypress", updateExpireTime)
            window.addEventListener("scroll", updateExpireTime)
            window.addEventListener("mousemove", updateExpireTime)
        }
    })
    /**
     * KNOWN BUG: Sometimes does not display the products. 
     * Press cancel or edit to show products.
     */
    useEffect(() => {
        setProducts(data)
        setView(Read)
        setUser(axios.get('/getUser'))
    }, [data])

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
                <EditView product={p} key={p.id} saveProduct={saveProduct}/>
            ))}
        </div>
    )

    function saveProduct(product){
        const arr = products.map((p)=>{
            if(p.id === product.id) return product
            return p
        })
        setProducts(arr)
    }
    
    function save(e){
        e.preventDefault()
        console.log("UserView.js: Saving...")
        console.log(products)
        console.log(user)
        axios.post("http://localhost:4000/products", products)
        setView(Read)
    }

    return(
        <>
            <ProductHeader />
            <div className="posts">
                {view}
                <div className="posts-buttons">
                    <div className="buttons">
                        <button type="submit" onClick={save}>Save</button>
                        <button onClick={ () => setView(Read) } >Cancel</button>
                        <button onClick={ () => setView(Edit) } >Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserView;