import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { PackagesInterface } from '@/Types/types';

const SponsorshipTable = ({ packages }: { packages: PackagesInterface }) => {
    return (
        <div className="mx-auto p-8">
            <table className="w-[70%] text-lg mx-auto">
                <thead className='text-xl sticky top-24 bg-background z-10'>
                    <tr>
                        <th><span className='p-[68px] border-b border-white w-full h-full block'></span></th>
                        {Object.keys(packages.items[0].packages).map((packageType) => (
                            <th key={packageType} className="">
                                <span className='flex flex-col text-left gap-3 border-l border-b w-full h-full p-4 py-8'>
                                    <span>{packageType}</span>
                                    <span className='text-2xl text-nowrap'>
                                        {packages.prices[packageType as keyof typeof packages.prices]} <small>/Yr</small>
                                    </span>
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {packages.items.map((item, index) => (
                        <React.Fragment key={item.name}>
                            {item.is_title_row ? (
                                <tr className={`border-b border-white `}>
                                    <td className="p-4 font-bold" colSpan={Object.keys(packages.items[0].packages).length + 1}>
                                        {item.name}
                                    </td>
                                </tr>
                            ) : (
                                <tr className={` ${index % 2 === 0 ? 'bg-gray-700' : ''}`}>
                                    <td className="p-4">{item.name}</td>
                                    {Object.keys(packages.items[0].packages).map((packageType) => (
                                        <td key={packageType} className="p-4 text-center">
                                            {item.packages[packageType as keyof typeof item.packages] ? <FaCheck className="text-green-500 mx-auto" /> : ''}
                                        </td>
                                    ))}
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table >
        </div >
    );
};

export default SponsorshipTable;