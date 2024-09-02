document.getElementById('addTodoBtn').onclick = () =>{
    const todoText = document.getElementById('todoInput').value.trim();
    if (!todoText) return alert('Please enter a task!');
    console.log(`Task Added: ${todoText}`);

const listItem = document.createElement('li');
listItem.innerHTML = todoText; 

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.className = 'deleteBtn';


listItem.appendChild(deleteBtn);
deleteBtn.onclick = () => listItem.remove();


document.getElementById('todoList').appendChild(listItem);
document.getElementById('todoInput').value = '';

};