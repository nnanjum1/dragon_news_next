import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const RightSidebar = () => {
    return (
        <div>
            <h2 className="font-bold text-lg">Login With</h2>
            <div className='flex flex-col gap-2 mt-6'>
                <button className='btn border-blue-500 text-blue-500 rounded-md bg-white'><FaGoogle />Login with Google</button>
                <button className='btn border-[#242520] text-[#242520] rounded-md bg-white'><FaGithub />
                    Login with Github</button>
            </div>


        </div>
    )
}

export default RightSidebar