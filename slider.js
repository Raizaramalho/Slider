/* AÇÃO DESLIZANTE DO SLIDER*/
let contador= 1;

setInterval(function(){

document.getElementById('slide' + contador).checked = true;
contador ++;
if(contador > 5){
    contador =1;
}

},8000 )