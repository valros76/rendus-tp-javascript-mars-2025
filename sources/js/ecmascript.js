let username = null;
let displayName = username ?? "Utilisateur anonyme"; 
console.log(displayName); // "Utilisateur anonyme"

let user = { profile: { name: "Alice" } };
console.log(user?.profile?.name); // "Alice"
console.log(user?.address?.city); // undefined (pas d'erreur)

let big = 1234567890123456789012345678901234567890n;
console.log(big * 2n); 

let obj = { data: "Important" };
let weakRef = new WeakRef(obj);

let price = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(123456.789);
console.log(price); // "123 456,79 €"

let arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]

let numbers = [1, 2, 3];
console.log(numbers.flatMap(n => [n, n * 2])); 
// [1, 2, 2, 4, 3, 6]

let arrTwo = [1, 2, 3, 4, 5];
console.log(arrTwo.findLast(n => n % 2 === 0)); // 4
console.log(arrTwo.findLastIndex(n => n % 2 === 0)); // 3

let entries = [["a", 1], ["b", 2]];
let objTwo = Object.fromEntries(entries);
console.log(objTwo); // { a: 1, b: 2 }

let userObj = { name: "Alice" };
console.log(Object.hasOwn(userObj, "name")); // true
console.log(Object.hasOwn(userObj, "toString")); // false (hérité du prototype)
