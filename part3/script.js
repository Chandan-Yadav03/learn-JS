//example1
document.getElementById("changeTextButton")
    .addEventListener("click", function (){
        let paragraph=document.getElementById("myParagraph");
        paragraph.textContent="the paragraph is changed";
    });

//example2
document.getElementById("highlightFirstCity").addEventListener("click",function(){
    let cityList=document.getElementById("cityList");
    cityList.firstElementChild.classList.add("highlight");

});

//example-3
document.getElementById("changeOrder").addEventListener("click",function(){
    let coffeeType=document.getElementById("coffeeType");
    coffeeType.textContent="Espresso";
    coffeeType.style.backgroundColor="blue";
})

//example-4
document.getElementById("addNewItem").addEventListener("click",function(){
    let newItem=document.createElement("li");
    newItem.textContent="Eggs";
    document.getElementById("shoppingList").appendChild(newItem);
})

//example-5
document.getElementById("removeLastTask").addEventListener("click",function(){
    let taskList= document.getElementById("taskList");
    taskList.lastElementChild.remove();
})