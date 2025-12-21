//Strings
let name1 = "Harry";         //correct
let friend = 'Prakash'      //correct
//let wrong = 'Harry";        //wrong, never do this!

let age = 29;
let ageAsString = age.toString();
console.log(typeof ageAsString); //string

//Template Literals
const name = "Rayyan";
const favorite = "Pepsi";
const sentence1 = name + " hates " + favorite;
console.log(sentence1); // Output: "Rayyan loves Pepsi"
const sentence2 = `${name} loves ${favorite}`;
console.log(sentence2); // Output: "Rayyan loves Pepsi"

//Escape Sequences
let sentence = 'She said, "Hello!"';
console.log(sentence);                  // Output: She said, "Hello!"

sentence = "She said, \"Hello!\"";
console.log(sentence);                  // Output: She said, "Hello!"

sentence = "She said, \"Hello!\"";      // Output: She said, "Hello!"

let sentence3 = "Hello\nWorld";
console.log(sentence3); // Output:   Hello
                         //         World

let sentence4 = "Hello\tWorld";
console.log(sentence4); // Output: Hello   World

let sentence5 = "Hello\n\tWorld";
console.log(sentence5); // Output: Hello
                         //         World
let sentence6 = "Hello\r World";
console.log(sentence6); // Output: Hello
                         //         World