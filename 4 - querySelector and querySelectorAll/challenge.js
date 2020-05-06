//cycle over the list items and apply colors from the array called colours
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

const listItems2 = document.querySelectorAll("li");

///////////////normal code///////////////////////////

for(i=0; i < listItems2.length; i++){

    listItems2[i].style.color = colours[i]
}


////need colours [i] because this is the index, and it will go through the colours array as well 

