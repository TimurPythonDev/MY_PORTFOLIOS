


/* ------------------ ABOUT TABS ---------------- */
const eduBtn = document.querySelector('#tab-item1');
const expBtn = document.querySelector('#tab-item2');
const eduContent = document.querySelector('#education');
const expContent = document.querySelector('#experience');

eduBtn.addEventListener('click', ()=>{
    eduContent.classList.add('active');
    expContent.classList.remove('active');
    eduBtn.classList.add('active');
    expBtn.classList.remove('active');
    
})
expBtn.addEventListener('click', ()=>{
    expContent.classList.add('active');
    eduContent.classList.remove('active');
    expBtn.classList.add('active');
    eduBtn.classList.remove('active');
})