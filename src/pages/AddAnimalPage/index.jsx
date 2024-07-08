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
    adotante_email: ''
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Mostrar uma prévia da imagem, se necessário
        setFormData({
          ...formData,
          url_midia: reader.result // Armazenar a imagem como base64 no estado formData
        });
      };
      reader.readAsDataURL(file); // Ler o arquivo como base64
    }
  };
  

  const handleSubmit = async (e) => {

  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[1200px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro de Animal</h2>
        <form onSubmit={handleSubmit} className='flex flex-row justify-center space-x-10'>
          <div className='flex- flex-column min-w-[500px]'>
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
          </div>
          <div className='flex- flex-column'>
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
              <label className="block text-gray-700 mb-2" htmlFor="url_midia">Upload de Imagem</label>
              <input
                type="file"
                name="url_midia"
                id="url_midia"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {imagePreview && (
              <div className="mb-4">
                <img src={imagePreview} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
              </div>
            )}
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
