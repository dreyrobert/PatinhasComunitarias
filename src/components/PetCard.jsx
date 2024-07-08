import React from 'react';

const PetCard = ({ animal, onCardClick }) => {
    return (
        <div onClick={onCardClick} className="w-56 rounded-lg overflow-hidden shadow-lg font-sans bg-white cursor-pointer h-[300px]">
            <img
                src={animal.url_midia}
                alt={animal.nome}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <div className='flex flex-row items-center'>
                        <h2 className="text-xl font-bold">{animal.nome}</h2>
                        <span className="text-gray-600 text-sm border-l-2 ml-[10px] pl-[5px]">{animal.sexo === 0 ? 'fêmea' : 'macho'}</span>
                    </div>
                    <p className="text-gray-700">{animal.idade} anos</p>
                </div>
                <p className="text-gray-600 mt-1">{animal.descricao}</p>
            </div>
        </div>
    );
};

export default PetCard;
