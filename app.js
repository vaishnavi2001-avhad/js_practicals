let argv = require("yargs").argv;
console.log("Name : Vaishnavi Avhad\nRoll no.: 42406\nABC Id : 195-606-204-800")
let a = argv.a; //= parseInt(prompt('Enter an integer: '));
let b = "";
let i;
console.log("Using For");
for (i = 1; i <= 10; i++)
 { b = i + "*" + a + "=" + (i * a); 
    console.log(b); } 
    console.log("using while");
     i = 1; while (i<= 10) 
        { b = i + "*" + a + "=" + (i * a); 
        console.log(b); i++; } 
        console.log("using do while");
         i = 1;
          do {
                b = i + "*" + a+ "=" + (i * a); 
                console.log(b); i++;
            } while (i <= 10);



    