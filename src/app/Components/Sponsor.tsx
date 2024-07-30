import React from 'react'

interface SponsorProps {
    logo: string;
    summary: string;
}

const Sponsor: React.FC<SponsorProps> = ({ logo, summary }) => {
    return (
        <div className='rounded-lg overflow-hidden m-20 hover:scale-110 transition-all cursor-pointer'>
            <img src={logo} alt="Sponsor logo" />
        </div>
    )
}

export default Sponsor