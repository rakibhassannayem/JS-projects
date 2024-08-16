function handleCostKeyDown(event) {
  if (event.key === 'Enter')
    addTodo();
}

const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2024-05-13'
}];

renderTodoList();

function renderTodoList() {
  let todoListHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <p>
        ${name} ${dueDate}
        <button onclick ="
          todoList.splice(${i}, 1);
          renderTodoList();
        ">Delete</button>
      </p>
    `;
    todoListHtml += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });
  inputElement.value = '';
  console.log(todoList);

  renderTodoList();
  saveToStorage();

}
function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}