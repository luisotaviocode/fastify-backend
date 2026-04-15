// Criando banco de dados em memória (salvamento temporário)
import { randomUUID } from "node:crypto";

// Criando objeto 'DatabaseMemory'
export class DatabaseMemory {
    #courses = new Map();

    // Listar cursos
    list(){
        return Array.from(this.#courses.entries()).map((coursesArray) => {
            const id = coursesArray[0]
            const data = coursesArray[1]

            return {
                id,
                ...data,
            }
        })
    }

    // Criar cursos
    create(course){
        const courseId = randomUUID();

        this.#courses.set(courseId, course);
    }

    // Atualizar cursos
    update(id, course){
        this.#courses.set(id, course);
    }

    // Deletar cursos
    delete(id){
        this.#courses.delete(id);
    }
}