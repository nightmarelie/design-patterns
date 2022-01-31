interface WebPage {
  getContent();
}

class About implements WebPage {
  protected theme: Theme;
  public constructor(theme: Theme) {
    this.theme = theme;
  }

  public getContent() {
    return `About page in ${this.theme.getColor()}`;
  }
}

class Careers implements WebPage {
  protected theme: Theme;
  public constructor(theme: Theme) {
    this.theme = theme;
  }

  public getContent() {
    return `Careers page in ${this.theme.getColor()}`;
  }
}

interface Theme {
  getColor(): string;
}

class DarkTheme implements Theme {
  public getColor() {
    return "Dark Black";
  }
}

class Lightheme implements Theme {
  public getColor() {
    return "White";
  }
}
class AquaTheme implements Theme {
  public getColor() {
    return "Light blue";
  }
}

const darkTheme = new DarkTheme();
const aquaTheme = new AquaTheme();

const aboutPage = new About(darkTheme);
const careersPage = new Careers(aquaTheme);

console.log(aboutPage.getContent());
console.log(careersPage.getContent());
