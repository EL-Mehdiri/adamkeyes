'use client'
import { useFormik } from "formik"
import { useState } from "react"
import Schema from "@/schemas"
import Image from "next/image"
const Forms = () => {
    const onSubmit = () => {
        console.log('submitted', values)
    }
    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Schema,
        onSubmit,


    })
    console.log(errors)
    return (
        <form onSubmit={handleSubmit} className='py-10 ' >
            <div className='flex flex-col'>
                <div className={`w-full relative border-b ${errors && 'border-[#FF6F5B]'}`}>
                    <input type="text" placeholder='NAME' className={`py-5 px-4 w-full bg-inherit   outline-none`}
                        // value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    <Image className=" right-0 top-[30%] absolute" src={'/assest/images/Group 20.svg'} height={24} width={24} />
                </div>
                {/* {errors.name && <p className="text-[#FF6F5B]   text-[12px] ">Sorry, invalid format here</p>} */}

                <div className={`w-full relative border-b ${errors && 'border-[#FF6F5B]'}`}>
                    <input type="email" placeholder='NAME' className={`py-5 px-4 w-full bg-inherit   outline-none`}
                        value={values.email}
                        onChange={handleChange}

                    />
                    <Image className=" right-0 top-[30%] absolute" src={'/assest/images/Group 20.svg'} height={24} width={24} />
                </div>
                {errors.email && <p className="text-[#FF6F5B]   text-[12px] ">Sorry, invalid format here</p>}

                <div className={`w-full relative border-b ${errors && 'border-[#FF6F5B]'}`}>
                    <input type="text" placeholder='NAME' className={`py-5 px-4 w-full bg-inherit   outline-none`}
                        value={values.message}
                        onChange={handleChange}

                    />
                    <Image className=" right-0 top-[30%] absolute" src={'/assest/images/Group 20.svg'} height={24} width={24} />
                </div>
                {errors.message && <p className="text-[#FF6F5B]   text-[12px] ">Sorry, invalid format here</p>}

            </div>
            <div className='pt-6 relative  '>
                <button className='hover:text-secondary right-0 absolute  text-white font-bold w-fit text-[16px] border-b-[2px] pb-4 border-secondary'>
                    SEND MESSAGE
                </button>
            </div>
        </form>
    )
}

export default Forms