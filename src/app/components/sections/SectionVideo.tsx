"use client"

import { useEffect } from 'react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (id: string, options: any) => any;
    };
  }
}

export default function SectionVideo() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.body.appendChild(script);
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtubePlayer1', {
        videoId: 'ugvXdmknw44',
        events: { onError: onError}
      });
      new window.YT.Player('youtubePlayer2', {
        videoId: 'o9VRW3GwZtc',
        events: { onError: onError}
      });
    };
  }, []);
  const onError = (event:any) => {
    console.error('YouTube Player Error:', event);
  };
  return (
    <section className="bg-gray-100 flex p-24 gap-8 items-center justify-center w-full sm:flex-col sm:p-12 sm:gap-12">
      <div className="flex flex-col w-1/2 items-center sm:w-full">
        <h2 className="text-green-500 uppercase mb-12 text-xs">Fabrication étui à baguette publicitaire</h2>
        <div id="youtubePlayer1" className='w-[400px] h-[250px] sm:w-[300px] sm:h-[200px]'></div>
      </div>
      <div className="flex flex-col w-1/2 items-center sm:w-full">
        <h2 className="text-green-500 uppercase mb-12 text-xs">Spot publicitaire BFMTV</h2>
        <div id="youtubePlayer2" className='w-[400px] h-[250px] sm:w-[300px] sm:h-[200px]'></div>
      </div>
    </section>
  );
}
