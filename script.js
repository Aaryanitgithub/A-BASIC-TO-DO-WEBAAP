const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');

let tasks = [];

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        const task = {
            text: taskText,
            completed: false,
            timestamp: new Date().toLocaleString(),
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
});

function renderTasks() {
    pendingTasks.innerHTML = '';
    completedTasks.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
       

        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            task.completed = true;
            renderTasks();
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newText = prompt("Edit task:", task.text);
            if (newText) {
                task.text = newText;
                renderTasks();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        
        if (task.completed) {
            li.classList.add('completed');
            completedTasks.appendChild(li);
        } else {
            li.appendChild(completeButton);
            pendingTasks.appendChild(li);
        }
    });
}