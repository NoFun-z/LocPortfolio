import React from 'react';

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <section className="relative z-30 bottom-0 w-full pt-5 pb-5
             before:content-['']
             before:absolute before:-z-10 before:left-0 before:w-full before:h-full before:bg-slate-800
             md:before:backdrop-blur-sm md:before:bg-slate-800/40 lg:before:bg-slate-800/20
              flex flex-col justify-center items-center text-gray-300">
                <p className='font-mono pb-3'>LocPham-NextJs-Portfolio&copy; 2023</p>
                <a className="font-mono p-3 bg-slate-700 rounded hover:bg-slate-300
                 hover:text-zinc-900 hover:font-bold"
                    href="mailto:hoangloc1511@gmail.com?subject=&body=Hi%20Loc">Say Hi!</a>
            </section>
        </>
    );
}
