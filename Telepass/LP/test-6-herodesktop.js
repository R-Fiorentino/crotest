//Inserimento box nell'hero togliendo i 3 box sotto e togliendo l'immagine in desktop

var screenWDTH = window.screen.width;

if(screenWDTH > 640){
    
var heroOfThePage = document.querySelector('.hero');
heroOfThePage.style.marginBottom = '80px';

var imgToRemove = heroOfThePage.querySelector('img.hero-desk-img');
imgToRemove.style.display = 'none';

var heroBox100JKL = heroOfThePage.querySelector('.hero-box');
heroBox100JKL.style.width = '100%';

var titleToModify = heroOfThePage.querySelector('h1.no-mobile');
titleToModify.textContent = '-20% sui pedaggi* e più tempo per le tue passioni?';

var boxesToRemove = document.querySelector('.cards-wrap');
boxesToRemove.style.display = 'none';


var dimmiDiPiuButton = document.querySelector('.wrap-btn-container div:nth-child(2) > a');

var boxtoInsertJKL = document.createElement('div');
boxtoInsertJKL.setAttribute('id', 'hero-box-jkl');
boxtoInsertJKL.style.cssText = 'font-size: 18px; display: flex; flex-direction: column; justify-content: center; align-items: end; font-weight: 400; color: #002752; z-index: 2; width: 100%;';
var boxContentJKL = '<div style="background-color: white; border-radius: 32px; padding: 40px; box-shadow: 5px 5px 10px 2px rgba(0,0,0,0.3);" id="contentForTheBoxJKL">' +
'<div style="margin-bottom: 15px; font-size: 28px; font-weight: bold;">Solo con Telepass!</div>' +
'<div style="display: flex; margin-bottom: 15px; align-items: center;">' + 
'<img class="card-check" style="width: 25px; margin-right: 10px;" src="./images/hero-point-green.svg" alt="Check" loading="lazy">'+
'<div><b>1 anno di canone zero</b></div>' +
'</div>' + 
'<div style="display: flex; margin-bottom: 15px; align-items: center;">' +
'<img class="card-check" style="width: 25px; margin-right: 10px;" src="./images/hero-point-green.svg" alt="Check" loading="lazy">' +
'<div><b>-20% sui pedaggi</b> da giugno a settembre</div>' +
'</div>' +
'<div style="display: flex; margin-bottom: 30px; align-items: center;">' +
'<img class="card-check" style="width: 25px; margin-right: 10px;" src="./images/hero-point-green.svg" alt="Check" loading="lazy">' +
'<div><b>Dispositivo colorato</b> a scelta <b>gratis!</b></div>' +
'</div>' +
'</div>';

boxtoInsertJKL.innerHTML = boxContentJKL;

var containerToAppenBox = heroOfThePage.querySelector('.container-full');
containerToAppenBox.style.display = 'flex';
containerToAppenBox.appendChild(boxtoInsertJKL);
document.getElementById('contentForTheBoxJKL').appendChild(dimmiDiPiuButton);
dimmiDiPiuButton.setAttribute('href', '#offerta');
var buttonEffettivo = dimmiDiPiuButton.querySelector('div');
buttonEffettivo.style.backgroundColor = 'rgb(0,113,235)';
buttonEffettivo.style.color = 'white';
dimmiDiPiuButton.addEventListener('click', function(){
    document.getElementById('detailsButton').click();
});
}
