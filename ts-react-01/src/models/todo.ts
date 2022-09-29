class Todos {
  id: string;
  title: string;

  constructor(titleText: string) {
    this.id = Math.random().toString();
    this.title = titleText;
  }
}

export default Todos;
