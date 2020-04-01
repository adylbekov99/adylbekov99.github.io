// const list = document.querySelector(".container ul");

// const forms = document.forms;

// //delete tasks
// list.addEventListener('click', (e) => {
//   if(e.target.className = 'delete') {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// })

// //add tasks
// const addForm = forms['add-task'];
// addForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // create elements
//   const value = addForm.querySelector('input[type="text"]').value;
//   const li = document.createElement('li');
//   const deleteBtn = document.createElement('span');

//   // add text content
//   li.textContent = value;
//   deleteBtn.textContent = 'Delete';

//   // add classes
//   deleteBtn.classList.add('delete');

//   // append to DOM
//   li.appendChild(deleteBtn);
//   list.appendChild(li);
// })

const form = document.forms['pass-form'];
const button = form.querySelector('button');
const article = document.querySelector('#article-content');
const error = document.querySelector('.error')


button.addEventListener('click', function(e){
  const inputValue = form.querySelector('input').value;
  e.preventDefault();
  if(inputValue.toLowerCase() == 'aidina') {
    article.classList.add('article-active');
    error.classList.remove('error-active');
  } else {
      error.classList.add('error-active');
  }
})