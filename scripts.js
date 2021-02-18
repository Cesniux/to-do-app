const textInput = document.getElementById('textInput');
const addButton = document.getElementById('addButton');
const list = document.getElementById('list')

const LIST_ITEMS = [];

addButton.addEventListener('click', () => {
  alert(textInput.value);
  LIST_ITEMS.push(textInput.value);
  console.log(LIST_ITEMS);
});


addButton.addEventListener('click', () => {
  const listItem = () => {
    const itemBlock = '<label class="box a">' + 
      '<input type="checkbox" />' + 
      '<span class="checkmark"></span>' + 
      LIST_ITEMS[LIST_ITEMS.length - 1] +
      '<div class="xbox"></div>' + 
      '</label>';
    return itemBlock;
  };

  const renderList = () => {
    list.innerHTML = listItem();
  };

  renderList();
});