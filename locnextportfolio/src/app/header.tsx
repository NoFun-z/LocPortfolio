'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Footer from './footer'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import NavigationIcon from '@mui/icons-material/Navigation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import VideoBackground from './videoBackground';
import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';

interface ActiveLinkProps {
    href: string,
    addStyle: string,
    isMobile: boolean,
    children: React.ReactNode
}

export default function Header(props: any) {
    const [menuState, setMenuState] = useState({ isOpen: false, isClosing: false });
    const [scrollY, setScrollY] = useState<number>(0);
    const pathName = usePathname();
    const scrollPositionRef = useRef<number | null>(null);
    const theme = createTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

    const logoStyle = {
        width: '60%',
        height: 'auto'
    }

    // Adjust text size based on screen size
    if (isLargeScreen) {
        logoStyle.width = '80%';
    } else {
        logoStyle.width = '55%';
    }

    const ActiveLink = ({ href, addStyle, isMobile, children }: ActiveLinkProps) => {

        const isActive = pathName === href;

        return (
            <Link onClick={() => {
                isMobile && ToggleMenuHandler();
                window.scrollTo({ top: 0, behavior: 'instant' });
            }} href={href} passHref className={`${isActive ? 'hover:opacity-80' : ''}
             hover:bg-slate-300 hover:rounded-sm hover:py-6 md:hover:py-2 hover:text-zinc-900 text-gray-300
             ${addStyle} ${isActive ? 'text-zinc-900 rounded-sm bg-slate-300 py-6 md:py-2' : ''}`}
                style={{ fontFamily: 'monospace', fontWeight: isActive ? '900' : 'normal' }}
            >
                {children}
            </Link>
        );
    };

    const VerticalActiveLink = ({ href, addStyle, children }: ActiveLinkProps) => {

        const isActive = pathName === href;

        return (
            <Link onClick={() => {
                window.scrollTo(0, 0);
            }} href={href} passHref className={`${isActive ?
                'hover:opacity-80 text-zinc-800 rounded-full bg-slate-300' : ''}
             hover:bg-slate-300 rounded-full hover:text-zinc-800 text-gray-300
             ${addStyle}`}>
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

        const handleScroll = () => {
            setScrollY(window.scrollY);
            scrollPositionRef.current = window.scrollY;
        };
        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Detach the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = `absolute z-40 bg-slate-800 md:bg-transparent ${scrollY > 120 ? 'scrolled md:hidden' : ''}
     ${scrollY > 90 ? 'scrolledY md:hidden' : ''} mx-auto flex w-full items-center justify-between py-4 px-4 sm:px-10
      md:px-24 lg:px-36 xl:px-60`;

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
        <ThemeProvider theme={theme}>
            <body className="overflow-x-hidden bg-gradient-to-br from-zinc-900 to-slate-800">
                {/* video background */}
                <VideoBackground />
                {/* nav bar */}
                <section className={navbarClasses}>
                    <Link href="/">
                        <Image
                            src='/Images/Loc-Logo.png'
                            alt='logo'
                            width={70}
                            height={70}
                            className='cursor-pointer'
                            style={logoStyle}
                            priority
                        />
                    </Link>
                    <div>
                        {/* burger icon */}
                        <button id='burgerbtn' onClick={ToggleMenuHandler} className={`relative h-8 w-8 
                        cursor-pointer text-3xl md:hidden ${menuState.isOpen ? 'toggle-btn' : ''}`}>
                            <div
                                className="absolute top-4 -mt-0.5 h-1 w-6 rounded bg-gray-300 transition-all
                                 duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 
                                 before:-translate-y-3 before:rounded before:bg-gray-300 before:transition-all
                                 before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 
                                 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-gray-300 
                                 after:transition-all after:duration-500 after:content-['']">
                            </div>
                        </button>
                        {/* nav links */}
                        <nav className="hidden space-x-4 text-2xl md:block xl:pr-2" aria-label="main">
                            <ActiveLink href="/" addStyle="px-3" isMobile={false}>
                                Bio
                            </ActiveLink>
                            <ActiveLink href="/Experience" addStyle="px-3" isMobile={false}>
                                Experience
                            </ActiveLink>
                            <ActiveLink href="/Work" addStyle="px-3" isMobile={false}>
                                Work
                            </ActiveLink>
                        </nav>
                    </div>
                </section>
                <section className={`${scrollY > 100 ? 'hidden md:flex animate-open-vertical-navbar' : 'hidden'} 
                flex-col fixed z-40 top-1/2 transform -translate-y-1/2 left-5 w-18 h-30 gap-7 
                before:content-[''] before:absolute before:-z-10 before:left-0 before:w-full before:h-full
                before:rounded-full md:before:backdrop-blur-sm lg:before:backdrop-blur-none md:before:bg-slate-600/30
                 lg:before:bg-slate-700/20 p-3 py-8 justify-center text-center`}>
                    <VerticalActiveLink href="/" addStyle="p-2" isMobile={false}>
                        <AccountCircleIcon style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }} />
                    </VerticalActiveLink>
                    <VerticalActiveLink href="/Experience" addStyle="p-2" isMobile={false}>
                        <SchoolIcon style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }} />
                    </VerticalActiveLink>
                    <VerticalActiveLink href="/Work" addStyle="p-2" isMobile={false}>
                        <WorkspacesIcon style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }} />
                    </VerticalActiveLink>
                </section>
                <section className={`${scrollY > 100 ? 'hidden md:flex animate-open-vertical-contact' : 'hidden'} 
                flex-col fixed z-40 top-1/2 transform -translate-y-1/2 right-5 w-18 h-30 gap-7 
                before:content-[''] before:absolute before:-z-10 before:left-0 before:w-full before:h-full
                before:rounded-full md:before:backdrop-blur-sm lg:before:backdrop-blur-none md:before:bg-slate-600/30
                 lg:before:bg-slate-700/20 p-3 py-8 justify-center text-gray-300
                text-center`}>
                    <a href='https://github.com/NoFun-z' target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className='hover:cursor-pointer hover:opacity-70'
                            style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }} />
                    </a>
                    <a href='https://www.linkedin.com/in/loc-pham-5039b7220/' target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className='hover:cursor-pointer hover:opacity-70'
                            style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }} />
                    </a>
                    <a href='https://twitter.com/NoFun51634720' target="_blank" rel="noopener noreferrer">
                        <TwitterIcon className='hover:cursor-pointer hover:opacity-70'
                            style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }} />
                    </a>
                    <a href='https://www.facebook.com/hoangloc.pham.921/' target="_blank" rel="noopener noreferrer">
                        <FacebookIcon className='hover:cursor-pointer hover:opacity-70'
                            style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }} />
                    </a>
                </section>
                <section className={`${scrollY > 300 && !menuState.isOpen ? 'flex animate-open-back-to-top' :
                    `hidden md:${scrollY > 300 ? 'flex animate-open-back-to-top' : 'hidden'}`}
                fixed z-40 bottom-10 w-18 h-18 before:content-[''] before:absolute before:-z-10 before:left-0 before:backdrop-blur-md
                before:top-1 before:w-full before:h-full before:rounded-full md:before:backdrop-blur-none
                 before:bg-slate-600/30 lg:before:bg-slate-700/20 p-4 justify-center text-center 
                 hover:cursor-pointer hover:text-zinc-900
                hover:before:bg-slate-300 text-gray-300`} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    <NavigationIcon className='text-3xl' />
                </section>
                {/* nav menu for mobile view */}
                <section id='mobile-menu' className={`font-mono fixed z-30 pt-[74.78px] justify-center ${menuState.isOpen
                    ? 'flex animate-open-menu' : menuState.isClosing ? 'flex animate-close-menu' : 'hidden'}
                     md:hidden w-full origin-top flex-col bg-slate-800 text-2xl px-0`}
                    style={{ fontFamily: 'monospace' }}>
                    <nav className="flex flex-col space-y-2 items-center text-lg sm:text-xl py-8" aria-label="mobile">
                        <ActiveLink href="/" addStyle="w-full py-6 text-center" isMobile={true}>
                            Bio
                        </ActiveLink>
                        <ActiveLink href="/Experience" addStyle="w-full py-6 text-center" isMobile={true}>
                            Experience
                        </ActiveLink>
                        <ActiveLink href="/Work" addStyle="w-full py-6 text-center" isMobile={true}>
                            Work
                        </ActiveLink>
                    </nav>
                </section>
                {/* Overlay div */}
                <div id='overlay-div'
                    className={`fixed min-h-screen z-20 translate-y-40 inset-0 origin-bottom bg-zinc-900
                    opacity-90 ${menuState.isOpen ? 'flex animate-open-menu-layout' : menuState.isClosing ?
                            'flex animate-close-menu-layout' : 'hidden'} md:hidden`}
                    onClick={ToggleMenuHandler} // Close the mobile menu when clicking on the overlay
                ></div>
                {props.children}
                <Footer />
            </body>
        </ThemeProvider>
    );
}