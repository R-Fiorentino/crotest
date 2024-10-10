//Telepass rimozione fields form piccole e medie imprese e grandi aziende

var currentPageJKL = window.location.href;
var formTPBusiness = '';
if(currentPageJKL.includes('piccole-medie-imprese')){
    formTPBusiness = document.getElementById('business-sme').getElementsByClassName('FormField');
}else if(currentPageJKL.includes('grandi-aziende')){
    formTPBusiness = document.getElementById('business-top').getElementsByClassName('FormField');
}

var elementsToRemove = [5, 6, 9, 10, 11];
for(var i = 0; i < elementsToRemove.length; i++){
    formTPBusiness[elementsToRemove[i]].style.display = 'none';
}