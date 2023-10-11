import React from 'react'
import Forms from './Forms'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className=' bg-tertiary text-white mt-20'>
            <div className=' container  space-y-20 px-5'>
                <div className=' grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2'>
                    <div className='py-10'>
                        <p className='text-[88px] font-bold '>Contact</p>
                        <p className='text-[18px] pt-10 font-medium leading-7 text-quaternary w-1/2'>
                            I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
                        </p>
                    </div>
                    <Forms />
                </div>
                <div className='flex justify-between  items-center py-10 border-t     '>
                    <h1 className='text-[32px] font-bold text-white'>adamkeyes</h1>
                    <nav className='flex gap-8'>
                        <a href="">
                            <Image src='/assest/images/icon-github.svg' width={24} height={24} />
                        </a>
                        <a href="">
                            <Image src='/assest/images/icon-frontend-mentor.svg' width={24} height={24} />
                        </a>
                        <a href="">
                            <Image src='/assest/images/icon-linkedin.svg' width={24} height={24} />
                        </a>
                        <a href="">
                            <Image src='/assest/images/icon-twitter.svg' width={24} height={24} />
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer