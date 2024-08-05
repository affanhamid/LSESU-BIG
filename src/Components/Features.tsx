'use client'
import { useState } from 'react'

const FeatureItem = ({ selectedFeature, setSelectedFeature, idx }: { selectedFeature: any; setSelectedFeature: any; idx: any }) => {
    return <div className={`bg-gray-300 h-[50vh] border ${selectedFeature === idx ? 'w-[700px]' : 'w-32'} ${selectedFeature !== idx ? 'hover:bg-gray-700 cursor-pointer' : ''} transition-all duration-200 overflow-hidden`} onClick={() => setSelectedFeature(idx)}>
        <div className={`${selectedFeature === idx ? '' : 'opacity-0 hidden'} p-10`}>
            <h2 className='text-3xl mb-5'>Feature {idx}</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel laudantium repudiandae delectus nam neque dicta, ab porro quibusdam ut ipsa nihil odio accusantium enim suscipit saepe, corporis quas id est, fugiat beatae corrupti obcaecati! In illum officiis, recusandae accusantium, exercitationem, dignissimos facere provident ad accusamus ipsa ab itaque earum corporis.
        </div>
        <div className={`w-full h-full flex justify-center items-center ${selectedFeature === idx ? 'hidden' : ''}`}>
            <span className='rotate-90'>
                FEATURE {idx}
            </span>
        </div>
    </div>
}

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState(0)
    return (
        <div className='flex justify-center'>
            <FeatureItem selectedFeature={selectedFeature} setSelectedFeature={setSelectedFeature} idx={0} />
            <FeatureItem selectedFeature={selectedFeature} setSelectedFeature={setSelectedFeature} idx={1} />
            <FeatureItem selectedFeature={selectedFeature} setSelectedFeature={setSelectedFeature} idx={2} />
            <FeatureItem selectedFeature={selectedFeature} setSelectedFeature={setSelectedFeature} idx={3} />
        </div>
    )
}

export default Features