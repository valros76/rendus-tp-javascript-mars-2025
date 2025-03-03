import helloWorld, {hello as h, age, User} from "./export";
import * as myModule from "./export";

console.log(helloWorld());
console.log(h());
console.log(age());
console.log(User.name());

console.log(myModule.hello());
console.log(myModule.age());
console.log(myModule.helloWorld());
const user = new myModule.User("test");
console.log(user.name);