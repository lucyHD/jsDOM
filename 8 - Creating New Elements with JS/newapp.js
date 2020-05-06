////////--------------variables----------//////

const input = document.getElementById("input");

const button = document.getElementById("submit");

let list = document.getElementsByTagName("ul") [0];

let button2 = document.getElementById("showhide-btn");

////---------normal code------------------//////////
//clear the input field when the user presses the submit buttob
//add feature where user can show/hide the list 

button.addEventListener("click", ()=>{
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    console.log(listItem);
})


button.addEventListener("click", ()=>{
    list.display = "none"
    

}


)

