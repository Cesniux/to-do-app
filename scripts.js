const textInput = document.getElementById('textInput');
const addButton = document.getElementById('addButton');
const list = document.getElementById('list');

const LIST_ITEMS = [];

addButton.addEventListener('click', () => {
    // alert(textInput.value);
    LIST_ITEMS.push(textInput.value);
    console.log(LIST_ITEMS);
});

const listItem = () => {}
const renderList = () => {
    list.innerHTML = '...';
}
