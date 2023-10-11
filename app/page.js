import { Footer, Intro, Lang, Nav, Projects } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' relative text-white  px-5'>
      <Nav />
      <div className=' relative'>
        <Intro />
        {/* <Image src={'/assest/images/pattern-rings.svg'} className=' absolute left-0 top-0' width={500} height={300} /> */}
      </div>
      <div className=' space-y-40'>
        <hr className='container ' />
        <Lang />
        <Projects />

      </div>
    </main>
  )
}
