"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Slider ({ data }:SliderProps){
    const [slide, setSlide] = useState(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const nextSlide = () => {
        if (intervalId !== null) {
            clearInterval(intervalId)
        }
        setSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
    };
    const prevSlide = () => {
        if (intervalId !== null) {
            clearInterval(intervalId)
        }
        setSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
    };
    useEffect(() => {
        const id = setInterval(() => {
            nextSlide();
        }, 5000);
        setIntervalId(id);
        return () => clearInterval(id)
    }, [slide, data.length]);
    return (
        <div className="relative flex justify-center items-center w-full max-w-[1000px]">
            {data.map((item, idx) => {
                return (
                    <AnimatePresence key={idx} initial={false} mode="wait">
                        <motion.div 
                            className={slide === idx ? "w-full h-full flex flex-col items-center justify-center" : "w-full h-full hidden"}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                              x: {
                                type: "spring",
                                stiffness: 800,
                                damping: 100,
                                duration: 0.1
                              },
                              opacity: { duration: 0.6 }
                            }}
                        >
                            <div className="flex gap-6 items-center ml-[-100px]">
                                <Image src={item.image} alt={item.alt} width={150} height={150}/>
                                <span className="bg-white w-[1px] h-[80%]"></span>
                                <div className="text-white gap-1 flex flex-col ml-2">
                                    <p className="text-xl">{item.nom}</p>
                                    <p>{item.fonction}</p>
                                    <p className="text-sm text-gray-500">{item.entreprise}</p>
                                </div>
                            </div>
                            <p className="w-3/4 mx-auto text-white text-2xl mt-8">{item.temoignage}</p>
                        </motion.div>
                    </AnimatePresence>
                );
            })}
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={prevSlide} className="absolute left-[1em] cursor-pointer bg-black opacity-50 rounded-full">
                <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={nextSlide} className="absolute right-[1em] cursor-pointer bg-black opacity-50 rounded-full">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

type SliderProps = {
    data: Array<{ id:number; image: any; alt: string; nom:string; fonction:string; entreprise:string; temoignage:string }>;
};