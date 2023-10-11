import { Footer, Intro, Lang, Nav, Projects } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='container relative text-white space-y-40 px-5'>
      <Nav />
      <Intro />
      <hr />
      <Lang />
      <Projects />

    </main>
  )
}
