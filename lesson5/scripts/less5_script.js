const input = document.querySelector('#user_input');
const button = document.querySelector('#user_button');
const list = document.querySelector('#user_list');

button.addEventListener('click', () => {
    const myItem = input.value;
    const xb=1;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    listBtn.style.color='red';
    listBtn.style.border="2px solid rgb(170,170,170)" ;

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'X';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
      list.removeChild(listItem);
    });

    input.focus();
  });