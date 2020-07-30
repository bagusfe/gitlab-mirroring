var golden = () => {
    console.log("This is Golden")
}
console.log("---Soal 1---");
golden();

console.log("---- Soal 2 ----")
newFunction = (firstName, lastName) => {
    firstName
    lastName
    return {
        fullName() {
            return console.log(firstName + " " + lastName)
        }
    }
}
newFunction("William", "Imoh").fullName();


console.log("---- Soal 3 ----")

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation)

console.log("---- soal 4 ----")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

let combinedArray = [...west, ...east];
//Driver Code
console.log(combinedArray)

console.log("--- soal 5 ---")
const planet = 'earth'
const view = 'glass'
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit ${planet} do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
console.log(before);