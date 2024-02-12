'use client'

import { useRef, useEffect, useState } from "react";
import LazyLoad from 'vanilla-lazyload';
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function MyResume() {

  const iframeRef = useRef(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();


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
    <>
      <div ref={iframeRef} className="mt-10 bg-slate-700 flex flex-col items-center justify-center screen-minus-custom">

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl="/Files/LocPham-Resume.pdf" />
        </Worker>
      </div>
    </>
  )
};

