import React from 'react'
import Image from 'next/image'

const Projects = () => {
    return (
        <section>

        </section>
    )
}

export default Projects


const Project = () => {
    return (
        <div>
            <Image src={'/assest/images/thumbnail-project-1-large.webp'} />

            <div>
                <p>DESIGN PORTFOLIO</p>
                <ul className='text-[18px] font-medium text-quaternary flex gap-8'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                </ul>
            </div>
        </div>
    )
}