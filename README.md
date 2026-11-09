# fastify-backend

`Um pequeno projeto de Back-End com Node.JS e Fastify`

Esse é um exercício de aprendizado sobre criação de **servidores Node.JS** usando o **framework Fastify**

Aula de Aprendizado: [*https://www.youtube.com/watch?v=hHM-hr9q4mo&list=PL85ITvJ7FLogNHtbfjISMtEk_WepbGMO6&index=25&t=3520s&pp=iAQB*](https://www.youtube.com/watch?v=hHM-hr9q4mo&list=PL85ITvJ7FLogNHtbfjISMtEk_WepbGMO6&index=25&t=3520s&pp=iAQB)

## **Sobre o Projeto**

Uma API REST de **cursos** (CRUD completo) feita com Node.js e Fastify. Os dados ficam guardados **em memória** (um `Map` do JavaScript), então tudo é apagado quando o servidor é reiniciado. Não é necessário instalar nenhum banco de dados.

## **Requisitos**

Antes de começar, você precisa ter instalado na sua máquina:

| Ferramenta | Versão recomendada | Para que serve |
|------------|--------------------|----------------|
| [Node.js](https://nodejs.org/) | **20 ou superior** (LTS) | Executar o servidor |
| npm | Já vem junto com o Node.js | Instalar as dependências |
| [Git](https://git-scm.com/) | Qualquer versão recente | Baixar (clonar) o projeto |

Para conferir se já estão instalados, abra o terminal e rode:

```bash
node -v
npm -v
git --version
```

Se algum comando der erro de "não encontrado", instale a ferramenta pelos links acima e abra o terminal novamente.

> **Opcional:** para testar as rotas sem digitar comandos, use a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) do VS Code, o [Insomnia](https://insomnia.rest/) ou o [Postman](https://www.postman.com/).

## **Instalação e Execução (Passo a Passo)**

### 1. Clonar o repositório

```bash
git clone https://github.com/luisotaviocode/fastify-backend.git
```

### 2. Entrar na pasta do projeto

```bash
cd fastify-backend
```

### 3. Instalar as dependências

```bash
npm install
```

Isso baixa o Fastify e tudo o que o projeto precisa para funcionar.

### 4. Rodar o servidor

Existem duas formas:

**Modo desenvolvimento** (reinicia sozinho quando você salva um arquivo):

```bash
npm run dev
```

**Modo normal:**

```bash
npm start
```

Se tudo der certo, vai aparecer no terminal:

```
Servidor dos cursos funcionando com sucesso!
```

### 5. Testar no navegador

Abra [http://localhost:3333](http://localhost:3333). Você deve ver a mensagem:

```
Servidor de Cursos | Node.js + Fastify
```

Para parar o servidor, volte ao terminal e pressione `Ctrl + C`.

## **Rotas da API**

O servidor roda em `http://localhost:3333`.

| Método | Rota | Descrição | Resposta |
|--------|------|-----------|----------|
| `GET` | `/` | Mensagem de boas-vindas | `200` |
| `GET` | `/courses` | Lista todos os cursos | `200` + lista em JSON |
| `POST` | `/courses` | Cria um novo curso | `201` |
| `PUT` | `/courses/update/:id` | Atualiza o curso com o `id` informado | `204` |
| `DELETE` | `/courses/delete/:id` | Remove o curso com o `id` informado | `204` |

Corpo (JSON) esperado no `POST` e no `PUT`:

```json
{
  "nomeCurso": "Curso Completo de Node.JS",
  "descricao": "Um curso completo de Node.JS para aplicações Back-End com Fastify",
  "valorEmReais": 34.98
}
```

O `id` de cada curso é gerado automaticamente (UUID) na criação. Para descobri-lo, faça um `GET /courses`.

## **Testando as Rotas**

### Opção 1: arquivo `routes.http` (VS Code)

1. Instale a extensão **REST Client** no VS Code.
2. Abra o arquivo `routes.http` na raiz do projeto.
3. Clique em **Send Request** acima de cada requisição.
4. Nas requisições `PUT` e `DELETE`, troque o `id` do exemplo por um `id` real, retornado pelo `GET /courses`.

### Opção 2: terminal com `curl`

Criar um curso:

```bash
curl -X POST http://localhost:3333/courses \
  -H "Content-Type: application/json" \
  -d '{"nomeCurso":"Curso de Node.JS","descricao":"Aprendendo Fastify","valorEmReais":34.98}'
```

Listar os cursos (copie o `id` que aparecer):

```bash
curl http://localhost:3333/courses
```

Atualizar um curso:

```bash
curl -X PUT http://localhost:3333/courses/update/COLE_O_ID_AQUI \
  -H "Content-Type: application/json" \
  -d '{"nomeCurso":"Curso Avançado","descricao":"Fastify na prática","valorEmReais":39.99}'
```

Deletar um curso:

```bash
curl -X DELETE http://localhost:3333/courses/delete/COLE_O_ID_AQUI
```

> No Windows, use o **Git Bash** para rodar os comandos `curl` acima exatamente como estão, ou use o Insomnia/Postman.

## **Problemas Comuns**

| Problema | Causa provável | Solução |
|----------|----------------|---------|
| `command not found: node` / `'node' não é reconhecido` | Node.js não instalado ou terminal aberto antes da instalação | Instale o Node.js e abra um novo terminal |
| `Cannot find module 'fastify'` | Dependências não instaladas | Rode `npm install` dentro da pasta do projeto |
| `EADDRINUSE: address already in use :::3333` | Outro programa (ou outro terminal) já usa a porta 3333 | Feche o outro processo ou pare o servidor anterior com `Ctrl + C` |
| Erro de versão ou de sintaxe ao iniciar | Node.js muito antigo | Atualize para o Node.js 20 ou superior |
| Os cursos sumiram | O banco é em memória | É o comportamento esperado: reiniciar o servidor apaga os dados |

## **Estrutura do Projeto**

```
fastify-backend/
├── server.js           # Cria o servidor e define as rotas
├── database-memory.js  # Banco de dados em memória (classe DatabaseMemory)
├── routes.http         # Requisições de exemplo para testar a API
├── package.json        # Dependências e scripts (start, dev)
└── README.md
```

## **Conhecimentos Aprendidos**

1. Criação de servidores
2. Configurações de dependências
3. Desenvolvimento de rotas
4. Criação dos métodos HTTP POST, GET, PUT, DELETE

## **Conclusão**

Esse foi uma atividade prática de *como iniciar com o pé direito* a **como desenvolver servidores com o Node**

## **Autor**

Feito por **Luis Otávio Barreto Dantas** · Licença ISC