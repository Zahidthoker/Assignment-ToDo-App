
const inputValue = document.getElementById('text-input-box');
const addButton = document.getElementById('add-btn');

const taskList = document.getElementById('task-list');
let listNumer = 0;

const addTask = () => {
   if(inputValue.value===""){
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



   // Delete button

const delbtn = document.getElementById(`trash${listNumer}`);
const listitem = document.getElementById(`list${listNumer}`);
delbtn.addEventListener('click', () => {
   if(!checkBox.checked){
   taskList.removeChild(listitem);
   listNumer--;
   }
   else{
      tasklist.style.display = "none";
   }
});

//clear checked button 

checkBox.addEventListener('click',()=>{
   if(checkBox.checked){
      listItem.style.textDecoration = "line-through";
      listItem.style.color = "gray";
      trash.style.color= "gray";
   }
   else{
      listItem.style.textDecoration = "none";
      listItem.style.color = "black";
      trash.style.color = "black";
   }

   
});


const clearbtn = document.getElementById('clear-completed');

   clearbtn.addEventListener('click',()=>{})
clearbtn.addEventListener('click',()=>{
   for(let i =1;i<=listNumer;i++){
      if(checkBox.id==`check`+i){
         if(checkBox.checked){
            const checkedItem = document.getElementById(`list`+i);
            taskList.removeChild(checkedItem);

         }
      }
   }
})


 }

}


// Add button
addButton.addEventListener('click', addTask);
document.addEventListener('keydown',(event)=>{
   if(event.key === 'Enter'){
      addTask();
   }
});

