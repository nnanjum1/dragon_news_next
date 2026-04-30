"use client"
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const handleRegisterFunc = (data) => {
        console.log(data, "data")
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register your account</h2>
                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your name</legend>
                        <input type="text" className="input" placeholder="Type here your name" {...register("name", { required: "Name field is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input" placeholder="Type here photo url" {...register("photo", { required: "Photo url field is required" })} />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}

                        <legend className="fieldset-legend">Email address</legend>
                        <input type="email" className="input" placeholder="Type here email" {...register("email", { required: "Email field is required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" placeholder="Type here password" {...register("password", { required: "Passoword field is required" })} />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </fieldset>
                    <button className='btn bg-slate-800 text-white w-full'>Register</button>
                </form>
                <p className='mt-4'>Already have an account? <Link href={'/login'} className='text-blue-500'>Login</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage