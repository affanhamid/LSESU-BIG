"use client";

import React, { useEffect, useRef } from 'react';
import { CarouselProps } from '@/Types/types';

const Carousel: React.FC<CarouselProps> = ({ gap, offset, paddingY, items, Component, animate }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            const startScrolling = () => {
                carousel.scrollLeft += 1;
                if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                    carousel.scrollLeft = 0;
                }
            };
            const scrollInterval = setInterval(startScrolling, 50);
            return () => clearInterval(scrollInterval);
        }
    }, []);

    return (
        <div ref={carouselRef} className={`overflow-x-scroll mx-auto`}>
            <div className={`flex ${gap} w-max ${offset} ${paddingY}`}>
                {items.map((item, idx) => (
                    <Component key={idx} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
