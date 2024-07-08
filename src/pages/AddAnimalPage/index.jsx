import React, { useState } from 'react';
import api from '../../services/api';

const AddAnimalPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    especie: '',
    raca: '',
    idade: '',
    sexo: '',
    descricao: '',
    situacao: '',
    url_midia: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/animals/register', formData);
      console.log('Animal registrado com sucesso:', response.data);
      // Você pode adicionar mais lógica aqui, como redirecionar o usuário ou mostrar uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao registrar o animal:', error);
      // Você pode adicionar lógica de tratamento de erro aqui
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[1200px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro de Animal</h2>
        <form onSubmit={handleSubmit} className='flex flex-row justify-center space-x-10'>
          <div className='flex flex-col w-1/2'>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="nome">Nome</label>
              <input
                type="text"
                name="nome"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="especie">Espécie</label>
              <input
                type="text"
                name="especie"
                id="especie"
                value={formData.especie}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="raca">Raça</label>
              <input
                type="text"
                name="raca"
                id="raca"
                value={formData.raca}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="idade">Idade</label>
              <input
                type="number"
                name="idade"
                id="idade"
                value={formData.idade}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
          </div>
          <div className='flex flex-col w-1/2'>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="sexo">Sexo</label>
              <select
                name="sexo"
                id="sexo"
                value={formData.sexo}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="">Selecione o sexo</option>
                <option value="1">Macho</option>
                <option value="0">Fêmea</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="descricao">Descrição</label>
              <input
                type="text"
                name="descricao"
                id="descricao"
                value={formData.descricao}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="situacao">Situação</label>
              <input
                type="text"
                name="situacao"
                id="situacao"
                value={formData.situacao}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="url_midia">URL da Imagem</label>
              <input
                type="text"
                name="url_midia"
                id="url_midia"
                value={formData.url_midia}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAnimalPage;
