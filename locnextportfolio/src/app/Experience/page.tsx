import React from 'react'
import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Experience() {
  return (
    <div className="flex flex-col items-center justify-between">
      <section
        className="mb-40 pt-12 w-full flex flex-col-reverse items-center justify-between gap-36 py-6 md:flex-row">
        <div className='flex flex-col gap-8 text-center md:text-left'>
          <p className='text-lg md:text-xl'>I am a programmer specializing in building
            full-stack applications utilizing modern front-end JavaScript frameworks such as React,
            Vue.js, Angular, jQuery UI, along with other frameworks like Blazor and MVC. My expertise extends
            to setting up databases with SQL Server, programming functional server-side elements with REST APIs,
            C#, and integrating payment services using platforms like Stripe</p>
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src="/Images/Loc-Logo.png"
            alt="avatar"
            width={350}
            height={350}
            className="object-cover rounded-full border-black border-4"
          />
        </div>
      </section>
      <hr className="mx-auto mb-12 h-1 w-1/2 bg-gradient-to-br from-indigo-500 ..." />
      <section
        className="mb-40 pt-20 text-center">
        <p className='text-lg md:text-2xl font-bold text-sky-300'>Technologies & Tools I use</p>
        <div className='pt-16 text-lg md:text-xl flex flex-wrap items-center justify-center gap-6'>
          <a href='https://learn.microsoft.com/en-us/dotnet/csharp/' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/C-sharp.png" alt='C-sharp' width={70} height={70} />
          </a>
          <a href='https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/Blazor.png" alt='Blazor' width={70} height={70} />
          </a>
          <a href='https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/ASP-NET.png" alt='ASP.NET Core' width={70} height={70} />
          </a>
          <a href='https://powerbi.microsoft.com/en-ca/' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/PowerBI.png" alt='Microsoft PowerBi' width={70} height={70} />
          </a>
        </div>
      </section>
      <hr className="mx-auto mb-12 h-1 w-1/2 bg-gradient-to-br from-indigo-500 ..." />
    </div>
  )
}

export default Experience