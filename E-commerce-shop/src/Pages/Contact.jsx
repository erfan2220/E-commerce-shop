import Header from "../Component/Header.jsx";
import Body from "../Component/Body.jsx";
import Footer from "../Component/Footer.jsx";
import React, {useState} from "react";
import {motion} from "framer-motion";


const Contact =()=>
{
    const [move,setMove]=useState(true);

    const contactInformation=()=>
    {
     return (<div>
         اطلاعات تماس
     </div>)
    }
    return (
        <>
            {
               <div class="example-container bg-[#23304c] w-full h-screen mt-10">
                   <div >
                   <button class="text-white top-52 ">
                   <motion.div class="  text-white border-2
                   border-blue-100 hover:bg-blue-200
                    px-5 py-3 rounded bg-green-500"  animate={{
                       scale: [1, 2, 2, 1, 1],
                       rotate: [0, 0, 270, 270, 0],
                       borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                   }}
                   transition={{duration:10}}>
                       {()=>setMove(!move)}
                       اطلاعات تماس
                   </motion.div>
                   </button>
                   </div>
               </div>
            }
        </>
    )
}

export default Contact