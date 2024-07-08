-- Inserir dados na tabela Adotante
INSERT INTO Adotante (email, alimentacao, cpf, tipo_moradia, telefone, telefone_2, profissao, logradouro, bairro, cidade, cep, ja_teve_animais_antes, instagram, situacao_ultimo_animal, moradia_telada, nome_completo)
VALUES
('adotante1@exemplo.com', 1, '123.456.789-01', 2, '(11) 1234-5678', '(11) 9876-5432', 'Engenheiro', 'Rua A, 123', 'Bairro A', 'Cidade A', '12345-678', TRUE, '@adotante1', 1, TRUE, 'João da Silva'),
('adotante2@exemplo.com', 2, '234.567.890-12', 1, '(21) 2345-6789', NULL, 'Médico', 'Rua B, 456', 'Bairro B', 'Cidade B', '23456-789', FALSE, '@adotante2', 2, FALSE, 'Maria Oliveira'),
('adotante3@exemplo.com', 3, '345.678.901-23', 3, '(31) 3456-7890', '(31) 8765-4321', 'Professor', 'Rua C, 789', 'Bairro C', 'Cidade C', '34567-890', TRUE, NULL, 1, TRUE, 'Carlos Pereira'),
('adotante4@exemplo.com', 1, '456.789.012-34', 2, '(41) 4567-8901', NULL, 'Advogado', 'Rua D, 101', 'Bairro D', 'Cidade D', '45678-901', TRUE, '@adotante4', 3, FALSE, 'Ana Costa'),
('adotante5@exemplo.com', 2, '567.890.123-45', 1, '(51) 5678-9012', '(51) 7654-3210', 'Enfermeira', 'Rua E, 202', 'Bairro E', 'Cidade E', '56789-012', FALSE, '@adotante5', 2, TRUE, 'Paula Souza'),
('adotante6@exemplo.com', 3, '678.901.234-56', 3, '(61) 6789-0123', NULL, 'Dentista', 'Rua F, 303', 'Bairro F', 'Cidade F', '67890-123', TRUE, '@adotante6', 1, TRUE, 'Bruno Lima'),
('adotante7@exemplo.com', 1, '789.012.345-67', 2, '(71) 7890-1234', '(71) 6543-2109', 'Arquiteto', 'Rua G, 404', 'Bairro G', 'Cidade G', '78901-234', FALSE, '@adotante7', 2, FALSE, 'Fernanda Alves'),
('adotante8@exemplo.com', 2, '890.123.456-78', 1, '(81) 8901-2345', NULL, 'Veterinária', 'Rua H, 505', 'Bairro H', 'Cidade H', '89012-345', TRUE, '@adotante8', 3, TRUE, 'Juliana Santos'),
('adotante9@exemplo.com', 3, '901.234.567-89', 3, '(91) 9012-3456', '(91) 5432-1098', 'Programador', 'Rua I, 606', 'Bairro I', 'Cidade I', '90123-456', TRUE, '@adotante9', 1, FALSE, 'Rafael Martins'),
('adotante10@exemplo.com', 1, '012.345.678-90', 2, '(11) 0123-4567', NULL, 'Designer', 'Rua J, 707', 'Bairro J', 'Cidade J', '01234-567', FALSE, '@adotante10', 2, TRUE, 'Bianca Ferreira');

-- Inserir dados na tabela Animais
INSERT INTO Animais (nome, especie, raca, idade, sexo, descricao, situacao, url_midia, adotante_email)
VALUES
('Rex', 'Cachorro', 'Labrador', 3, 1, 'Muito amigável e enérgico.', 'Disponível', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/640px-YellowLabradorLooking_new.jpg', NULL),
('Mia', 'Gato', 'Siamês', 2, 0, 'Carinhosa e brincalhona.', 'Disponível', 'https://premierpet.com.br/wp-content/uploads/2023/12/shutterstock_2341407545-1024x683.jpg', NULL),
('Buddy', 'Cachorro', 'Beagle', 4, 1, 'Adora correr e brincar ao ar livre.', 'Adotado', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Beagle_Faraon.JPG/1200px-Beagle_Faraon.JPG', 'adotante1@exemplo.com'),
('Luna', 'Gato', 'Persa', 1, 0, 'Muito tranquila e independente.', 'Disponível', 'https://www.patasdacasa.com.br/sites/default/files/inline-images/gato%20persa%20exo%CC%81tico.jpg', NULL),
('Max', 'Cachorro', 'Pastor Alemão', 5, 1, 'Excelente cão de guarda.', 'Disponível', 'https://upload.wikimedia.org/wikipedia/commons/7/76/Adult_male_German_shepherd_dog_standing_at_the_beach_%28retouched%29.jpg', NULL),
('Nina', 'Gato', 'Maine Coon', 3, 0, 'Muito inteligente e curiosa.', 'Adotado', 'https://blog-static.petlove.com.br/wp-content/uploads/2018/05/Maine-Coon.jpg', 'adotante2@exemplo.com'),
('Rocky', 'Cachorro', 'Bulldog', 2, 1, 'Adora companhia humana.', 'Disponível', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoehe1uSWRAMk2rnIaHBwrbfH8uKavHstD1w&s', NULL),
('Lily', 'Gato', 'Bengal', 4, 0, 'Muito ativa e brincalhona.', 'Disponível', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5-ghmcCJ1aX9wC2ErxjlSAamRtmz5WM8Gw&s', NULL),
('Charlie', 'Cachorro', 'Poodle', 6, 1, 'Muito obediente e adestrado.', 'Adotado', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMZc_1qJ22J1c7H1zZQyI8C7a1693uxRyNQ&s', 'adotante3@exemplo.com'),
('Bella', 'Gato', 'Sphynx', 2, 0, 'Muito carinhosa e adora atenção.', 'Disponível', 'https://blog-static.petlove.com.br/wp-content/uploads/2021/02/sphynx-doencas-petlove.jpg', NULL);
