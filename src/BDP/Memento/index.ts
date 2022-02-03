class EditorMemento {
  public constructor(protected content: string) {}

  public getContent() {
    return this.content;
  }
}

class Editor {
  protected content: string = "";

  public type(words: string) {
    this.content = `${this.content} ${words}`;
  }

  public getContent() {
    return this.content;
  }

  public save() {
    return new EditorMemento(this.content);
  }

  public restore(memento: EditorMemento) {
    this.content = memento.getContent();
  }
}

const editor = new Editor();

editor.type("Test first sentence");
editor.type("Test second sentence");

const saved = editor.save();

editor.type("Third sentence");

console.log(editor.getContent());

editor.restore(saved);

editor.type("Another sentence");

console.log(editor.getContent());

export {};
