'use client'

import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import LogoAutoCrea from "../../assets/images/logo-autocrea-20-ans.png"

function Navbar({menuOpened, onLinkClick} :NavbarProps ){
    const [clickOnLink, setClickOnLink] = useState(menuOpened);
    const menuOpen = (clickOnLink ? "" : "hidden");
    const bgMenuOpen = (clickOnLink ? "linear-gradient(to top, #404040 0%, black 100%)" : ""  );
    const handleLinkClick = () => {
        setClickOnLink(false);
        onLinkClick({ clickOnLink: false });
    };
    useEffect(() => {
        setClickOnLink(menuOpened)
        if(menuOpened){
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [menuOpened])
    return (
        <>
            <AnimatePresence>
                {menuOpened && <motion.nav 
                    style={{background: `${bgMenuOpen}`}} 
                    className={`md:${menuOpen} sm:${menuOpen} gap-10 text-4xl flex flex-col top-0 left-0 fixed justify-center items-center top-0 left-0 w-full h-[100vh] z-[9] xl:hidden lg:hidden`}
                    initial={{translateX: "100%"}}
                    animate={{translateX: "0%", transition:{duration: 0.5, ease: "easeInOut"}}}
                    exit={{translateX:"100%", transition:{duration: 0.5, ease: "easeInOut"}}}
                    >
                     <div className='w-2/12 h-[100px] md:h-[50px] sm:h-[30px] flex items-center justify-center pt-4'>
                        <Link className='hover:scale-110' href={"/"} onClick={handleLinkClick} aria-label="Link to top">
                            <Image src={LogoAutoCrea} alt='Logo AutoCrea' width={250} height={100}/>
                        </Link>
                    </div>
                    <Link className='hover:scale-110' href="#about" onClick={handleLinkClick} aria-label="Link to section About">SOCIÉTÉ</Link>
                    <Link className='hover:scale-110' href="#skills" onClick={handleLinkClick} aria-label="Link to section Skills">SAVOIR-FAIRE</Link>
                    <Link className='hover:scale-110' href="#portfolio" onClick={handleLinkClick} aria-label="Link to section Portfolio">SUPPORTS DE COMMUNICATION</Link>
                    <Link className='hover:scale-110' href="#contact" onClick={handleLinkClick} aria-label="Link to section Contact">RECRUTEMENT</Link>
                </motion.nav>
                }
            </AnimatePresence>
            <nav style={{background: `${bgMenuOpen}`}} className={`flex gap-6 text-xs xl:mr-8 lg:mr-8 sm:hidden md:hidden z-[9] text-black`}>
                <Link className='hover:underline' href="#about" aria-label="Link to section About">SOCIÉTÉ</Link>
                <Link className='hover:underline' href="#skills" aria-label="Link to section Skills">SAVOIR-FAIRE</Link>
                <Link className='hover:underline' href="#portfolio" aria-label="Link to section Portfolio">SUPPORTS DE COMMUNICATION</Link>
                <Link className='hover:underline' href="#contact" aria-label="Link to section Contact">RECRUTEMENT</Link>
                <Link className='hover:underline' href="#contact" aria-label="Link to section Contact">RÉFÉRENCES</Link>
                <Link className='hover:underline' href="#contact" aria-label="Link to section Contact">PRESSE</Link>
                <Link className='hover:underline' href="#contact" aria-label="Link to section Contact">CONTACT</Link>
            </nav>
        </>
    )
}

type NavbarProps = {
    menuOpened: boolean;
    onLinkClick: any;
}

export default Navbar;