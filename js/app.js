const list = document.querySelector(".container ul");

const forms = document.forms;

//delete tasks
list.addEventListener('click', (e) => {
  if(e.target.className = 'delete') {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
})

//add tasks
const addForm = forms['add-task'];
addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const deleteBtn = document.createElement('span');

  // add text content
  li.textContent = value;
  deleteBtn.textContent = 'Delete';

  // add classes
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(deleteBtn);
  list.appendChild(li);
})