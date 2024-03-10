// typescript is the superset of javascript.
// it requires compiler to compile the code into js as the browser doesnt understand the typescript.

// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 12;

let userName: string | string[] = "Yash";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];

let person: { name: string, age: number };

person = {
  name: "Yash",
  age: 23
};

let people:{ name: string, age: number }[]; // array of such objects

// Type inference

let course = "React - The Complete Guide";

//course = 123; error because type is inferred as a string not a number.

let union: string | number = "Hello World";
union = 123456;