import React from 'react';

const PetCard = () => {
    return (
        <div>
            <div className="w-56 rounded-lg overflow-hidden shadow-lg font-sans bg-white">
                <img
                    src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_640.jpg"
                    alt="Bituca"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <div className='flex flex-row items-center'>
                            <h2 className="text-xl font-bold">Bituca</h2>
                            <span className="text-gray-600 text-sm border-l-2 ml-[10px] pl-[5px]">macho</span>
                        </div>
                        <p className="text-gray-700">3 anos</p>
                    </div>
                    <p className="text-gray-600 mt-1">Caramelo, castrado e vacinado</p>
                </div>
            </div>
            <div className="relative top-[-50px] right-[-205px] bg-red-500 rounded-full w-9 h-9 flex items-center justify-center">
                <span className="text-black text-xs z-10">3</span>
                <svg className="z-0 text-white w-7 h-7 absolute " fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>
        </div>
    );
};

export default PetCard;
