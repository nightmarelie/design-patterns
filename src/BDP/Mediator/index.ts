interface ChatRoomMediator {
  showMessage(user: User, message: string);
}

class User {
  constructor(
    protected name: string,
    protected chatMediator: ChatRoomMediator
  ) {}

  public getName(): string {
    return this.name;
  }

  public send(message: string) {
    this.chatMediator.showMessage(this, message);
  }
}

class ChatRoom implements ChatRoomMediator {
  public showMessage(user: User, message: string) {
    const sender = user.getName();
    console.log(`${sender}: ${message}`);
  }
}

const chatRoom = new ChatRoom();

const john1 = new User("John", chatRoom);
const jain1 = new User("Jain", chatRoom);

john1.send("hello");
jain1.send("hoollaa");

export {};
