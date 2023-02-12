'use strict';
const modal =document.querySelector('.modal');
console.log(modal);
//for the closing button
const closeModal =document.querySelector('.close-modal');
console.log(closeModal);

//for the button
const showModal =document.querySelectorAll('.show-modal');
console.log(showModal);
//for the overlay
const overlay =document.querySelector('.overlay');
console.log(overlay);

//
const openModal1 =function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
};

//creating a functiom
const closeModal1=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
//to iterate for all the three showmodal button,we have to use a for loop
for (let i=0;i<showModal.length;i++){
    console.log(showModal[i].addEventListener('click',openModal1));
    //this showmodal[i] means it should take it for each of them individually
}
closeModal.addEventListener('click',closeModal1);
overlay.addEventListener('click',closeModal1);