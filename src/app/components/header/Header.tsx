"use client"

import Navbar from '../navbar/Navbar';
import { useState } from 'react';
import Image from 'next/image';
import CrossButton from '../buttons/CrossButton';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import LogoAutoCrea from "../../assets/images/logo-autocrea-20-ans.png"

function Header(){
    const { scrollY } = useScroll();
    const [menuOpened, setMenuOpened] = useState(false);
    const [hidden, setHidden ] = useState(false);
    const opacityMenu = (!menuOpened? "opacity-80" : "")
    const handleClick = () => {
        setMenuOpened(!menuOpened);
    };
   useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if(latest > previous && latest > 150 ){
        setHidden(true);
    } else {
        setHidden(false);
    }
    });
    const handleLinkClick = ({ clickOnLink } : handleLinkClickProps) => {
        setMenuOpened(clickOnLink);
    };
    return (
        <motion.header 
            variants={{ visible: { y: 0 }, hidden: { y: "-100%" }}} 
            animate={hidden ? "hidden" : "visible"}
            transition={{duration: 0.35, ease: "easeInOut"}}
            className={`flex p-4 justify-between w-full fixed z-[12] md:mb-[100px] h-[100px] ${opacityMenu} self-center shadow-xl border-b bg-white`}>
                <div className='w-2/12 flex items-center sm:w-full sm:ml-8'>
                    <div className='w-[250px] h-[100px] flex items-center'>
                        <Image src={LogoAutoCrea} alt='Logo Auto Crea' sizes='80vw'/>
                    </div>
                </div>
                <div className='w-10/12 flex justify-end items-center sm:mt-[-5px]'>
                    <Navbar menuOpened={menuOpened} onLinkClick={handleLinkClick}/>
                    <div className='flex justify-end w-[40] items-center' onClick={() => handleClick()}>
                        <CrossButton menuOpened={menuOpened}/>
                    </div>
                </div>
        </motion.header>
    )
}

type handleLinkClickProps = {
    clickOnLink : boolean;
    onLinkClick: (clickOnLink: boolean) => void;
}

export default Header;