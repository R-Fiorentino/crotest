let attemptCount = 0;
const maxAttempt = 100;

var int = setInterval(function(){
    if(!document.querySelector('#bpoints-tp') && document.querySelector('.HeroContent__content.box-shadow-card .HeroContentBlockSticky__container .HeroContentBlockSticky__footer')){
        bulletMobile();
        clearInterval(int);
    }else{
        attemptCount++;
        if(attemptCount >= maxAttempt){
            clearInterval(int);
        }
    }
},100)

//Inserire nella finestra dell'hero 3 bulletpoints

function bulletMobile(){
    if(!document.querySelector('#bpoints-tp')){
        var box = document.querySelector('.HeroContent__content.box-shadow-card .HeroContentBlockSticky__container');
        var beforThis = box.querySelector('.HeroContentBlockSticky__footer');
        
        var bulletPoints = document.createElement('div');
        bulletPoints.classList.add('HeroContentBlockSticky__bulletPoints');
        bulletPoints.id = 'bpoints-tp';
        bulletPoints.innerHTML = '<div style="display: flex; align-items: center; margin-bottom: 10px;">'
        + '<img style="width: 16px; margin-right: 10px;" src="https://landing.telepass.com/promozione-telepass-business-v1/images/hero-point-yellow.svg"/>'
        + '<span>Tutto in un\'<b>unica App</b></span>'
        + '</div>'
        + '<div style="display: flex; align-items: center; margin-bottom: 10px;">'
        + '<img style="width: 16px; margin-right: 10px;" src="https://landing.telepass.com/promozione-telepass-business-v1/images/hero-point-yellow.svg"/>'
        + '<span>Canone unico <b>senza spese extra</b></span>'
        + '</div>' 
        + '<div style="display: flex; align-items: center; margin-bottom: 10px;">'
        + '<img style="width: 16px; margin-right: 10px;" src="https://landing.telepass.com/promozione-telepass-business-v1/images/hero-point-yellow.svg"/>'
        + '<span>Tutta la mobilità <b>senza dispositivo</b></span>'
        + '</div>';
        
        box.insertBefore(bulletPoints, beforThis);
    }
}

if(window.screen.width < 768 && !document.querySelector('bpoints-tp')){
    bulletMobile();
}

window.addEventListener('resize', function(){
    if(window.screen.width < 768 && !document.querySelector('bpoints-tp')){
        bulletMobile();
    }else if(window.screen.width >= 768 && document.querySelector('#bpoints-tp')){
        document.querySelector('bpoints-tp').remove();
    }
})





var existingStyle = document.getElementById('style-javascript-tpass-jkl');
if (!existingStyle) {
    var styleElement = document.createElement('style');
    styleElement.id = 'style-javascript-tpass-jkl';
    styleElement.textContent = `
    .HeroContentBlockSticky__bulletPoints{
    font-size: .875rem;
    margin-left: 5%;
    }
    .HeroContentBlockSticky__bulletPoints span{
        line-height: 20px;
    }
    

    `;
    document.head.appendChild(styleElement);
}