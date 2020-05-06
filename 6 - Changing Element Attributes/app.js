////variables//////

const image = document.getElementById("image");

const button = document.getElementById("submit");


// or can do const image = document.querySelector("#id")

///////normal code////////


button.addEventListener("click", ()=>{

    image.src=input.value 

})

// //when the submit button is clicked, the image source changes to the inputted image url (and then submitted!)


//button is the target, add Event Listener is the method followed by two arguments and a callback function. The arguement is called when the event occurs. 
 