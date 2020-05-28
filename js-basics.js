console.clear();
//I'm a single line comment looking for love
/*
I'm a multi-line comment who can't catch a break
*/

// Mutable variables (can change)
var dontUseTheseAnymore = true; 
let useThisInstead = true; // scoped to blocks {}

//Non-mutable variables (cannot change)
const useTheseAsMuchAsPossible = true;

//Error handling
try {
useTheseAsMuchAsPossible = false;
} catch (e){
    console.log(e.toString());
}

let outsideBlock = "Look at me";
{
    console.log(outsideBlock);
    let insideBlock = "YOu can't see me";
}

try {
    console.log(insideBlock);
    } catch (e){
        console.error(e.toString());
    }

    if (true) {
        let name = "Mariana Lima";
    }

    try {
        console.log(name);
    } catch (e) {
        console.error(e.toString());
    }

    // Arrays
    /* outdate syntax
    var arr = new Array();
    arr.push(1, 3, 5);
    console.log(arr);
    */
    
    //cleaner syntax
    const arr = [1, 3, 5]; // array literal- been defined within brackets
    console.log(arr);

    try{
        arr = "Shaun";
    } catch (e) {
        console.error(e.toString());
    }

    arr[1] = 6; // changing array by index
    console.log(arr);

    // Objects
    const obj = {
        name: 'Mariana',
        age: 31,
        dob: '1988-08-26',
        'my name': 'ML'
    };
    // object= {what's inside brackets} | properly= name,age,dob | value= 'Mariana','31','1988-08-26'
    console.log(obj['name']); // can dynamically get properties using index reference
    console.log(obj.name); // property can't have spaces ex. 'my name'
    console.log(obj['my name']);

    // Control structures
    let direction; // declared variable, not initialized
    if (obj.age > 20){
        direction = "down";        
    } else {
        direction = "up";
    }
    console.log("It's all " + direction + " hill from here"); // concatenation
    console.log(`It's all ${direction} hill from here`); // string interpolation or string templates - backticks technically slower as a quotes character
    console.log(`
        Hello Dave
        How are you today.
    `); // backticks allow formatting

    switch (direction) {
        case 'up':
            console.log("Go get em tiger");
            break;
        default:
            console.log("You better rest.");        
    }

    switch (true) {
        case 5 < 7:
            console.log("yep");
            break;
    } // cool way to use switch

    // Loops
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    for (let item of arr) {
        console.log(item);
    }

    for (let item of ['a', 'b', 'c']) {
        console.log(item);
    }

    for (let key in obj) {
        console.log(key); // returns property
        console.log(obj[key]); // returns value
    }

    // Functions
    function sayHello (name) {
        console.log(`Hello, ${name}`);
    }
    sayHello('Mariana'); // executes it
    
    const helloFunc = sayHello; // just function definition
    console.log(helloFunc); 
    helloFunc('Kevin'); // executes function



