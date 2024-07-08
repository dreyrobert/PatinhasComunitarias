import React, { useState, useEffect } from 'react';
import api from '../services/api';

const AnimalTable = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const response = await api.get('/animals/animalsByAdopter');
                setAnimals(response.data);
            } catch (error) {
                console.error('Error fetching animals by adopter', error);
            }
        };

        fetchAnimals();
    }, []);

    const groupedAnimals = animals.reduce((acc, animal) => {
        const { email, nome_completo } = animal;

        if (!acc[email]) {
            acc[email] = {
                email,
                nome_completo,
                animais: [],
            };
        }

        acc[email].animais.push({
            nome: animal.nome,
            especie: animal.especie,
            raca: animal.raca,
            idade: animal.idade,
            sexo: animal.sexo,
            descricao: animal.descricao,
            situacao: animal.situacao,
            url_midia: animal.url_midia,
        });

        return acc;
    }, {});

    const groupedAnimalsArray = Object.values(groupedAnimals);


    return (
        <div className="container mx-auto p-4 mt-20">
            <h1 className="text-2xl font-bold mb-4">Animais por Adotante</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/4 py-2">Nome do Adotante</th>
                            <th className="w-1/4 py-2">Email</th>
                            <th className="w-1/2 py-2">Animais</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {groupedAnimalsArray.map((adopter) => (
                            <tr key={adopter.email}>
                                <td className="border px-4 py-2">{adopter.nome_completo}</td>
                                <td className="border px-4 py-2">{adopter.email}</td>
                                <td className="border px-4 py-2">
                                    {adopter.animais.length > 0 ? (
                                        adopter.animais.map((animal) => (
                                            <div key={animal.nome} className="mb-2">
                                                <div><strong>Nome:</strong> {animal.nome}</div>
                                                <div><strong>Espécie:</strong> {animal.especie}</div>
                                                <div><strong>Raça:</strong> {animal.raca}</div>
                                                <div><strong>Idade:</strong> {animal.idade} anos</div>
                                                <div><strong>Sexo:</strong> {animal.sexo === 1 ? 'Macho' : 'Fêmea'}</div>
                                                <div><strong>Descrição:</strong> {animal.descricao}</div>
                                            </div>
                                        ))
                                    ) : (
                                        <div>Sem animais</div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AnimalTable;
