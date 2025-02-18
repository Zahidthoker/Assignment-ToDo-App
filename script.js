
const inputValue = document.getElementById('text-input-box');
const addButton = document.getElementById('add-btn');

const taskList = document.getElementById('task-list');

addButton.addEventListener('click', () => {
   const task_list =  document.createElement("div");
   task_list.className = "list";
   
  
   const listItem = document.createElement('li');
   

   const trash = document.createElement('i');
   trash.className = "fa-sharp fa-solid fa-trash"

   const checkBox = document.createElement('input');
   checkBox.type = "checkbox";


   listItem.appendChild(checkBox);
   const text = document.createTextNode(inputValue.value);
   listItem.appendChild(text);
   task_list.appendChild(listItem);
   task_list.appendChild(trash);
  
   taskList.appendChild(task_list);

   inputValue.value = "";
//    console.log(task_list);
});
