////variables//////

const image = document.getElementById("image");

const button = document.getElementById("submit");


// or can do const image = document.querySelector("#id")

///////normal code////////


button.addEventListener("click", ()=>{

   image.src = "input.value" 

})

//when the submit button is clicked, the image source changes

