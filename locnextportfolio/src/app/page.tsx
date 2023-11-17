import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
      <section
        className="mb-8 pt-20 flex flex-col-reverse space-x-20 items-center justify-center gap-8 p-6 sm:flex-row">
        <div className='flex flex-col space-y-3 p-2 w-full'>
          <p>My name is Loc Pham</p>
          <p className='text-green-600'>A passionate developer</p>
          <GitHubIcon/>
        </div>
        <img className="w-1/2" src="./img/rocketdab.png" alt="Rocket Dab" />
      </section>
    </div>
  )
}
