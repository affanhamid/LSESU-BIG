import React from 'react'
import { BigSpeaker } from '../../Components/Speaker';
import { fetchPastSpeakers } from '../../Database/database';

const PastSpeakers = async () => {
    const { speakers } = await fetchPastSpeakers()
    return (
        <div>
            <h1 className='text-bold text-5xl text-center my-20'>Past Speakers</h1>
            <section className='px-52'>
                {speakers.map((speaker, idx) => <BigSpeaker key={idx} name={speaker.name} topic={speaker.topic} description={speaker.description} reverse={Boolean(idx % 2)} />)}
            </section>
        </div>
    )
}

export default PastSpeakers