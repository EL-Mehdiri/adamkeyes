import React from 'react'

const Lang = () => {
    return (
        <section className='grid grid-cols-3 gap-10'>
            <Cards title='HTML' desc='4 Years Experience' />
            <Cards title='CSS' desc='4 Years Experience' />
            <Cards title='Javascript' desc='4 Years Experience' />
            <Cards title='Accessibility' desc='4 Years Experience' />
            <Cards title='React' desc='3 Years Experience' />
            <Cards title='Sass' desc='3 Years Experience' />


        </section>
    )
}

export default Lang



const Cards = ({ title, desc }) => {
    return (
        <div>
            <h1 className='text-[48px] font-bold pb-4 '>{title}</h1>
            <p className='text-[18px] font-medium text-quaternary '>{desc}</p>
        </div>
    )
}