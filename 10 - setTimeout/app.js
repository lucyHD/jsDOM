window.setTimeout((something)=> {
    console.log(something);
}, 5000, "Greetings Everyone");

//so here this is an anonymous function (because the documentation says to use this with .setTimeout)

//remember the syntax for .setTimeout scope.setTimeOut(function, [time delay, paramenter]) remember in the syntax, the square brackets just mean it's optional 

//the scope is window 


//this is a function to be executed after the timer expires 

// we use milliseconds for JS. 1000 ms = 1 second 

//5000 is the time delay 