"use strict";
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    join() {
        console.log(`User ${this.name} joined the party!`);
    }
}
class Admin {
    permissions;
    constructor(permissions) {
        this.permissions = permissions;
    }
    scan() {
        console.log(`Admin with permissions ${this.permissions.join(", ")} is scanning`);
    }
}
const user = new User("Basil");
const admin = new Admin(["delete", "restore"]);
function isUser(entity) {
    return entity instanceof User;
}
function init(entity) {
    if (isUser(entity)) {
        entity.join();
        return;
    }
    entity.scan();
}
init(user);
init(admin);
