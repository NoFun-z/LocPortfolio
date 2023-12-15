import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <section className="relative z-30 bottom-0 w-full pt-5 pb-5
             before:content-['']
             before:absolute before:-z-10 before:left-0 before:w-full before:h-full before:bg-slate-800
             md:before:backdrop-blur-sm md:before:bg-slate-800/40 lg:before:bg-slate-800/20
              flex flex-col justify-center items-center text-gray-300">
                <p className='font-mono text-base md:text-lg xl:text-xl pb-3'>LocPham-NextJs-Portfolio&copy; 2023</p>
                <div className="text-gray-300 flex md:hidden gap-6 justify-center lg:justify-start mt-3 mb-8">
                    <a href='https://github.com/NoFun-z' target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className='text-3xl md:text-4xl hover:cursor-pointer hover:text-slate-500' />
                    </a>
                    <a href='https://www.linkedin.com/in/loc-pham-5039b7220/' target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className='text-3xl md:text-4xl hover:cursor-pointer hover:text-slate-500' />
                    </a>
                    <a href='https://twitter.com/NoFun51634720' target="_blank" rel="noopener noreferrer">
                        <TwitterIcon className='text-3xl md:text-4xl hover:cursor-pointer hover:text-slate-500' />
                    </a>
                    <a href='https://www.facebook.com/hoangloc.pham.921/' target="_blank" rel="noopener noreferrer">
                        <FacebookIcon className='text-3xl md:text-4xl hover:cursor-pointer hover:text-slate-500' />
                    </a>
                </div>
                <a className="font-mono p-3 bg-slate-700 rounded hover:bg-slate-300
                 hover:text-zinc-900 hover:font-bold text-base  md:text-lg xl:text-xl"
                    href="mailto:hoangloc1511@gmail.com?subject=&body=Hi%20Loc">Say Hi!</a>
            </section>
        </>
    );
}
