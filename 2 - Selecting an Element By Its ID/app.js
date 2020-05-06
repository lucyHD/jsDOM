//variables here - const because not going to change the name. Using them to get something out!

const heading = document.getElementById("heading");
// variable name = document. method (in the brackets the ID name of heading)
// going into the document and get the element with that specific ID
const input = document.getElementById("input");

const button = document.getElementById("button");

//main code here 


button.addEventListener("click",()=>{
    heading.style.color=input.value;
})

//click is user interaction