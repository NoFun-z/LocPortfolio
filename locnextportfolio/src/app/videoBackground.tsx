import React from 'react'

export default function VideoBackground() {
    return (
        <div className="hidden lg:block fixed inset-0 w-full h-full overflow-hidden" style={{zIndex: -1}}>
            <video className='object-cover w-full h-full opacity-80' autoPlay muted loop>
                <source src="/Videos/video-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
