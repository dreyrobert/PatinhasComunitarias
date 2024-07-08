import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const ManageAnimalsPage = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await api.get('/animals');
      setAnimals(response.data);
    } catch (error) {
      console.error("Erro ao buscar os animais:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/animals/${id}`);
      fetchAnimals(); // Atualiza a lista após a exclusão
    } catch (error) {
      console.error("Erro ao excluir o animal:", error);
    }
  };

  const handleEdit = (animal) => {
    setSelectedAnimal(animal);
  };

  const closeModal = () => {
    setSelectedAnimal(null);
  };

  const handleSave = async (updatedAnimal) => {
    try {
      await api.put(`/animals/${updatedAnimal.id}`, updatedAnimal);
      fetchAnimals();
      closeModal();
    } catch (error) {
      console.error("Erro ao salvar as alterações:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Lista de Animais</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Nome</th>
            <th className="py-2">Espécie</th>
            <th className="py-2">Raça</th>
            <th className="py-2">Idade</th>
            <th className="py-2">Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {animals.map((animal) => (
            <tr key={animal.id}>
              <td className="border px-4 py-2">{animal.nome}</td>
              <td className="border px-4 py-2">{animal.especie}</td>
              <td className="border px-4 py-2">{animal.raca}</td>
              <td className="border px-4 py-2">{animal.idade}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
                  onClick={() => handleEdit(animal)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(animal.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedAnimal && (
        <EditAnimalModal
          animal={selectedAnimal}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

const EditAnimalModal = ({ animal, onClose, onSave }) => {
  const [updatedAnimal, setUpdatedAnimal] = useState({ ...animal });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAnimal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedAnimal);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-xl mb-4">Editar Animal</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Nome</label>
            <input
              type="text"
              name="nome"
              value={updatedAnimal.nome}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Espécie</label>
            <input
              type="text"
              name="especie"
              value={updatedAnimal.especie}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Raça</label>
            <input
              type="text"
              name="raca"
              value={updatedAnimal.raca}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Idade</label>
            <input
              type="number"
              name="idade"
              value={updatedAnimal.idade}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageAnimalsPage;
