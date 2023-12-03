"use client"

import YouTube from 'react-youtube';

export default function SectionVideo (){
  const onError = (error:any) => {
    console.error('YouTube Player Error:', error);
  };
  const opts ={
    width: "480",
    height: "270"
  }
    return (
        <section className="bg-gray-100 flex p-24 items-center justify-center w-full">
            <div className="flex flex-col w-1/2 items-center">
                <h2 className="text-green-500 uppercase mb-12 text-xs">Fabrication étui à baguette publicitaire</h2>
                <YouTube videoId={"ugvXdmknw44"} onError={onError} opts={opts}/>
            </div>
            <div className="flex flex-col w-1/2 items-center">
                <h2 className="text-green-500 uppercase mb-12 text-xs">Spot publicitaire BFMTV</h2>
                <YouTube videoId={"o9VRW3GwZtc"} onError={onError} opts={opts}/>
            </div>
        </section>
    )
}