// 1. Importando o Fastify Framework e o Banco de Dados em Memória
import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

// 2. Criando o servidor
const server = fastify();

// 3. Criando uma variável para o Banco de Dados em Memória
const database = new DatabaseMemory();

// 4.0 Desenvolvendo as rotas

// 4.1 Rota Raíz do Sistema
server.get('/', (request, reply) => {
  reply.send("Servidor de Cursos | Node.js + Fastify");
})

// 4.1.14.1.1 localhost:3333/courses

// 4.1.2 Adiciona novos cursos
server.post('/courses', (request, reply) => {
  const { nomeCurso, descricao, valorEmReais } = request.body;

  database.create({
    nomeCurso,
    descricao,
    valorEmReais, 
  });

  return reply.status(201).send();
})

// 4.1.1 Recebe os cursos
server.get('/courses', () => {
  const courses = database.list();

  console.log(courses);
  return courses;
})

// 4.1.3 Altera os cursos existentes
server.put('/courses/update/:id', (request, reply) => {
  const courseId = request.params.id;
  const { nomeCurso, descricao, valorEmReais } = request.body;

  const updateCourses = database.update(courseId, {
    nomeCurso,
    descricao,
    valorEmReais,
  })

  console.log(updateCourses);
  return reply.status(204).send();
})

// 4.1.4 Deleta cursos
server.delete('/courses/delete/:id', (request, reply) => {
  const courseId = request.params.id;

  database.delete(courseId);

  return reply.status(204).send();

})

// 5. Criando a conexão do sistema com o navegador via 'localhost'
server.listen({port: 3333}).then(() => {
  console.log("Servidor dos cursos funcionando com sucesso!");
})