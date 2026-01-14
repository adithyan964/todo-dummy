const additem=()=>{
    //read userinput from textbox
    let userinput=document.querySelector("#ip").value
    //create list item
    let listitem=document.createElement("li")
    listitem.textContent=userinput
    //target the list
    let list=document.querySelector("#td")
    //add item to the list
    list.appendChild(listitem)
}

let btn=document.querySelector("#btn")
//document.getElementid("btn")
btn.addEventListener("click",additem)
