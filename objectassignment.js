//1. Create a dog object that has the properties height, breed, weight, and 
//a method called bark that logs "Woof" to the console
const dog = { 
    height: "30'", //property - key:value pair 
    breed: "pomeranian", //object literal 
    weight: "22lbs", 
    bark (){console.log(woof)} 
}

//2. Create a house object that has properties squareFootage, numberOfBedrooms, 
//and numberOfBathrooms. Log these three properties to the console. 

const house = { 
    squareFootage: "3000sq feet",
    numberOfBedrooms: "4", 
    numberOfBathrooms: "5", 
}

console.log(`Square Footage: ${house.squareFootage}`); 
console.log(`Number of Bedrooms: ${house.numberOfBedrooms}`); 
console.log(`Number of Bathrooms: ${house.numberOfBathrooms}`); 


/*3. Write a program that creates an account object with the following characteristics:
A name property set to "Alex".
A balance property set to 0.
A credit method adding the value passed as an argument to the account balance.
A debit method that subtracts the value passed as an argument from the account balance.
A describe method logging the account balance
Use this object to log its balance, crediting 250, debiting 80, then log its balance again.
*/

const Alex = { 
    balance: "0", //property - key:value pair 
    breed: "pomeranian", //object literal 
    weight: "22lbs", 
    bark (){console.log(woof)} 
}

const account = { 
    name: "Alex", 
    balance: 0, 
    credit: function(amount) {this.balance + amount;}, 
        debit: function(amount) {this.balance - amount;}, 
        describe: function() { 
        console.log(`Account holder: ${this.name}`); 
        console.log(`Balance: $${this.balance}`); 
    } 
}; 
