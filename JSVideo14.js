//String Methods
//String Length
let name = "Harry";
console.log(name.length); // Output: 5

//toUpperCase() and toLowerCase()
console.log(name.toUpperCase()); // Output: HARRY
console.log(name.toLowerCase()); // Output: harry

//slice()
console.log(name.slice(2, 4)); // Output: rr
console.log(name.slice(1, 3)); // Output: ar
console.log(name.slice(2)); // Output: rry

//replace()
console.log(name.replace("ry", "is")); // Output: Hais
console.log(name.replace("Ry", "is")); // This will not work because "Ry" is not present in the string

//trim()
let spacedName = "       Harryy        ";
console.log(spacedName.trim()); // Output: Harry

//indexOf()
console.log(name.indexOf("r")); // Output: 2
console.log(name.indexOf("R")); // This will give -1 because "R" is not present in the string

//Indexing
console.log(name); // Output: Harry
console.log(name[0]); // Output: H
console.log(name[1]); // Output: a
console.log(name[2]); // Output: r
console.log(name[3]); // Output: r
console.log(name[4]); // Output: y

let name1 = "Harry";
let upperCaseName = name.toUpperCase();
console.log(upperCaseName); // Output: HARRY
console.log(name1); // Output: Harry (original string is unchanged)