import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
      <section
        className="mb-40 pt-12 w-full flex flex-col-reverse items-center justify-between gap-36 py-6 md:flex-row">
        <div className='flex flex-col gap-8 text-center md:text-left'>
          <p className='font-bold text-lg md:text-xl lg:text-3xl'>My name is Loc Pham</p>
          <p className='text-green-600 font-medium text-base md:text-lg lg:text-xl'>A passionate computer programmer</p>
          <div className="flex gap-6 justify-center md:justify-start">
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
          <button className="p-2 text-lg md:w-40 md:p-4 rounded-full hover:text-gray-300 hover:from-indigo-600
           hover:to-slate-600 backdrop-blur-md bg-gradient-to-br from-indigo-600 to-purple-900
            border-slate-500 md:text-xl font-bold">
            Resume
          </button>
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
        <p className='text-lg md:text-2xl font-bold text-sky-300'>About me</p>
        <p className='pt-16 text-lg md:text-xl'>I am a programmer specializing in building
          full-stack applications utilizing modern front-end JavaScript frameworks such as React,
          Vue.js, Angular, jQuery UI, along with other frameworks like Blazor and MVC. My expertise extends
          to setting up databases with SQL Server, programming functional server-side elements with REST APIs,
          C#, and integrating payment services using platforms like Stripe</p>

        <p className='pt-8 text-lg md:text-xl'>My commitment to promoting creativity is demonstrated by my
          constant exploration of modern technologies and approaches. I get satisfaction from coming up with
          cutting-edge methods that enable me to create ground-breaking solutions that meet changing consumer
          and market demands</p>
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
          <a href='https://www.microsoft.com/en-us/sql-server/sql-server-downloads' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/SQL.png" alt='SQL Server' width={70} height={70} />
          </a>
          <a href='https://www.mongodb.com/cloud/atlas/register' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/MongoDB.png" alt='MongoDB' width={70} height={70} />
          </a>
          <a href='https://www.python.org/' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/Python.png" alt='Python' width={70} height={70} />
          </a>
          <a href='https://developer.android.com/modern-android-development' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/Android-Studio.png" alt='Android Studio Java' width={70} height={70} />
          </a>
          <a href='https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/HTML.png" alt='HTML 5' width={70} height={70} />
          </a>
          <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/CSS.png" alt='CSS 3' width={70} height={70} />
          </a>
          <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/JS.png" alt='Javascript' width={70} height={70} />
          </a>
          <a href='https://api.jqueryui.com/' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/JqueryUI.png" alt='JqueryUI' width={70} height={70} />
          </a>
          <a href='https://angular.io/docs' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/Angular.png" alt='AngularJS' width={70} height={70} />
          </a>
          <a href='https://legacy.reactjs.org/docs/getting-started.html' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/React.png" alt='ReactJS' width={70} height={70} />
          </a>
          <a href='https://vuejs.org/guide/introduction.html' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/Vue.png" alt='VueJS' width={70} height={70} />
          </a>
          <a href='https://nextjs.org/docs' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/NextJs.png" alt='NextJS' width={70} height={70} />
          </a>
          <a href='https://tailwindcss.com/' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/Tailwind.png" alt='Tailwind CSS' width={70} height={70} />
          </a>
          <a href='https://wordpress.org/documentation/' target="_blank" rel="noopener noreferrer" className='relative group'>
            <Image className='hover:cursor-pointer filter-none hover:grayscale transition-filter'
              src="/Images/Technologies/Wordpress.png" alt='Wordpress' width={70} height={70} />
          </a>
        </div>
      </section>
    </div>
  )
}
