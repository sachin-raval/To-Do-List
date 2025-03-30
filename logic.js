let input = document.querySelector(".addTask input");
let task = document.querySelector(".task");
let btn = document.querySelector(".addTask button");


btn.addEventListener("click" , (e)=>{
    e.preventDefault();
    addTask();
})

function addTask (e) {
    if(input.value == ""){
        alert("Please Enter You Task!")
    }else {
        let div = document.createElement("div");
        task.appendChild(div);
        let p = document.createElement("p");
        p.innerHTML = input.value;
        div.appendChild(p);
        let span = document.createElement("span");
        span.innerHTML = "&#10006;";
        div.appendChild(span);
    }
    input.value = "";
    saveData()
}

task.addEventListener("click", (e)=>{
    if(e.target.tagName === "P"){
        e.target.classList.toggle("completeTask")
        saveData()
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
} , false)

function saveData(){
    localStorage.setItem("data" , task.innerHTML);
}

function getData(){
    task.innerHTML = localStorage.getItem("data");
}

getData();