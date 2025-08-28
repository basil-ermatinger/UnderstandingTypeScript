type Entity = User | Admin;

class User {
  constructor(public name: string) {}

  join() {
    console.log(`User ${this.name} joined the party!`);
  }
}

class Admin {
  private permissions: string[];

  constructor(permissions: string[]) {
    this.permissions = permissions;
  }

  scan() {
    console.log(`Admin with permissions ${this.permissions.join(", ")} is scanning`)
  }
}

const user = new User("Basil");
const admin = new Admin(["delete", "restore"])

function isUser(entity: Entity): entity is User {
  return entity instanceof User;
}

function init(entity: Entity) {
  if(isUser(entity)) {
    entity.join();
    return;
  }
  entity.scan();
}

init(user);
init(admin);