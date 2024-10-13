const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addtask(){
    if(inputbox.value ===''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerText = "delete";
        li.parentNode.insertBefore(span,li.nextSibling);
        span.addEventListener("click",(e)=> {
            li.remove();
            span.remove();
            
        });
    }
    inputbox.value = "";
}
