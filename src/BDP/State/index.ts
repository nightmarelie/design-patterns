interface WritingState {
  write(words: string);
}

class UpperCase implements WritingState {
  public write(words: string) {
    console.log(words.toUpperCase());
  }
}

class LowerCase implements WritingState {
  public write(words: string) {
    console.log(words.toLowerCase());
  }
}

class DefaultText implements WritingState {
  public write(words: string) {
    console.log(words);
  }
}

class TextEditor {
  public constructor(protected state: WritingState) {}

  public setState(state: WritingState) {
    this.state = state;
  }

  public type(words: string) {
    this.state.write(words);
  }
}

const editor = new TextEditor(new DefaultText());

const typedText = "Line In This Case";

editor.type(typedText);

editor.setState(new LowerCase());
editor.type(typedText);

editor.setState(new UpperCase());
editor.type(typedText);

export {};
