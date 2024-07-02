import React from 'react';

const PetPopup = ({ animal, onClosePopup }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl w-full">
                <div className="flex">
                    <img
                        src={animal.url_midia}
                        alt={animal.nome}
                        className="w-48 h-48 object-cover rounded-lg mr-4"
                    />
                    <div>
                        <div className="flex justify-between items-center">
                            <div className='flex flex-row items-center'>
                                <h2 className="text-xl font-bold">{animal.nome}</h2>
                                <span className="text-gray-600 text-sm border-l-2 ml-[10px] pl-[5px]">{animal.sexo === 0 ? 'fêmea' : 'macho'}</span>
                            </div>
                            <p className="text-gray-700">{animal.idade} anos</p>
                        </div>
                        <p className="text-gray-600 mt-1">{animal.descricao}</p>
                        <p className="text-gray-600 mt-4">
                            <strong>Sobre o animal</strong>
                            <br />
                            {animal.descricao}
                        </p>
                        <button
                            onClick={onClosePopup}
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
    );
};

export default PetPopup;
