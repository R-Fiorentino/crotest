//Eliminare informazione cashback da herobanner e cart

var cb_hero = document.querySelector('.hero-block__price');
var cb_receipt = document.querySelector('#cardCart .card-promo');

cb_hero.style.display = 'none';
cb_receipt.style.display = 'none';