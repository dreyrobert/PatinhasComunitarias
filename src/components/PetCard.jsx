import React, { useState } from 'react';

const PetCard = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleCardClick = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <div onClick={handleCardClick} className="w-56 rounded-lg overflow-hidden shadow-lg font-sans bg-white cursor-pointer">
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
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl w-full">
                        <div className="flex">
                            <img
                                src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_640.jpg"
                                alt="Bituca"
                                className="w-48 h-48 object-cover rounded-lg mr-4"
                            />
                            <div>
                                <div className="flex justify-between items-center">
                                    <div className='flex flex-row items-center'>
                                        <h2 className="text-xl font-bold">Bituca</h2>
                                        <span className="text-gray-600 text-sm border-l-2 ml-[10px] pl-[5px]">macho</span>
                                    </div>
                                    <p className="text-gray-700">3 anos</p>
                                </div>
                                <p className="text-gray-600 mt-1">Caramelo, castrado e vacinado</p>
                                <p className="text-gray-600 mt-4">
                                    <strong>Sobre o animal</strong>
                                    <br />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.
                                </p>
                                <button
                                    onClick={handleCardClick}
                                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="w-full h-24 bg-gray-200 flex items-center justify-center">Image</div>
                            <div className="w-full h-24 bg-gray-200 flex items-center justify-center">Image</div>
                            <div className="w-full h-24 bg-gray-200 flex items-center justify-center">Image</div>
                            <div className="w-full h-24 bg-gray-200 flex items-center justify-center">Image</div>
                        </div>
                        <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-lg w-full">
                            Quero Adotar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PetCard;
