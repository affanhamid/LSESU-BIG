import * as React from 'react';

const SliderImage = ({ src }: { src: string }) => {
    return (
        <div className='w-[600px] aspect-video bg-gray-300 mx-2'>
            {/* <img src={src} alt="Slider" className='w-full h-full object-cover' /> */}
            <div className='w-full h-full flex justify-center items-center cursor-pointer text-black'>Image</div>
        </div>
    )
}

const Slider = () => {
    return (
        <div className='w-full overflow-scroll no-scrollbar'>
            <div className="w-max flex h-max py-5">
                <SliderImage src={''} />
                <SliderImage src={''} />
                <SliderImage src={''} />
                <SliderImage src={''} />

            </div>
        </div>
    )
}

export default Slider;