-- Criação do banco de dados
CREATE DATABASE PatinhasComunitarias;

-- Seleção do banco de dados
USE PatinhasComunitarias;

-- Criação da tabela users
CREATE TABLE Administrador (
    nome_completo VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE PRIMARY KEY,
    senha VARCHAR(100) NOT NULL
);

-- Criação da tabela Animais
CREATE TABLE Animais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(100) NOT NULL,
    raca VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    sexo TINYINT(1) NOT NULL,
    descricao VARCHAR(100) NULL,
    url_midia VARCHAR(100) NOT NULL,
    situacao VARCHAR(100) NOT NULL
);