// train-modules.js
import { hello, age, User } from "./export.js";

console.log(hello()); // "Hello!"
console.log(age); // 30
const user = new User("Alice");
console.log(user.name); // "Alice"

import { hello as sayHello } from "./export.js";
console.log(sayHello()); // "Hello!"

import helloWorld from "./export.js";
console.log(helloWorld()); // "Hello, world!"

import * as myModule from "./export.js";

console.log(myModule.hello()); // "Hello!"
console.log(myModule.age); // 30
const newUser = new myModule.User("Alice");
console.log(newUser.name); // "Alice"

async function loadModule() {
  const module = await import("./export.js");
  console.log(module.hello()); // "Hello!"
}
loadModule();
