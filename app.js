const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Welcome to Magical Store, ${username}!`);
//dont touch anything above this line

//Fantasy Store
// Go through 3 departments
// Choose three ingredients
// Objective to obtain fountain of youth potion
// Riddles to obtain resource from the department in store

const magicalStore = {
    beauty: [
        'lipstick' ,'nail polish',  'mascara'
    ],
    organics: [
        'dragon fuit', 'seaweed', 'eye of newt'
    ],
    pharmacy: [
        'alcohol', 'epsom salt', 'asprin'
    ],
}

let age = prompt('How old are you? ');
age = Number(age)
// console.log(typeof age)
//resouce for this line of code is https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
console.log(`${age}, hmm? Looks like you only have ${77 - age} years left in this world. But you could have more...`)

const youthful = prompt('Would you like to live forever?(y/n) ');
if (youthful === 'y'){
    console.log('Come and choose one item from each of our departments!')//enter riddle here
} else {
    console.log('fin')
    process.exit(0)
    //this means it will close the game 0 means it will exit without an error
}

console.log('riddle')
//solution is lipstick, seaweed, epsomsalt 

const beautyItem = []

const organicsItem =[]

const pharmacyItem =[]

while (true){
    console.log('We have three wonderful departments in our Magical Store: Beauty, Organics & Pharmacy.')
    // break//this prints this one time and then jumps out of the loop
    const department = prompt('What department would you like to vist? ').trim()//this takes off any white space beofore or after their input
    if (department.toLowerCase() === 'beauty'){
        console.log(magicalStore.beauty)
        while (true){
            const beautySelection = prompt("What item would you like? ")
            if (magicalStore.beauty.includes(beautySelection)){ //found this method on stack overflow
            
            } else {console.log('Error')}
        }
    }else if(department.toLowerCase() === 'organics'){
        console.log(magicalStore.organics)
        while (true){
            const organicsSelection = prompt("What item would you like? ")
            if (magicalStore.organics.includes(organicsSelection)){ //found this method on stack overflow
            
            } else {console.log('Error')}
        }
    }else if(department.toLowerCase() === 'pharmacy'){
        console.log(magicalStore.pharmacy)
        while (true){
            const pharmacySelection = prompt("What item would you like? ")
            if (magicalStore.pharmacy.includes(pharmacySelection)){ //found this method on stack overflow
            
            } else {console.log('Error')}
        }
        }
    }else if(department.toLowerCase() === 'exit'){
        console.log("Thank you for shopping with us!")
        process.exit(0)
    }else{
        console.log("Please choose a department.")
    }
}


//toni adding items to array
//taihlor checking if the arrays are full
//fiona is working on checkout is the correct selection




