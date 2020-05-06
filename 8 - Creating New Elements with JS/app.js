// const input = document.getElementById('input');
// const button = document.getElementById('submit');

// const showhidebtn = document.getElementById('showhide-btn');

// button.addEventListener('click', () => {
//     let listItem = document.createElement('li');
//     let list = document.getElementsByTagName('ul')[0];
//     listItem.textContent = input.value;
//     list.appendChild(listItem);
//     input.value = '';
// })

// //challenge cont'd
// //show/hide list
// //in console, type list.style to find object properties
// //then use list.style.display, it will show 'block' so you can show none
// showhidebtn.addEventListener("click", () => {
//     let list = document.getElementsByTagName('ul')[0];
//     if(list.style.display == 'none') {
//         list.style.display = 'block';
//         showhidebtn.textContent = 'hide';
//     } else {
//         list.style.display = 'none';
//         showhidebtn.textContent = 'show';
//     }
// })
// //inspect the html you can then see inline style as display:"none" added in when button clicked

////////--------------variables----------//////

const input = document.getElementById("input");

const button = document.getElementById("submit");

let list = document.getElementsByTagName("ul") [0];

let shbutton = document.getElementById("showhide-btn");

////---------normal code------------------//////////
//clear the input field when the user presses the submit buttob
//add feature where user can show/hide the list 

// button.addEventListener("click", ()=>{
//     let listItem = document.createElement("li");
//     listItem.textContent = input.value;
//     list.appendChild(listItem);
//     console.log(listItem);
// })


    shbutton.addEventListener("click", () =>{

        if(list.style.display == "none"){
            list.style.display ="block";
            shbutton.textContent ="hide";
        }else {
            list.style.display = "none";
            shbutton.textContent = "show";

        }

    })