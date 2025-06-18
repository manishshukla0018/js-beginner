// Immediately Invoked Function Expression(IIFE)


// Sometime we have a problem with global variables
// so remove the problem of global of local variable we use IIFE

(function chai()
{
    // Named IIFE
    console.log(`DB connected`);
    
}());

((name) =>
{
    // Unnamed IIFE
  console.log(`DB connected Two ${name}`)  
})("Manish")
