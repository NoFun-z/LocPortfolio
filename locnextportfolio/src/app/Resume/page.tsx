'use client'

import { useRef, useEffect } from "react";
import LazyLoad from 'vanilla-lazyload';

export default function MyResume() {

  const resumeTitle = "LocPham Resume";
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy-iframe"
    });

    return () => {
      if (lazyLoadInstance) {
        lazyLoadInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="mt-10 flex flex-col items-center justify-center h-[710px]">
      <iframe
        ref={iframeRef}
        className="w-full h-full lazy-iframe"
        data-src="/Files/LocPham-Resume.pdf"
        title={resumeTitle}
        frameBorder="0"
        loading="lazy" // Set loading to lazy to prevent it from loading immediately
      />
    </div>
  );
};

