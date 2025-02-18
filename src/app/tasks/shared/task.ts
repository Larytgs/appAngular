export class Task {
  id: number;
  description: string;
  completed: boolean;

  constructor(id: number, description: string, completed: boolean) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }
}
//Tem que adicionar os valores padrão às propriedades na declaração
//Caso queira que os valores sejam passados ​​ao criar um objeto, use um construtor
