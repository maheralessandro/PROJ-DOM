

let piu = document.getElementsByClassName("bt+");
let meno = document.getElementsByClassName("bt-");
let remove = document.getElementsByClassName('rmv');
let totp = document.getElementById("tot");
let price1 = document.getElementsByClassName("price");
let quantita1 = document.getElementsByClassName("quantita");




for (let i = 0; i < piu.length; i++) {
     piu[i].addEventListener("click", function (){
        piu[i].nextElementSibling.innerText++ ;
        calcola() ;
        
        })
        
     
    }

for (let i = 0; i < piu.length; i++){
    meno[i].addEventListener("click", function(){
       if(meno[i].previousElementSibling.innerText>0) {
        meno[i].previousElementSibling.innerText-- ;
        calcola() ;
    }

   })
} 



for(let j=0 ; j < remove.length ; j++){
    let clikremove = remove[j];
    clikremove.addEventListener('click',function(e){
        let btn = e.target ;
        btn.parentElement.remove();
        calcola();
    })
}

let like = document.getElementsByClassName("like");
for(let i=0 ; i<like.length ; i++){
    let like1 = like[i];
    like1.addEventListener('click', function(){
        like1.classList.toggle('islike') ;

    })
}

function calcola(){
    let sum = 0 ;
    for(i = 0 ; i<quantita1.length ; i++){
        sum += (quantita1[i].innerText * price1[i].innerText) ;

    }
    totp.innerText = sum ;
}



