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

// Ensuring base types with interfaces

const authenticate = (user: IAuthenticatable): void => {
  user.email = "auth@test.ch";
  user.password = "abc";
  user.role = "user";

  user.login();
  user.logout();
}

authenticate(user);

// Extending interfaces

interface IAuthenticatableAdmin extends IAuthenticatable {
  adminPermission: "admin" | "superadmin";
}

class AdminUser implements IAuthenticatableAdmin {
  constructor(public userName: string, public email: string, public password: string, public role: string, public adminPermission: "admin" | "superadmin") {}

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

