const list = document.getElementsByTagName("li");

const items =document.getElementsByClassName("not-orange");

console.log(list);
/////////////////



for (let i=0;i<list.length;i++){

    list[i].style.color="orange";
}
const items =document.getElementsByClassName("not-orange");

for (let i=0; i<items.length;i++){
    items[i].style.color="red";

}
