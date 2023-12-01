import React, {useState} from 'react';
import {motion,AnimatePresence} from "framer-motion";
import {wrap} from "popmotion";

const HomeSlider = () =>
{
    const imgItems =[
        '../assets/accessory images/1.jpg',
        '../assets/accessory images/2.jpg',
        '../assets/accessory images/3.jpg',
        '../assets/accessory images/4.jpg',
        '../assets/accessory images/5.jpg',
        '../assets/accessory images/6.jpg',
        '../assets/accessory images/7.jpg',
        '../assets/accessory images/8.jpg',
        '../assets/accessory images/9.jpg',
    ];

    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

        const [[page,direction],setPage]=useState([0,0])
        const imageIndex= wrap(0,imgItems.length,page)
    const paginate=(newDirection)=>
    {
        setPage([page+newDirection,newDirection]);
    }
    return (
        <div className=" mt-[40px] absolute w-full h-full bg-gray-200  p-0 m-0 flex items-center justify-center">
            <motion.div className="w-full h-full relative flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction}>
                     <motion.img className="absolute max-w-[100vh] max-h-[100vh]  " src={imgItems[imageIndex]}
                     key={page}
                     custom={direction}
                     variants={variants}
                     initial="enter"
                     animate="center"
                     exit="exit"
                     transition={{
                     x: { type: "spring", stiffness: 300, damping: 30 },
                     opacity: { duration: 0.2 }
                     }}
                     />
                    </AnimatePresence>
                <motion.div className="flex flex-col gap-4  border-4 border-transparent lg:px-6 border-gray-200 bg-[#FCB2A0]
                 z-30 absolute lg:top-20 lg:right-30 opacity-50">
                <h2 class="text-xl lg:text-3xl text-[#157FEF] "> پیج اینستاگرام</h2>
                <p className="text-base lg:text-2xl hover:text-blue-700">styleshoop2020</p>
                </motion.div>
            <div className=" absolute bg-white border-6 border-transparent
             rounded-full w-[40px] h-[40px] top-[calc(100vh-h-1/2)]
              right-10 flex items-center justify-center cursor-pointer z-20"
                 onClick={() => paginate(1)}>
                {"‣"}
            </div>
            <div className=" absolute bg-white border-6 border-transparent
             rounded-full text-[18px] z-20 w-[40px] h-[40px] top-[calc(100vh-h-1/2)]
             left-10 transform rotate-180 flex items-center justify-center cursor-pointer " onClick={() => paginate(-1)}>
                {"‣"}
            </div>
            </motion.div>
        </div>
    );
};

export default HomeSlider;