let form = document.forms.formSearch;
let input = form.elements.input
let text = form.elements.text

input.addEventListener('click',(event)=>{
    const value = text.value
    alert (value)
         })