const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeButton = document.getElementById("remove"
)
/*add new const below*/

/*from previous ex*/
button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

/*New code below*/

removeButton.addEventListener("click", ()=>{
    let lastItem = document.querySelector('li:last-child');
//need qs to select the last child 
    let list = document.getElementsByTagName('ul') [0];

    list.removeChild(lastItem);


})