var currentPageJKL = window.location.href;
var formTPBusiness = '';
var elementsToRemove = [];

if(currentPageJKL.includes('piccole-medie-imprese')){
    formTPBusiness = document.getElementById('business-sme').getElementsByClassName('FormField');
    elementsToRemove = [5, 6, 10, 11]; // Rimuovi questi elementi per la pagina piccole-medie-imprese
} else if(currentPageJKL.includes('grandi-aziende')){
    formTPBusiness = document.getElementById('business-top').getElementsByClassName('FormField');
    elementsToRemove = [5, 6, 10]; // Rimuovi questi elementi per la pagina grandi-aziende
}

for(var i = 0; i < elementsToRemove.length; i++){
    formTPBusiness[elementsToRemove[i]].style.display = 'none';
}