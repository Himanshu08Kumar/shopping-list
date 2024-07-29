const inputText = document.querySelector('#inputText');
const btn = document.querySelector('.btn');
const listItem = document.querySelector('.list-item');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const text = inputText.value.trim();
    if(text !== ''){
        const li = document.createElement('li');
       li.textContent = text;
       inputText.value = '';
       listItem.appendChild(li);

    }else{
        alert('Please add an Item')
    }
})
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}
 function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon; 
 }

    