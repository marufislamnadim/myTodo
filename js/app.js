// Write Your Javascript Code here
// Your task is to check
// whether an user is trying to add 
// an empty todo into the list
// Also add a search bar to search throygh the todo-list

//caching the DOM element 
const todoList = document.querySelector(".todo-list"); 
const form = document.querySelector("form");
const formInput = document.querySelector(".todo-input");
const inputBtn = document.querySelector(".todo-button");
const checkBtn = document.querySelector(".check");
const delBtn = document.querySelector(".trash");

// creating and adding events here 

form.addEventListener('submit', function(event){
    event.preventDefault();
    //capturing user input
    const userInput = formInput.value;
    // creating div
    const todoDiv = document.createElement('div');
    todoDiv.className = "todo";
    //creating <li> and apending into parent node
    const todoLi = document.createElement('li');
    todoLi.className = "todo-item";
    todoLi.innerText = userInput;
    todoDiv.append(todoLi);
    // creating check <button> and apending into parent node
    const checkBtn = document.createElement('button');
    checkBtn.className = "check";
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.append(checkBtn);
    // creating delete <button> and apending into parent node
    const delBtn = document.createElement('button');
    delBtn.className = "trash";
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.append(delBtn);
    // appending todoDiv into its parent node.
    todoList.append(todoDiv);
    // save todo list into local storage
    // saveToLocalStorage(userInput); 
    //vaccanting the input value
    formInput.value = "";
}); 

// // check button defines here 

// checkBtn.addEventListener('click',function(){
//     const todoDiv = checkBtn.parentNode;
//     // todoDiv.className = "todo completed";
//     todoDiv.classList.add("completed");
// });

// // delete button defines here 
// delBtn.addEventListener('click', function(){
//     const todoDiv = delBtn.parentNode;
//     todoDiv.classList.add("drop-effect");
//     // setTimeout(function(){
//     //     todoDiv.remove();
//     // }, 3000);

//     todoDiv.addEventListener("transitioned", function(){
//         todoDiv.remove();
//     })
    
// });

todoList.addEventListener("click", function(event){
    const targetElement = event.target;
    if(targetElement.className === "check"){
        const todoDiv = targetElement.parentNode;
        todoDiv.classList.add("completed");
    }
    else if(targetElement.className === "trash"){
        const todoDiv = targetElement.parentNode;
        todoDiv.classList.add("drop-effect");
        setTimeout(function(){
        todoDiv.remove();
        }, 3000);
    }
});

// implementing local storage functionality 

function saveToLocalStorage(todo){
    let todoArray;
    if(localStorage.getItem("todo") == null){
        const todoList = localStorage.getItem("todos");
        todoArray = JSON.parse(todoList);
    } else {
        todoArray = [];
    }
    todoArray.push(todo);
    localStorage.setItem("todo", JSON.stringify(todoArray));
}