import Image from 'next/image'
import useImages from '@/hooks/useImages';
import { Metadata } from 'next'
import DownloadButton from './DownloadButton';

export const metadata: Metadata = {
  title: 'My NextJS Portfolio - Loc Pham Bio',
  description: 'Welcome to my Next.js portfolio website !!!',
}

export default function Home() {
  const { techImages } = useImages();

  return (
    <div className="flex flex-col items-center justify-between">
      <section
        className="mb-40 pt-20 w-full flex flex-col-reverse items-center justify-between gap-36 py-6 lg:flex-row">
        <div className='flex flex-col gap-8 text-center lg:text-left'>
          <p className='text-gray-300 font-bold text-lg md:text-2xl xl:text-4xl'>MY NAME IS LOC PHAM</p>
          <p className='font-mono text-green-600 font-medium text-base md:text-lg xl:text-xl'>A passionate computer programmer</p>
          <div className="text-gray-300 flex gap-6 justify-center lg:justify-start">
            <a href='https://www.niagaracollege.ca/' target="_blank" rel="noopener noreferrer">
              <Image src="/Images/Home/NC-icon.png"
                alt="avatar"
                width={80}
                height={80} />
            </a>
            <a href='https://www.microsoft.com/en-us/microsoft-365/products-apps-services' target="_blank" rel="noopener noreferrer">
              <Image src="/Images/Home/microsoft-logo.jpg"
                alt="avatar"
                width={80}
                height={80} 
                style={{borderRadius: "50%"}} />
            </a>
            <a href='https://www.udemy.com/' target="_blank" rel="noopener noreferrer">
              <Image src="/Images/Home/Udemy-Emblem.png"
                alt="avatar"
                width={82}
                height={82}
                style={{borderRadius: "50%"}}/>
            </a>
          </div>
          <DownloadButton />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src="/Images/Canva-Avatar.png"
            alt="avatar"
            width={360}
            height={360}
            className='w-full'
          />
        </div>
      </section>
      <hr className="mx-auto mb-20 h-1 w-1/2 bg-gradient-to-br from-indigo-500 ..." />
      <section
        className="font-mono mb-40 pt-20 text-center">
        <p className='text-xl md:text-2xl lg:text-3xl font-bold' style={{ color: '#838fc9' }}>About me</p>
        <p className='text-gray-300 pt-20 text-base md:text-lg xl:text-xl'>I am a programmer specializing in building
          full-stack applications utilizing modern front-end JavaScript frameworks such as React,
          Vue.js, Angular, jQuery UI, along with other frameworks like Blazor and MVC. My expertise extends
          to setting up databases with SQL Server, programming functional server-side elements with REST APIs,
          C#, and integrating payment services using platforms like Stripe</p>

        <p className='text-gray-300 pt-8 text-base md:text-lg xl:text-xl'>My commitment to promoting creativity is demonstrated by my
          constant exploration of modern technologies and approaches. I get satisfaction from coming up with
          cutting-edge methods that enable me to create ground-breaking solutions that meet changing consumer
          and market demands</p>
      </section>
      <hr className="mx-auto mb-20 h-1 w-1/2 bg-gradient-to-br from-indigo-500 ..." />
      <section
        className="font-mono mb-32 pt-20 text-center">
        <p className='text-xl md:text-2xl lg:text-3xl  font-bold' style={{ color: '#838fc9' }}>Technologies & Tools I use</p>
        <div className='pt-20 text-lg md:text-xl flex flex-wrap items-center justify-center gap-6'>
          {techImages.map(ti => (
            <a key={ti.alt} href={ti.href} target="_blank" rel="noopener noreferrer" className='relative group'>
              <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
                src={ti.src} alt={ti.alt} width={60} height={60}
                style={{ width: 'auto', height: 'auto' }} />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
