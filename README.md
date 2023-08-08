
# Projeto LetmeAsk - README

## Bem-vindo ao projeto LetmeAsk!

### Visão Geral
Bem-vindo ao projeto LetmeAsk! Esta é uma aplicação web inovadora que permite aos usuários criar salas temáticas e fazer perguntas sobre uma variedade de assuntos. As salas atualmente disponíveis incluem tópicos como "Javascript", "React" e "Postgres".

<a href="https://github.com/PatrickRigaud/letmeask"> Repositório do FrontEnd </a>

### Configuração do Banco de Dados
Para garantir o funcionamento adequado do projeto, é essencial configurar o banco de dados corretamente. A aplicação utiliza o PostgreSQL como banco de dados, e você pode criar a estrutura necessária executando os seguintes comandos SQL:

```sql
CREATE DATABASE letmeask2;

CREATE TABLE usuarios (
    id serial primary key,
    nome varchar(60),
    sobrenome varchar(60),
    email varchar(60),
    senha varchar(255)
);

CREATE TABLE salas (
    id serial primary key,
    nome varchar(60)
);

CREATE TABLE perguntas (
    id serial primary key,
    descricao varchar(255),
    data_cadastro timestamp,
    id_sala integer references salas(id)
);

CREATE TABLE comentarios (
    id serial primary key,
    descricao varchar(255),
    gostei integer,
    nao_gostei integer,
    pergunta_id integer references perguntas(id),
    usuario varchar(60)
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
```
<br>

<h4>Antes de executar esses comandos, certifique-se de ter o PostgreSQL devidamente instalado em seu ambiente de desenvolvimento.</h4>

<br>
Funcionamento do Projeto
O projeto LetmeAsk permite que os usuários criem salas sobre temas específicos, como "Javascript" e "React". Dentro dessas salas, os usuários podem fazer perguntas relacionadas ao tópico e também adicionar comentários às perguntas de outros usuários. Cada pergunta e comentário são registrados no banco de dados, juntamente com a data de cadastro.
<br>
<br>
Além disso, os usuários têm a opção de expressar seu feedback sobre os comentários, indicando se gostaram ou não gostaram, contribuindo assim para a interação e aprimoramento da comunidade.
