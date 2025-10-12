/******************************************************************
 * Indexed Access Types
 ******************************************************************/

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser["permissions"];

/******************************************************************
 * Accessing Array Elements with Indexed Arrays
 ******************************************************************/

type Perm = Perms[number];

type Names = string[];
type Name = Names[number];