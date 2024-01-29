// Immediately Invoked Function Expression (IIFE)


(function chai () {
    // Named IIFE  (EX- function chai)
    console.log(`DB CONNECTED`);
})();

( (name)=> {
    // Un-Named IIFE 
    console.log(`DB CONNECTED TWO ${name}`);
} )('PRITHVI')

// *************** INTERVIEW QUESTION ***********************

/* IIFE jo function imediatedly execute ho jaye 
+++ MAIN POINT +++
Global scope k pollution se problem hoti hai kai bar tho use global scope k jo variable hai ya jo bhi vaha pe declaration hai us k pollution ko hatane k humne IIFE  ka use kiya
 Agar two IIFE ek sath likhna hai tho phele frist wale ko close kare dene ka with a semicolon ; 
 */
