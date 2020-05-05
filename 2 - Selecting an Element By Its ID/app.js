//variables here

const heading = document.getElementById("heading");

const input = document.getElementById("input");

const button = document.getElementById("button");

//main code here 


button.addEventListener("click",()=>{
    heading.style.color=input.value;
})

//click is user interaction