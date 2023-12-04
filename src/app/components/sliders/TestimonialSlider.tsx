"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

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
        <div className="relative flex justify-center items-center h-full w-full max-w-[1000px]">
            {data.map((item, idx) => {
                return (
                    <div key={item.id} className={slide === idx ? "w-full h-full flex flex-col items-center justify-center" : "w-full h-full hidden"}>
                        <div className="flex gap-6 items-center ml-[-100px] sm:ml-0 justify-center">
                            <Image src={item.image} alt={item.alt} width={150} height={150}/>
                            <span className="bg-white w-[1px] h-[80%]"></span>
                            <div className="text-white gap-1 flex flex-col ml-2">
                                <p className="text-xl sm:text-base">{item.nom}</p>
                                <p className="sm:text-sm">{item.fonction}</p>
                                <p className="text-sm text-gray-500 sm:text-xs">{item.entreprise}</p>
                            </div>
                        </div>
                        <p className="w-4/5 mx-auto text-white text-2xl mt-8 sm:text-xs sm:text-center">{item.temoignage}</p>
                    </div>
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