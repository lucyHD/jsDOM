////variables///

const placeholder =document.getElementById("placeholder");

const input = document.getElementById("input");

const submit = document.getElementById("submit");

const list = document.getElementById("list");


/////normal code///////


// submit.addEventListener("click", () =>{
//     placeholder.style.color = "goldenrod";
//     placeholder.textContent = input.value;
// })


submit.addEventListener("click", () =>{    
    
    placeholder.style.color = "goldenrod";
    placeholder.textContent = `<li>${input.value}</li>`;
    list.textContent = `<li>${input.value}</li>`
 })

 //with line 25, textContent will replace the list with the full template literal, including tags. This is because it reads it as text.
 //if we put innerHTML, it will read it as HTML and make it a list item with bullet point.