const inputText = document.querySelector('#inputText');
const btn = document.querySelector('.btn');
const listItem = document.querySelector('.list-item');
const err = document.querySelector('.err');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const text = inputText.value.trim();
    if(text !== ''){
    const li = document.createElement('li');
       li.textContent = text;
       inputText.value = '';
       listItem.appendChild(li);
        const deleteBtn = createButton('list-item li remove-item');
        li.appendChild(deleteBtn);

    }else{
        err.style.color = 'orangeRed';
        err.style.fontSize  = '14px'
        err.textContent = 'Please enter a value';
        setTimeout((e)=>{
        err.textContent = '';
         },2000)
    }
    
})
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    button.addEventListener('click', ()=>{
        button.parentElement.remove();
    });
    return button;
}
 function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon; 
 }

