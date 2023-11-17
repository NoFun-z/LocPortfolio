'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

interface ActiveLinkProps {
    href: string,
    addStyle: string,
    children: React.ReactNode
}

export default function Header(props: any) {
    const [menuState, setMenuState] = useState({ isOpen: false, isClosing: false });
    const [scrollY, setScrollY] = useState<number>(0);
    const pathName = usePathname();
    const scrollPositionRef = useRef<number | null>(null);

    const handleScroll = () => {
        setScrollY(window.scrollY);
        scrollPositionRef.current = window.scrollY;
    };

    const ActiveLink = ({ href, addStyle, children }: ActiveLinkProps) => {

        const isActive = pathName === href;

        return (
            <Link onClick={() => {
                ToggleMenuHandler();
                window.scrollTo(0, 0);
            }} href={href} passHref className={`${isActive ? 'hover:opacity-80' : ''}
             hover:bg-slate-300 hover:rounded-sm hover:py-6 md:hover:py-2 hover:text-zinc-900 
             ${addStyle} ${isActive ? 'text-zinc-900 rounded-sm bg-slate-300 font-bold py-6 md:py-2' : ''}`}>
                {children}
            </Link>
        );
    };

    const ToggleMenuHandler = () => {
        //document.body.classList.add('overflow-hidden');
        document.getElementById("burgerbtn")?.setAttribute("disabled", "");
        setMenuState((prev) => ({ isOpen: !prev.isOpen, isClosing: true }));
    };

    //Scroll navbar effect
    useEffect(() => {
        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Detach the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = `absolute bg-slate-800 md:bg-transparent ${scrollY > 120 ? 'scrolled' : ''}
     ${scrollY > 60 ? 'scrolledY' : ''} z-40 mx-auto flex w-full items-center justify-between p-4 lg:px-20`;

    // Add an event listener to handle animation end
    // Hide the menu when the animation ends
    useEffect(() => {
        const handleTransitionEnd = () => {
            const { isOpen } = menuState;
            document.getElementById("burgerbtn")?.removeAttribute("disabled");

            const mobileMenu = document.getElementById('mobile-menu');
            const overlayDiv = document.getElementById('overlay-div');

            if (!isOpen) {
                setMenuState((prev) => ({ ...prev, isClosing: false }));
                mobileMenu?.classList.add('hidden');
                overlayDiv?.classList.add('hidden');
            } else {
                mobileMenu?.classList.remove('hidden');
                overlayDiv?.classList.remove('hidden');
            }
        };

        document.addEventListener('animationend', handleTransitionEnd);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('animationend', handleTransitionEnd);
        };
    }, [menuState]);

    return (
        <html lang="en" className="sm:scroll-smooth">
            <body className=" overflow-x-hidden dark:bg-black dark:text-white">
                {/* nav bar */}
                <section className={navbarClasses}>
                    <Link href="/">
                        <Image
                            src='/Images/Loc-Logo.png'
                            alt='logo'
                            width={200}
                            height={200}
                            className='cursor-pointer'
                        />
                    </Link>
                    <div>
                        {/* burger icon */}
                        <button id='burgerbtn' onClick={ToggleMenuHandler} className={`relative h-8 w-8 cursor-pointer text-3xl md:hidden ${menuState.isOpen ? 'toggle-btn' : ''}`}>
                            <div
                                className="absolute top-4 -mt-0.5 h-1 w-6 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
                            </div>
                        </button>
                        {/* nav links */}
                        <nav className="hidden space-x-6 text-xl md:block md:pr-8 lg:pr-10 xl:pr-20" aria-label="main">
                            <ActiveLink href="/" addStyle="px-3">Bio</ActiveLink>
                            <ActiveLink href="/Experience" addStyle="px-3">Experience</ActiveLink>
                            <ActiveLink href="/Work" addStyle="px-3">Work</ActiveLink>
                        </nav>
                    </div>
                </section>
                {/* nav menu for mobile view */}
                <section id='mobile-menu' className={`fixed z-30 pt-[124.78px] justify-center ${menuState.isOpen ? 'flex animate-open-menu' : menuState.isClosing ? 'flex animate-close-menu' : 'hidden'} md:hidden w-full origin-top flex-col bg-slate-800 text-4xl px-0`}>
                    <nav className="flex flex-col space-y-2 items-center py-8" aria-label="mobile">
                        <ActiveLink href="/" addStyle="w-full py-6 text-center">Bio</ActiveLink>
                        <ActiveLink href="/Experience" addStyle="w-full py-6 text-center">Experience</ActiveLink>
                        <ActiveLink href="/Work" addStyle="w-full py-6 text-center">Work</ActiveLink>
                    </nav>
                </section>
                {/* Overlay div */}
                <div id='overlay-div'
                    className={`fixed min-h-screen z-20 translate-y-40 inset-0 origin-bottom bg-black opacity-50 ${menuState.isOpen ? 'flex animate-open-menu-layout' : menuState.isClosing ? 'flex animate-close-menu-layout' : 'hidden'} md:hidden`}
                    onClick={ToggleMenuHandler} // Close the mobile menu when clicking on the overlay
                ></div>
                {props.children}
            </body>
        </html>
    );
}