const todo=[];
function app(){
    const inputButton=document.querySelector('.js-input');
    const name=inputButton.value;
   todo.push(name);
   console.log(todo);
   inputElement.value='';
}