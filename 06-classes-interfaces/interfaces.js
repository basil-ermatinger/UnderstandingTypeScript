"use strict";
// interface as object type
let user;
user = {
    email: "test@example.com",
    password: "abc1",
    role: "admin",
    login() {
        console.log(`Login with email ${this.email} and password ${this.password} and role ${this.role}`);
    },
    logout() {
        console.log("Logout");
    }
};
user.login();
user.logout();
// implementing interfaces
class AuthenticatableUser {
    userName;
    email;
    password;
    role;
    constructor(userName, email, password, role) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    login() {
        console.log(`${this.userName} is logging in with email ${this.email} and password ${this.password} and role ${this.role}`);
    }
    logout() {
        console.log("Logout");
    }
}
const authenticatableUser = new AuthenticatableUser("Basil", "basil@test.ch", "abc123", "admin");
authenticatableUser.login();
authenticatableUser.logout();
// Ensuring base types with interfaces
const authenticate = (user) => {
    user.email = "auth@test.ch";
    user.password = "abc";
    user.role = "user";
    user.login();
    user.logout();
};
authenticate(user);
class AdminUser {
    userName;
    email;
    password;
    role;
    adminPermission;
    constructor(userName, email, password, role, adminPermission) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.adminPermission = adminPermission;
    }
    login() {
        console.log(`${this.userName} is logging in with email ${this.email} and password ${this.password} and role ${this.role}`);
        console.log(`Has admin permission \"${this.adminPermission}\"`);
    }
    logout() {
        console.log("Admin logout");
    }
}
const adminUser1 = new AdminUser("AdminName", "admin@test.ch", "abc123", "administrator", "superadmin");
adminUser1.login();
adminUser1.logout();
