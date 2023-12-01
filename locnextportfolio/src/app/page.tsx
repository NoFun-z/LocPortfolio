import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import useImages from '@/hooks/useImages';
import { Metadata } from 'next'
 
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
          <button className="font-mono text-gray-300 p-2 md:p-4 text-lg lg:text-xl lg:w-40 rounded-full hover:text-gray-300 hover:from-indigo-600
           hover:to-slate-600 backdrop-blur-md bg-gradient-to-br from-indigo-600 to-purple-900
            border-slate-500 font-bold">
            Resume
          </button>
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
        <p className='text-xl md:text-2xl lg:text-3xl font-bold' style={{color: '#838fc9'}}>About me</p>
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
        <p className='text-xl md:text-2xl lg:text-3xl  font-bold' style={{color: '#838fc9'}}>Technologies & Tools I use</p>
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
