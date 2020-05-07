const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
const listItem = document.getElementsByTagName('li');
const list = document.getElementById('list'); // this is ul

button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

/*New code below*/

list.addEventListener("click", (event)=>{
    if (event.target.tagName == "LI"){
        let li = event.target;
        let ul = li.parentNode;
        ul.removeChild(li); 
    }
})