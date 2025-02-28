// # JavaScript Objects

// Imagine you have a backpack with different pockets, and in each pocket, you can store different types of items. An object in programming is like this backpack - it's a special container that can hold multiple items of different types, and each item has its own labeled pocket.

// ## What are Objects?

// Objects help us organize related data and functions:
// - Instead of creating separate variables for each property, we can group them together.
// - Objects make it easy to work with complex entities: Like a user profile or a product in an online store.
// - Objects allow us to represent real-world things in code: We can have properties (data) and methods (functions) that belong to the object.

// ## Why Do We Use Objects?

// 1. To structure and organize our data
// 2. To represent real-world entities in our code
// 3. To create reusable and modular code
// 4. To make our code more readable and maintainable

// ## Syntax

// ### Basic Object Syntax: Creation

// Objects are created using curly braces {}. Properties are defined as key-value pairs.

// ```javascript
// // Creating an empty object
// let emptyObject = {};

// // Creating an object with properties
// let person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Adding a property to an existing object
// person.job = "Developer";

// console.log(person);
// // Output: { name: "John", age: 30, city: "New York", job: "Developer" }
// ```

// ### Basic Object Syntax: Accessing Properties

// Object properties can be accessed using dot notation or bracket notation.

// ```javascript
// let car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2022
// };

// // Accessing properties with dot notation
// console.log(car.make);  // Output: Toyota

// // Accessing properties with bracket notation
// console.log(car["model"]);  // Output: Corolla

// // Using variables with bracket notation
// let propertyName = "year";
// console.log(car[propertyName]);  // Output: 2022

// // Modifying a property
// car.year = 2023;
// console.log(car.year);  // Output: 2023
// ```

// ## How Objects Work in Real-World Programming

// 1. User Profiles: An object can store a user's basic information.
// 2. E-commerce: Each product can be an object with properties.
// 3. Game Development: Characters can be objects with basic properties.
// 4. Form Handling: Form data can be stored as an object with field names as keys.

// ```javascript
// // User Profile Example
// let user = {
//   name: "Alice Johnson",
//   email: "alice@example.com",
//   age: 28,
//   isActive: true
// };

// // E-commerce Product Example
// let product = {
//   id: "P001",
//   name: "Wireless Headphones",
//   price: 99.99,
//   inStock: true
// };

// // Game Character Example
// let gameCharacter = {
//   name: "Hero",
//   health: 100,
//   level: 1,
//   weapon: "sword"
// };

// // Form Data Example
// let formData = {
//   firstName: "John",
//   lastName: "Doe",
//   email: "john.doe@example.com",
//   age: 30
// };
// ```

// ## Creating Objects

// In JavaScript, we can create objects in two ways:
// - Using object literals
// - Using the Object constructor

// ## Accessing Object Properties

// We can access properties in an object using dot notation or bracket notation.

// ## Modifying Objects

// We can change or add properties in an object.

// ## Object Methods

// Arrays have many built-in methods that make them powerful. Objects can also contain functions, which we call methods.

// ### Object.keys()

// Object.keys() returns an array of a given object's own enumerable property names.

// ```javascript
// let car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2022
// };

// let keys = Object.keys(car);
// console.log(keys);
// // Output: ["make", "model", "year"]

// // Looping through keys
// for (let i = 0; i < keys.length; i++) {
//   let key = keys[i];
//   console.log(key + ": " + car[key]);
// }
// // Output:
// // make: Toyota
// // model: Corolla
// // year: 2022
// ```

// ### Object.values()

// Object.values() returns an array of a given object's own enumerable property values.

// ```javascript
// let person = {
//   name: "Alice",
//   age: 30,
//   city: "New York"
// };

// let values = Object.values(person);
// console.log(values);
// // Output: ["Alice", 30, "New York"]

// // Looping through values
// for (let i = 0; i < values.length; i++) {
//   console.log(values[i]);
// }
// // Output:
// // Alice
// // 30
// // New York
// ```

// ### Object.entries()

// Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

// ```javascript
// let fruit = {
//   name: "Apple",
//   color: "Red",
//   sweetness: 8
// };

// let entries = Object.entries(fruit);
// console.log(entries);
// // Output: [["name", "Apple"], ["color", "Red"], ["sweetness", 8]]

// // Looping through entries
// for (let i = 0; i < entries.length; i++) {
//   let key = entries[i][0];
//   let value = entries[i][1];
//   console.log(key + ": " + value);
// }
// // Output:
// // name: Apple
// // color: Red
// // sweetness: 8
// ```

// ## Practice Exercises

// [Exercise instructions remain the same as in the previous message]

// ## Recap

// - Objects are like containers that can hold multiple properties and methods.
// - We can create, access, and modify properties in objects.
// - Objects can have methods (functions) as properties.

// ## Questions?

// - What part of objects do you find most interesting?
// - Can you think of any situations in your life where you might use an object?
// - Let's try some more exercises together!