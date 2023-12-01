import React, {useState ,useEffect} from "react";
import {unstable_batchedUpdates} from "react-dom";
import Header from "./Header.jsx";
import {json, NavLink} from "react-router-dom";
import {addCart} from "../redux/actions/index.jsx";
import {useDispatch} from "react-redux";
import Footer from "./Footer.jsx";
import Skeleton from "react-loading-skeleton";


const Products =()=>
{
    const [data, setData]=useState([])
    const [filter, setFilter]=useState(data)
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()

     let componentMounted=true;


    useEffect(()=>
        {
        const getProducts = async ()=>
            {
                setLoading(true);
                const response =await fetch("https://fakestoreapi.com/products")
                if(componentMounted)
                {
                    setData(await response.clone().json())
                    setFilter(await response.json())
                    setLoading(false)
                    console.log(filter)
                }
                return ()=>{
                    componentMounted=false;
                }
        }
        getProducts()
        }
        ,[]
    )
    const addProduct =(product)=>
    {
        return dispatch(addCart(product))
    }

    const filterProduct =(cat)=>
    {

            const updatedList =data.filter((x)=> x.category === cat)
            setFilter(updatedList)
        
    }
    const ShowProduct=()=>
        {
            return (
                <>
                <div className=" grid grid-col-1 md:grid-cols-3 lg:grid-cols-5 justify-center gap-2 mt-8">
                    <button onClick={()=>setFilter(data)} className="bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        تمام محصولات
                    </button>
                    <button onClick={()=>filterProduct("electronics")} className="bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                       الکترونیکی
                    </button>
                    <button onClick={()=>filterProduct("men's clothing")} className="bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        پوشاک مردانه
                    </button>
                    <button onClick={()=>filterProduct("women's clothing")}  className="bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        پوشاک زنانه
                    </button>
                    <button onClick={()=>filterProduct("jewelery")}  className="bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        اکسسوری
                    </button>
                </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4  mt-4 ">
            {
                filter.map((product)=>
                {
                    return (
                        <>
                            <div className=" col-span-1  overflow-hidden box-border border-2 border-gray-300 rounded mt-4 ">
                                 <img class="content-center w-16 h-16 mx-auto  md:w-24 md:h-24 blg:w-48 blg:h-48 lg:mx-auto" src={product.image}  alt={product.title}/>
                                 <div class=" m-4 text-stone-500 text-center sm:text-2xl text-base">{product.title.substring(0,12)}</div>
                                <p className="m-4 text-center">${product.price}</p>
                                <div className="px-6 pt-4 pb-2">
                                    <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm text-center text-gray-700  m-2">#{product.category}</span>
                                </div>
                                <div class="flex flex-row justify-center">
                                <button onClick={()=>addProduct(product)} className="text-xs md:text-sm bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-1 px-2 m-2 border border-gray-300 hover:border-transparent rounded">
                                    اضافه به سبد خرید
                                </button>
                                <NavLink to={`/products/${product.id}`} className="text-xs md:text-sm bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-1 px-2 m-2 border border-gray-300 hover:border-transparent rounded">
                                    اطلاعات بیشتر
                                </NavLink>
                                </div>
                            </div>
                        </>
                    );
                })}
                    </div>
                </>
            );
        }
    const Loading=()=>
{
    return (
        <>
                <div className="grid-cols-3">
                    <Skeleton height={350}/>
                </div>
            <div className="col-span-1">
                <Skeleton height={350}/>
            </div>
            <div className="col-span-1">
                <Skeleton height={350}/>
            </div>
            <div className="col-span-1">
                <Skeleton height={350}/>
            </div>
        </>
    )
}


    return (
        <>
            <div class=" mt-[800px] m-5 p-5">
            <h2 class="text-3xl text-center mt-8 ">Latest Products</h2>
                {loading? <Loading/> : ShowProduct()}
            </div>

        </>
    )
}

export default Products