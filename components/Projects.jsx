import React from 'react'
import Image from 'next/image'

const Projects = () => {
    return (
        <section className='container'>
            <div className='flex justify-between items-center py-10'>
                <p className=' lg:text-[72px] md:text-[72px] text-[40px]'>Projects</p>
                <button className='hover:text-secondary text-white font-bold w-fit text-[16px] border-b-[2px] pb-4 border-secondary'>
                    CONTACT ME
                </button>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-20'>
                <Project src='/assest/images/thumbnail-project-1-large.webp' title='DESIGN PORTFOLIO' text1='HTML' text2='CSS' />
                <Project src='/assest/images/thumbnail-project-2-large.webp' title='E-LEARNING LANDING PAGE' text1='HTML' text2='CSS' />
                <Project src='/assest/images/thumbnail-project-3-large.webp' title='TODO WEB APP' text1='HTML' text2='CSS' text3='JAVASCRIPT' />
                <Project src='/assest/images/thumbnail-project-4-large.webp' title='ENTERTAINMENT WEB APP' text1='HTML' text2='CSS' text3='JAVASCRIPT' />
                <Project src='/assest/images/thumbnail-project-5-large.webp' title='MEMORY GAME' text1='HTML' text2='CSS' text3='JAVASCRIPT' />
                <Project src='/assest/images/thumbnail-project-6-large.webp' title='ART GALLERY SHOWCASE' text1='HTML' text2='CSS' text3='JAVASCRIPT' />
            </div>
        </section>
    )
}

export default Projects


const Project = ({ src, title, text1, text2, text3 }) => {
    return (
        <div className=''>
            <div className='relative'>
                <div className='grid z-30 place-content-center text-center gap-5 opacity-0 hover:opacity-100  absolute w-full h-full bg-[#00000087]'>
                    <button className='hover:text-secondary w-fit text-white font-bold text-[16px] border-b-[2px] pb-4 border-secondary'>
                        VIEW PROJECT
                    </button>
                    <button className='hover:text-secondary text-white font-bold w-fit text-[16px] border-b-[2px] pb-4 border-secondary'>
                        VIEW CODE
                    </button>
                </div>
                <div className=' relative w-full h-[345px] lg:h-[540]'>
                    <Image src={src} fill className=' object-cover absolute' />
                </div>
            </div>

            <div className='pt-6 space-y-5'>
                <p className='text-[24px] font-bold'>{title}</p>
                <ul className='text-[18px] font-medium text-quaternary flex gap-8'>
                    <li>{text1}</li>
                    <li>{text2}</li>
                    <li>{text3}</li>
                </ul>
                <div className='flex gap-6 lg:hidden md:hidden'>
                    <button className='hover:text-secondary w-fit text-white font-bold text-[16px] border-b-[2px] pb-4 border-secondary'>
                        VIEW PROJECT
                    </button>
                    <button className='hover:text-secondary text-white font-bold w-fit text-[16px] border-b-[2px] pb-4 border-secondary'>
                        VIEW CODE
                    </button>
                </div>
            </div>
        </div>
    )
}