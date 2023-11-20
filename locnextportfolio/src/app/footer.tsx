import React from 'react';

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <section className="relative z-30 bottom-0 w-full pt-5 pb-8
             bg-slate-800 flex flex-col justify-center items-center">
                <p className='pb-3'>LocPham-NextJs-Portfolio&copy; 2023</p>
                <a className="p-3 bg-slate-700 rounded hover:bg-slate-300
                 hover:text-zinc-900 hover:font-bold"
                    href="mailto:hoangloc1511@gmail.com?subject=Hi%20Loc&body=My%20message">Say Hi!</a>
            </section>
        </>
    );
}
