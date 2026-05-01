"use client"
import Image from 'next/image'
import React from 'react'
import userAvatar from '@/assets/user.png'
import Link from 'next/link'
import NavLink from './NavLink'
import { authClient } from '@/lib/auth-client'
const Navbar = () => {

    const { data: session, isPending } = authClient.useSession()
    console.log(session, "session")
    const user = session?.user
    console.log(user, "session-user")
    return (

        <div className='flex justify-between container mx-auto'>
            <div></div>
            <ul className='flex justify-between items-center gap-3 mt-6 text-gray-700'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>

            </ul>
            {isPending ? "loading...." : user ? (
                <div className='flex items-center gap-2'>
                    <h2>hello {user.name}</h2>
                    <Image src={user.image || userAvatar} alt='user Avatar' width={60} height={60} className='rounded-full' />
                    <button className='btn bg-[#b93d3d] text-white' onClick={async () => await authClient.signOut()} >Logout</button>
                </div>) : (
                <button className='btn bg-[#403F3F] text-white'><Link href={'/login'}>Login</Link></button>
            )}
        </div>
    )
}

export default Navbar