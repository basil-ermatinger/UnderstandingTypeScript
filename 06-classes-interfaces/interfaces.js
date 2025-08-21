"use strict";
// interface as object type
let user;
user = {
    email: "test@example.com",
    password: "abc1",
    login() {
        console.log(`Login with email ${this.email} and password ${this.password}`);
    },
    logout() {
        console.log("Logout");
    }
};
user.login();
user.logout();
