import React from 'react'
import Image from 'next/image'

const Intro = () => {
    return (
        <section className='flex'>
            <div className=' space-y-16'>
                <h1 className='lg:text-[88px] font-bold leading-[88px]'>
                    Nice to meet you! <br />
                    I’m <span className='border-b-[6px] border-secondary'> Adam Keyes.</span>
                </h1>
                <p className=' font-medium leading-7 w-1/2 text-quaternary'>
                    Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
                </p>
                <button className='hover:text-secondary text-white font-medium text-[18px] border-b-[2px] pb-4 border-secondary'>
                    CONTACT ME
                </button>
            </div>
            <Image src={'/assest/images/image-profile-desktop.webp'} className=' absolute top-0  right-0 z-0' width={400} height={618} />
        </section>
    )
}

export default Intro