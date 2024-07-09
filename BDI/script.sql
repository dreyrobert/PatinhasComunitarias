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

-- Tabela Adotante
CREATE TABLE Adotante (
    email VARCHAR(255) NOT NULL PRIMARY KEY,
    alimentacao INT NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    tipo_moradia INT NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    telefone_2 VARCHAR(20),
    profissao VARCHAR(255) NOT NULL,
    logradouro VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    ja_teve_animais_antes BOOLEAN NOT NULL,
    instagram VARCHAR(255),
    situacao_ultimo_animal INT NOT NULL,
    moradia_telada BOOLEAN NOT NULL,
    nome_completo VARCHAR(255) NOT NULL
);

-- Tabela Animais
CREATE TABLE Animais (
    ID SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    especie VARCHAR(255) NOT NULL,
    raca VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    sexo SMALLINT NOT NULL,
    descricao VARCHAR(100) NULL,
    situacao VARCHAR(255) NOT NULL,
    url_midia VARCHAR(255),
    adotante_email VARCHAR(255) NULL,
    FOREIGN KEY (adotante_email) REFERENCES Adotante(email)
);

-- Tabela Procedimentos
CREATE TABLE Procedimentos (
    id SERIAL PRIMARY KEY,
    animal_id INT NOT NULL,
    Data DATE NOT NULL,
    observacoes TEXT,
    tipo VARCHAR(255) NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES Animais(id)
);

-- Tabela Vacinas
CREATE TABLE Vacinas (
    id SERIAL PRIMARY KEY,
    procedimento_id INT NOT NULL,
    proxima_dose DATE NOT NULL,
    FOREIGN KEY (procedimento_id) REFERENCES Procedimentos(id)
);

-- Tabela Exames
CREATE TABLE Exames (
    id SERIAL PRIMARY KEY,
    procedimento_id INT NOT NULL,
    resultado TEXT NOT NULL,
    FOREIGN KEY (procedimento_id) REFERENCES Procedimentos(id)
);

-- Tabela Gastos
CREATE TABLE Gastos (
    ID SERIAL PRIMARY KEY,
    Status VARCHAR(255) NOT NULL,
    Data DATE NOT NULL,
    Descricao TEXT,
    Categoria VARCHAR(255) NOT NULL,
    Valor DECIMAL(10, 2) NOT NULL,
    Metodo_Pagamento INT NOT NULL,
    Numero_Transacao VARCHAR(255) NOT NULL,
    Conta VARCHAR(255) NOT NULL,
    Tags VARCHAR(255)
);

CREATE TABLE Historico_de_Saude (
    ID SERIAL PRIMARY KEY,
    Animal_ID INT NOT NULL,
    Alergias VARCHAR(255),
    Data_Registro DATE NOT NULL,
    Condicoes_Medicas TEXT,
    Procedimentos_Cirurgicos TEXT,
    FOREIGN KEY (Animal_ID) REFERENCES Animais(ID)
);

