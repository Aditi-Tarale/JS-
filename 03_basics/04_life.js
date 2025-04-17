//Immediately Invoked Function Expressions (IIFE)



(function chai()
{
    // named IFIE
    console.log('DB CONNECTED');
    
})();

((name) =>
  {
    console.log(`DB CONNECTED TWO ${name}`);
    
  }
)('Aditi')