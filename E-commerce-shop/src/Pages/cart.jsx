import React from 'react';
import {useSelector} from "react-redux";
import {FaRegPlusSquare} from "react-icons/fa";
import { FiMinusSquare } from "react-icons/fi";
import {useDispatch} from "react-redux";
import {addCart, delCart} from "../redux/actions/index.jsx";
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";

const cart = () =>
{

 const product=useSelector( (state)=>state.cart)
const dispatch = useDispatch()
    const handleAddButton =(product) =>
    {
        return dispatch(addCart(product))
    }
    const handleRemoveButton =(product) =>
    {
        return dispatch(delCart(product))
    }

    const totalPrice = product.reduce((acc, item) => acc + item.price * item.qty, 0);

return (
        <>
            <Header />
        <div>
                    {product.map((item)=>(
                        <div class="grid grid-cols-2 bg-gray-200">
                            <div class="col-span-1">
                            <img className=" m-12 w-1/2" src={item.image} alt={item.title}/>
                            </div>
                            <div className="col-span-1 ">
                                <h1 class="text-3xl">{item.title}</h1>
                                <h2 class="text-2xl mt-4 mb-4">{item.qty} x {item.title}
                                = {item.qty* item.price}</h2>
                                <div className="flex flex-row gap-8 p-8">
                                <button onClick={()=>handleAddButton(item)}><FaRegPlusSquare  size={50} /></button>
                                <button onClick={()=>handleRemoveButton(item)}><FiMinusSquare  size={50}/> </button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    <div>
                        <h3 class="mt-20 ml-20">Total price: ${totalPrice.toFixed(2)}</h3>
                    </div>
         </div>
            <Footer/>
</>
)

}
export default cart;