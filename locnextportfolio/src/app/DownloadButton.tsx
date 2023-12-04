'use client';
import React from 'react'

export default function DownloadButton() {

    const handleDownload = () => {
        const pdfUrl = '/Files/LocPham-Resume.pdf';
        const pdfName = 'LocPham-Resume.pdf';
        downloadPdf(pdfUrl, pdfName);
    }

    const downloadPdf = (url: string, name: string) => {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = name;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };

    return (
        <button className="font-mono text-gray-300 p-2 md:p-4 text-lg lg:text-xl lg:w-40 rounded-full hover:text-gray-300 hover:from-indigo-600
        hover:to-slate-600 backdrop-blur-md bg-gradient-to-br from-indigo-600 to-purple-900
         border-slate-500 font-bold" onClick={handleDownload} data-download="LocPham-Resume">
            Resume
        </button>
    )
}
