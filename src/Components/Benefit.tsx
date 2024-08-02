import React from 'react'
import { BenefitProps } from '@/Types/types'

const Benefit: React.FC<BenefitProps> = ({ title, description }) => {
    return (
        <div className='h-40 z-0 pl-10 flex flex-col justify-center'>
            <h2 className='text-2xl'>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Benefit