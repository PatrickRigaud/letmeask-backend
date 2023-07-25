
<h1>README - Projeto LetmeAsk</h1>
<h2>Bem-vindo ao projeto LetmeAsk! </h2>

<h3>Visão geral </h3>
O projeto LetmeAsk é uma aplicação web inovadora que permite aos usuários criar salas temáticas e fazer perguntas sobre diferentes assuntos. As salas disponíveis atualmente incluem "Javascript", "React" e "Postgres".

<h3>Configuração do Banco de Dados</h3>
Para que o projeto funcione corretamente, é necessário configurar o banco de dados no formato adequado. O banco de dados utilizado pelo projeto é o PostgreSQL, e você pode criá-lo executando os seguintes comandos SQL:


CREATE DATABASE letmeask2;

CREATE TABLE usuarios (
    id serial primary key,
    nome text,
    sobrenome text,
    email text,
    senha text
);

CREATE TABLE salas (
    id serial primary key,
    nome text
);

CREATE TABLE perguntas (
    id serial primary key,
    descricao text,
    data_cadastro timestamp,
    id_sala integer references salas(id)
);

CREATE TABLE comentarios (
    id serial primary key,
    descricao text,
    gostei integer,
    nao_gostei integer,
    pergunta_id integer references perguntas(id),
    usuario text
);

CREATE TABLE usuarios_sala (
    id serial primary key,
    sala_id integer references salas(id),
    usuario_id integer references usuarios(id)
);

INSERT INTO salas (nome) values 
    ('Javascript'),
    ('React'),
    ('Postgres');

Certifique-se de que o PostgreSQL esteja devidamente instalado em seu ambiente de desenvolvimento antes de executar esses comandos.

<h3>Funcionamento do Projeto</h3>
O projeto XYZ permite que os usuários criem salas sobre temas específicos, como "Javascript" e "React". Dentro das salas, os usuários podem fazer perguntas sobre o assunto da sala e também podem fazer comentários nas perguntas de outros usuários. Cada pergunta e comentário são registrados no banco de dados com a data de cadastro.


Os usuários também têm a opção de marcar se gostaram ou não gostaram de um comentário, fornecendo feedback útil para a comunidade.