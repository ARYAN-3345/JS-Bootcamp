const myObject = {
    "name": "Aryan", //key values: name, age, isStudent etc... Keys are always followed by ":" for their definition
    "age": 21,
    "isStudent": true,
    "hobbies": ["reading", "coding"],
    "address": {
        "city": "Parel",
        "pinCode": "400012"
    }
}

// how to access information -> Use the dot notation

console.log(`Name: ${myObject.name}`);
console.log(`Zip Code: ${myObject.address.pinCode}`);
console.log(`Favorite Hobby: ${myObject.hobbies[0]}`);