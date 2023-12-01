'use client'

import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Carousel({ children: slides }: any) {
    console.log(slides);
    const [current, setCurrent] = useState(0)

    const prev = () => {
        setCurrent((curr) => (curr === 0 ? slides?.length - 1 : curr - 1));
    };

    const next = () => {
        setCurrent((curr) => (curr === slides?.length - 1 ? 0 : curr + 1));
    };

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides}
            </div>
            <div className="absolute inset-0 bottom-40 flex items-center justify-between">
                <button
                    onClick={prev}
                    className="p-3 py-2 translate-y-20 text-zinc-900 before:content-['']
                    before:absolute before:rounded-full before:-z-10 before:left-0 before:top-0 before:w-full
                     before:h-full before:backdrop-blur-sm before:bg-slate-300/40
                    hover:before:bg-slate-600"
                    aria-label="Previous Slide"
                >
                    <FontAwesomeIcon icon={faLeftLong} className='text-lg' />
                </button>

                <button
                    onClick={next}
                    className="p-3 py-2 translate-y-20 text-zinc-900 before:content-['']
                    before:absolute before:rounded-full before:-z-10 before:left-0 before:top-0 before:w-full
                     before:h-full before:backdrop-blur-sm before:bg-slate-300/40
                    hover:before:bg-slate-600"
                    aria-label="Next Slide"
                >
                    <FontAwesomeIcon icon={faRightLong} className='text-lg' />
                </button>

            </div>
        </div>
    )
}
