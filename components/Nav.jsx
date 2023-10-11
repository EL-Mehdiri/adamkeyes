import React from 'react'
import Image from 'next/image'

const Nav = () => {
    return (
        <header className='flex flex-col text-center md:flex-row lg:flex-row  justify-between container items-center py-8 pr-8  z-10 relative'>
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
        </header>
    )
}

export default Nav