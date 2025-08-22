interface IAuthenticatable {
  email: string;
  password: string;
  login(): void;
  logout(): void;
}

// Merge interface

interface IAuthenticatable {
  role: string;
}

// interface as object type

let user: IAuthenticatable;

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
}

user.login();
user.logout();

// implementing interfaces

class AuthenticatableUser implements IAuthenticatable {
  constructor(public userName: string, public email: string, public password: string, public role: string) {}

  login() {
    console.log(`${this.userName} is logging in with email ${this.email} and password ${this.password} and role ${this.role}`);
  }

  logout() {
    console.log("Logout");
  }
}

const authenticatableUser: AuthenticatableUser = new AuthenticatableUser("Basil", "basil@test.ch", "abc123", "admin");

authenticatableUser.login();
authenticatableUser.logout();