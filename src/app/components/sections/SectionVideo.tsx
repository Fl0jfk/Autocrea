"use client"

import YouTube from 'react-youtube';
import React, { useEffect, useState } from 'react';

export default function SectionVideo (){
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        if (typeof window !== 'undefined') {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        }
    }, []);
  const onError = (error:any) => {
    console.error('YouTube Player Error:', error);
  };
  const opts = {
    width: '480',
    height: '270',
  };
  if (typeof window !== 'undefined' && windowWidth <= 480) {
    opts.width = '350';
    opts.height = '220';
  }

    return (
        <section className="bg-gray-100 flex p-24 items-center justify-center w-full sm:flex-col sm:p-12 sm:gap-12">
            <div className="flex flex-col w-1/2 items-center sm:w-full">
                <h2 className="text-green-500 uppercase mb-12 text-xs">Fabrication étui à baguette publicitaire</h2>
                <YouTube videoId={"ugvXdmknw44"} onError={onError} opts={opts}/>
            </div>
            <div className="flex flex-col w-1/2 items-center sm:w-full">
                <h2 className="text-green-500 uppercase mb-12 text-xs">Spot publicitaire BFMTV</h2>
                <YouTube videoId={"o9VRW3GwZtc"} onError={onError} opts={opts}/>
            </div>
        </section>
    )
}