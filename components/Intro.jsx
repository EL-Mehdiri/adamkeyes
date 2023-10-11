import React from 'react'
import Image from 'next/image'

const Intro = () => {
    return (
        <section className='flex sm:flex-col md:flex-row lg:flex-row container pt-20  justify-between'>
            <div className=' lg:space-y-16 space-y-8 md:space-y-12 text-center md:text-left lg:text-left'>
                <h1 className='lg:text-[88px] md:text-[72px] text-[40px] font-bold lg:leading-[88px]'>
                    Nice to meet you! <br />
                    I’m <span className='border-b-[6px] border-secondary'> Adam Keyes.</span>
                </h1>
                <p className=' font-medium leading-7 lg:w-1/2 text-quaternary'>
                    Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
                </p>
                <button className='hover:text-secondary text-white font-medium text-[18px] border-b-[2px] pb-4 border-secondary'>
                    CONTACT ME
                </button>
            </div>
            <div className=' relative -top-[210px] hidden md:block lg:block z-0' >
                <Image src={'/assest/images/image-profile-desktop.webp'} width={500} height={618} />


            </div>
        </section>
    )
}

export default Intro