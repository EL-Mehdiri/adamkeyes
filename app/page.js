import { Intro, Lang, Nav } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='container relative text-white space-y-20'>
      <Nav />
      <Intro />
      <hr />
      <Lang />
    </main>
  )
}
