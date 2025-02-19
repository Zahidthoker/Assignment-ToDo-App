
const inputValue = document.getElementById('text-input-box');
const addButton = document.getElementById('add-btn');

const taskList = document.getElementById('task-list');
let listNumer = 0;
addButton.addEventListener('click', () => {
   if(inputValue.value === ""){
      addButton.disabled = true;}
 else{
   listNumer++;
   const task_list =  document.createElement("div");
   task_list.className = `list`;
   task_list.id = `list${listNumer}`;
   
  
   const listItem = document.createElement('li');
   

   const trash = document.createElement('i');
   trash.className = "fa-sharp fa-solid fa-trash"
   trash.id = `trash${listNumer}`;

   const checkBox = document.createElement('input');
   checkBox.type = "checkbox";
   checkBox.id = `check${listNumer}`;


   listItem.appendChild(checkBox);
   const text = document.createTextNode(inputValue.value);
   listItem.appendChild(text);
   task_list.appendChild(listItem);
   task_list.appendChild(trash);
  
   taskList.appendChild(task_list);

   inputValue.value = "";
//    console.log(task_list);
 }

});

const trash = document.getElementById(`trash${listNumer}`);
console.log(trash);
const listitem = document.getElementById(`list${listNumer}`);
// trash.addEventListener('click', () => {
//    taskList.removeChild(listitem);
//    listNumer--;
// });