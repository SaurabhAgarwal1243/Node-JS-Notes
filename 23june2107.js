let todoitems = [];

window.onload = function(){
  let newtodo = document.getElementById('newtodo');
  let addtodo = document.getElementById('addtodo');

  let todolist = document.getElementById('todolist');
  retrievetodos();
  setitemarraytolist(todolist , todoitems);

  addtodo.onclick = function(){
  addAndSave(newtodo.value);
  retrievetodos();
    setitemarraytolist(todolist , todoitems);
  }
};
function additemtolist(list,itemText) {
  let todoitem= document.createElement('li');
  todoitem.innerText = itemText;
  list.appendChild(todoitem);
}


function setitemarraytolist(list,itemarray){
  list.innerHTML = '';
  for (item of itemarray){
    additemtolist(list , item);
  }
}
function retrievetodos(){
  let todosinstore = localStorage.getItem('todos');
  if(todosinstore){
    todoitems = todosinstore.split(',');
  }
}
function addAndSave(itemText){
  todoitems.push(itemText);
  localStorage.setItem('todos' , todoitems.join(','));
}
