-- Populando a tabela Administrador
INSERT INTO Administrador (Nome_Completo, Senha, E_mail) VALUES
('Alice Silva', 'senha123', 'alice@example.com'),
('Bruno Souza', 'senha456', 'bruno@example.com');

-- Populando a tabela Adotante
INSERT INTO Adotante (E_mail, Alimentacao, CPF, Tipo_Moradia, Telefone, Telefone_2, Profissao, Logradouro, Bairro, Cidade, CEP, Ja_teve_animais_antes, Instagram, Situacao_ultimo_animal, Moradia_telada, Nome_Completo) VALUES
('carlos@example.com', 1, '123.456.789-00', 1, '99999-9999', NULL, 'Engenheiro', 'Rua A, 123', 'Centro', 'Cidade A', '12345-678', TRUE, NULL, 1, TRUE, 'Carlos Silva'),
('daniela@example.com', 2, '987.654.321-00', 2, '88888-8888', '77777-7777', 'Médica', 'Rua B, 456', 'Bairro B', 'Cidade B', '87654-321', FALSE, 'daniela_insta', 2, FALSE, 'Daniela Santos');

-- Populando a tabela Animais
INSERT INTO Animais (Nome, Especie, Raca, Situacao, URL_midia, Adotante_Email) VALUES
('Rex', 'Cachorro', 'Labrador', 'Disponível', 'http://example.com/rex.jpg', 'carlos@example.com'),
('Mimi', 'Gato', 'Siamês', 'Adotado', 'http://example.com/mimi.jpg', 'daniela@example.com');

-- Populando a tabela Historico_de_Saude
INSERT INTO Historico_de_Saude (Animal_ID, Alergias, Data_Registro, Condicoes_Medicas, Procedimentos_Cirurgicos) VALUES
(1, 'Pólen', '2023-01-01', 'Nenhuma', 'Nenhum'),
(2, 'Nenhuma', '2023-02-01', 'Nenhuma', 'Esterilização');

-- Populando a tabela Procedimentos
INSERT INTO Procedimentos (Animal_ID, Data, Observacoes, Tipo) VALUES
(1, '2023-03-01', 'Check-up geral', 'Consulta'),
(2, '2023-04-01', 'Vacinação anual', 'Vacina');

-- Populando a tabela Vacinas
INSERT INTO Vacinas (Procedimento_ID, Proxima_Dose) VALUES
(2, '2024-04-01');

-- Populando a tabela Exames
INSERT INTO Exames (Procedimento_ID, Resultado) VALUES
(1, 'Saudável');

-- Populando a tabela Gastos
INSERT INTO Gastos (Status, Data, Descricao, Categoria, Valor, Metodo_Pagamento, Numero_Transacao, Conta, Tags) VALUES
('Pago', '2023-05-01', 'Compra de ração', 'Alimentação', 100.50, 1, 'TRANS123', 'Conta1', 'Ração'),
('Pendente', '2023-06-01', 'Consulta veterinária', 'Saúde', 200.00, 2, 'TRANS124', 'Conta2', 'Veterinário');
