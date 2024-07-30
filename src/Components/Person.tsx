import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

interface PersonProps {
    name: string;
    role: string;
    image: string;
    email: string;
    linkedin: string;
    reverse: boolean
}

const Person: React.FC<PersonProps> = ({ name, role, image, email, linkedin, reverse }) => {
    return (
        <div className={`overflow-hidden rounded-lg flex ${reverse ? 'flex-row-reverse' : ''} items-center gap-10 my-10 border border-gray-500`}>
            {/* <img src="" alt={`image of ${name}`} className="object-cover rounded mb-2" /> */}
            <div className='w-[350px] h-[250px] bg-gray-500'></div>
            <div className='flex flex-col text-left gap-3'>
                <div className='flex items-center'>
                    <h2 className='text-xl'>{name}</h2>
                    <Link href={linkedin}><FaLinkedin className='ml-2' /></Link>
                </div>
                <p>{role}</p>
                <p className='underline'>{email}</p>
            </div>
        </div>
    )
}

export default Person