'use strict';

let items = document.querySelectorAll('.items');

let imgItems = document.querySelectorAll('.img');

console.log(imgItems);

for(const item of items){
    item.addEventListener('click', ()=>{
        
        for(const i of items){
            i.classList.remove('active');
        }

    item.classList.add('active');
  
    let dataFilter = item.getAttribute('data-filter')

  for(const imgs of imgItems){
    imgs.classList.remove('active');
    imgs.classList.add('hide');

    if(imgs.getAttribute('data-item') == dataFilter || dataFilter == "all"){

   imgs.classList.remove('hide');
   imgs.classList.add('active');
    }
  }
    })
}