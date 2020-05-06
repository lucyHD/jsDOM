


const image = document.getElementById("cat");

const button = document.getElementById("submit");


console.log(image.style)

//const image = querySelector("#cat")

button.addEventListener("click", ()=>{

    if(image.style.display == "none"){
        image.style.display = "block";
        button.textContent= "hide";


    }else {
        image.style.display = "none";
        button.textContent = "show";
    }

})

//remember for this one lines 30,31, 35, 36 you are using = the assignment operator. NOT ==. This is because you are assigning the value 'none' to the display. You are assigning the value 'hide' to the content of the button. Line 29 must be == because it is a condition and you are checking if it is true. 


//if the image isn't there, show the image, and change the button to say hide.
//else(so this means if the image IS there), hide the image and change the button to say show. 


//the order is important - before you put anything in there is no input for the display style. So, you need to start with 'if the image display isn't there' because there isn't anything set for the display style. if you started with 'if the image has a display style of block' it wouldn't work, because there is no pre-set display style! 



