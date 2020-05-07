const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
const listItem = document.getElementsByTagName("li");

/*declare new const*/

button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';//clears the input box after item added to list
})

removeBtn.addEventListener('click', () => {
    let listItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];

    list.removeChild(listItem);
})

/*New code below*/

for (let i = 0; i<listItem.length; i++){
    listItem[i].addEventListener("mouseover", ()=>{
        listItem[i].textContent = listItem[i].textContent.toUpperCase(); });
    listItem[i].addEventListener("mouseout", ()=>{
        listItem[i].textContent =listItem[i].textContent.toLowerCase(); });
    }


///however, it's better NOT to have the for loop, as takes longer. We can't just have the statements, as without the for loop, i is not defined. 



