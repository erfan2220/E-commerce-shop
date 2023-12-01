import React,{useState,useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import Header from "./Header.jsx";
import Skeleton from 'react-loading-skeleton'
import {useDispatch} from "react-redux";
import {addCart} from '../redux/actions';
import Footer from "./Footer.jsx";


const Product = () =>
{
    const {id}=useParams()
    const [product,setProduct]=useState([])
    const [loading,setLoading]=useState(false)

    const dispatch=useDispatch();
    const addProduct =(product)=>
    {
    return dispatch(addCart(product))
    }

    useEffect(()=>
    {
        const getProduct = async ()=>
        {
            setLoading(true)
            const response=await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct();
    },[])

const Loading =()=>
{
    return (<div>
        <h1 class="text-3xl">Loading...</h1>
    </div>)

}

const ShowProduct =()=>
{
return (
    <>
        <Header/>
            <div class="  grid grid-cols-3 mb-8 mt-16">
                <div class="col-span-1">
                    <img class="ml-8 relative w-1/2" src={product.image} alt={product.title} />
                </div>
                <div  class="col-span-1">
                    <h1 class="text-4xl ">{product.category}</h1>
                    <h2 class="mt-4 mb-2 text-red-500">{product.title}</h2>
                    <p class="mb-16 mt-8">{product.description}</p>
                    <p>${product.price}</p>
                    <div class="flex flex-row gap-2 mt-2">
                        <button class="border-2 border-stone-200
                        rounded px-2 py-2 hover:bg-blue-400
                         hover:text-gray-800" onClick={()=>addProduct(product)}>اضافه کردن به سبد خرید</button>

                        <NavLink className="border-2 text-white bg-stone-900 border-stone-300 rounded px-2 py-2 hover:bg-blue-400" to={'/cart'} >
                            دیدن سبد خرید
                        </NavLink>
                    </div>
                </div>
            </div>
            <hr/>
        <div className="flex flex-col items-center gap-2">
            <h2 class="mt-16 mb-4 text-center">ارسال نظرات</h2>

                <input type="text"/>
                <textarea name="customer-guidance" id="#customer-guidance" cols="60" rows="10" class="border-2 border-gray-200  w-1/2"></textarea>
                <NavLink className="px-6 py-2 border-2 border-gray-400 rounded hover:bg-blue-500">ارسال</NavLink>

        </div>
        <Footer/>
    </>
)
}

return (
   <div>
       {loading? <Loading/>: ShowProduct()}
   </div>
);

}

export default Product;