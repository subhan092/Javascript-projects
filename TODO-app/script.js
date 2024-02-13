let input = document.getElementById("input-box");
let btn = document.getElementById("add");
const listContainer = document.getElementById("list-container");

function add() {
    if (input.value === '') {
        alert("please enter some value to add");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
          
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
        
        
    }
    input.value= '';
    savedata();
}

listContainer.addEventListener("click",(e)=>{
  if(e.target.tagName ===  "LI"){
      e.target.classList.toggle("checked") ;
      savedata();

  }
  else if(e.target.tagName === "SPAN" ){
            e.target.parentElement.remove();
            savedata();
  }
},
false)

function savedata() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showStoredData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showStoredData();