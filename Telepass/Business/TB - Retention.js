// TEST - APPARIZIONE DI UNA MODALE SIA DESKTOP CHE MOBILE:
// - DESKTOP AL TRIGGER DELL'EXIT-INTENT
// - MOBILE DOPO 10 SECONDI DI INATTIVITA

// Creo la modale

const bodyPageTpass = document.getElementById('___gatsby');
let functionModalTpasscalled = false;

function createTpassModal(){
    //Creazione elemento della modale
    const modalTelepassInactivity = document.createElement('section');
    modalTelepassInactivity.innerHTML = `
    <div onclick="closeTpassModal()" data-tracking="EV_closed_modal_retention" id="close-modal-jkl" class="modal-body-close-icon"><span class="index-module--icon--460b9"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a.64.64 0 0 1-.64.64h-7.72v7.72a.64.64 0 0 1-1.28 0v-7.72H3.64a.64.64 0 0 1 0-1.28h7.72V3.64a.64.64 0 0 1 1.28 0v7.72h7.72A.64.64 0 0 1 21 12Z"></path></svg></span></div>
    <div class="flexed-modal">
    <p style="padding: 0 15px;">Abbiamo la soluzione adatta alla tua azienda, ne parliamo?</p>
    <div style="display: flex; flex-direction: column; justify-content: center; margin: 25px 0;" class="bullet-points-tpass-jkl">
    <div style="color: #002752; display: flex; margin: 5px 0;"><img style="width: 20px; margin-right: 10px;" src="https://landing.telepass.com/promozione-telepass-plus-prospect-v1/images/hero-point-yellow.svg" alt="">Detrai il 100% dell'IVA sui pedaggi aziendali</div>
    <div style="color: #002752; display: flex; margin: 5px 0;"><img style="width: 20px; margin-right: 10px;" src="https://landing.telepass.com/promozione-telepass-plus-prospect-v1/images/hero-point-yellow.svg" alt="">Fino al 2% di cashback sui servizi di mobilità</div>
    <div style="color: #002752; display: flex; margin: 5px 0;"><img style="width: 20px; margin-right: 10px;" src="https://landing.telepass.com/promozione-telepass-plus-prospect-v1/images/hero-point-yellow.svg" alt="">Un canone, nessun costo nascosto</div>
    </div>
    <button tabindex="0" id="buttonModalTpassJKL" class="buttonModalTpass undefined CtaModal" onclick="buttonModalTpass()" data-tracking="EV_inizia_ora_retention">Inizia ora</button>
    </div>`
    modalTelepassInactivity.classList.add('hidden-tpass', 'modal-tpsin', 'slideInModalTpass')
    modalTelepassInactivity.setAttribute('id', 'modal-tpsin');

    //Creazione dell'elemento dell'overlay
    const overlayTelepassInactivity = document.createElement('div');
    overlayTelepassInactivity.classList.add('hidden-tpass', 'overlay-tpass', 'fadeInOverlayTpass');
    overlayTelepassInactivity.setAttribute('id', 'overlay-tpass');
    overlayTelepassInactivity.setAttribute('onclick', 'closeTpassModal()');
    overlayTelepassInactivity.setAttribute('data-tracking', 'EV_closed_modal_retention');
    
    //Animazione di inserimento dell'overlay
    modalTelepassInactivity.animate([
        {top: '45%', opacity: 0},
        {top: '50%', opacity: 1}
    ],{
        duration: 250,
        fill: 'forwards',
        easing: 'ease-in-out'
    })

    overlayTelepassInactivity.animate([
        {opacity: 0},
        {opacity: 1}
    ],{
        duration: 250,
        fill: 'forwards',
        easing: 'ease-in-out'
    })

    overlayTelepassInactivity.style.overflowY = 'hidden';

    //Stampo i 2 elementi in pagina
    bodyPageTpass.parentNode.insertBefore(modalTelepassInactivity, bodyPageTpass);
    bodyPageTpass.parentNode.insertBefore(overlayTelepassInactivity, bodyPageTpass);
}


//Funzione che mi apre la modale (la aprirà solo una volta ... se si ricarica la pagina la riaprirà in ogni caso)
var getDSK = window.screen.width;

//Desktop
function openModalTpass(){
    if(!functionModalTpasscalled){
        dataLayer.push({'event': 'view_modal_ab'});
        createTpassModal();
        functionModalTpasscalled = true;
        //Animazoni dell'entrata e dell'uscita del bottone della modale
        document.getElementById('buttonModalTpassJKL').addEventListener('mouseenter', function(){
            document.getElementById('buttonModalTpassJKL').animate([
                {backgroundColor: '#0071eb'},
                {backgroundColor: '#005abc'}
            ],{
                duration: 250,
                fill: 'forwards',
                easing: 'ease-in-out'
            })
        })
        document.getElementById('buttonModalTpassJKL').addEventListener('mouseout', function(){
            document.getElementById('buttonModalTpassJKL').animate([
                {backgroundColor: '#005abc'},
                {backgroundColor: '#0071eb'}
            ],{
                duration: 250,
                fill: 'forwards',
                easing: 'ease-in-out'
            })
        })
        document.querySelector(".HeroContentBlockSticky__cta>.CtaModal>.CtaContent__label>.Button-module_button__PM45p").parentNode.parentNode.removeAttribute('data-tracking');
    }
}

//Funzione per chiudere la modale
function closeTpassModal(){
    document.getElementById('modal-tpsin').animate([
        {top: '50%', opacity: 1},
        {top: '45%', opacity: 0}
    ],{
        duration: 100,
        fill: 'forwards',
        easing: 'ease-in-out'
    });
    document.getElementById('overlay-tpass').animate([
        {opacity: 1},
        {opacity: 0}
    ],{
        duration: 100,
        fill: 'forwards',
        easing: 'ease-in-out'
    })
    setTimeout(function(){
        document.getElementById('modal-tpsin').remove();
        document.getElementById('overlay-tpass').remove();
    },150);

    document.querySelector(".HeroContentBlockSticky__cta>.CtaModal>.CtaContent__label>.Button-module_button__PM45p").parentNode.parentNode.setAttribute('data-tracking', 'EV_inizia_ora');
}

//Funzione apparizione modale "Inizia ora"
function buttonModalTpass(){
    document.getElementById('modal-tpsin').style.zIndex = 1058;
    document.getElementById('modal-tpsin').animate([
        {top: '50%', opacity: 1},
        {top: '45%', opacity: 0}
    ],{
        duration: 100,
        fill: 'forwards',
        easing: 'ease-in-out'
    });
    document.getElementById('overlay-tpass').animate([
        {opacity: 1},
        {opacity: 0}
    ],{
        duration: 100,
        fill: 'forwards',
        easing: 'ease-in-out'
    })
    setTimeout(function(){
        document.getElementById('modal-tpsin').remove();
        document.getElementById('overlay-tpass').remove();
        document.querySelector(".HeroContentBlockSticky__cta>.CtaModal>.CtaContent__label>.Button-module_button__PM45p").click();
    },150);
    
    setTimeout(function(){
        document.querySelector(".HeroContentBlockSticky__cta>.CtaModal>.CtaContent__label>.Button-module_button__PM45p").parentNode.parentNode.setAttribute('data-tracking', 'EV_inizia_ora');
    }, 1000);
    
}

// Viene eseguita la funzione in modo diverso in base al device in utilizzo => DESKTOP e MOBILE/TABLET

//DESKTOP
if(getDSK >= 1024){
        document.addEventListener('mouseout', function(event){
            if(event.clientY <= 0){
                openModalTpass();
            }
        });
}
//MOBILE o TABLET
else if(getDSK < 1024){
        function isMobileDevice() {
            return /Mobi|Android/i.test(navigator.userAgent);
        }
        let inactivityTimer;
        function resetInactivityTimer() {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(() => {
                openModalTpass();
            }, 10000);
        }
        function startInactivityTimer() {
            ['mousemove', 'mousedown', 'keypress', 'touchmove', 'scroll'].forEach(event => {
                document.addEventListener(event, resetInactivityTimer);
            });
            resetInactivityTimer();
        }
        if (isMobileDevice()) {
            startInactivityTimer();

        }
}




//Parte da togliere

var existingStyle = document.getElementById('style-javascript-tpass-jkl');
if (!existingStyle) {
    var styleElement = document.createElement('style');
    styleElement.id = 'style-javascript-tpass-jkl';
    styleElement.textContent = `
    #close-modal-jkl{
        z-index: 3000;
    }

    @keyframes hover_modal_tpass{
        0%{
            background-color: #0071eb;
        }
        100%{
            background-color: #005abc;
        }
    }

    .buttonModalTpass:hover{
        animation-name: hover_modal_tpass;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    }


    .buttonModalTpass{
        background-color: #0071eb;
        color: white;
        border-radius: 50px;
        padding: 10px 40px;
    }


    .flexed-modal{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    
    .modal-tpsin{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
        border-radius: 5px;
        position: fixed;
        z-index: 2001;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        align-items: center;
        border: solid 1px rgba(0, 0, 0, .2);
    }
    
    .overlay-tpass{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 39, 82, 0.5);
    backdrop-filter: blur(3px);
    z-index: 2000;
    }

    .flexed-modal p{
        font-size: 19px;
        text-align: center;
        font-weight: bold;
    }


    @media screen and (min-width: 1024px){
        .modal-tpsin{
            padding: 10px;
        }
        .flexed-modal p{
            width: 75%;
            margin-top: 10px;
        }
        .buttonModalTpass{
            margin-bottom: 10px;
        }
        #close-modal-jkl{
            top: 20px; 
            right: 20px;
        }
    }

    @media screen and (max-width: 1023px){
        .modal-tpsin{
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: white;
            border-radius: 10px;
            position: fixed;
            z-index: 2002;
            width: 90%;
        }
        .flexed-modal p{
            margin-top: 30px;
        }
        #close-modal-jkl{
            top: 10px; 
            right: 10px;
        }
        .buttonModalTpass{
            margin-bottom: 30px;
        }
    }
    @media screen and (max-width: 1024px){
        .bullet-points-tpass-jkl{
            font-size: 13px;
        }
    }

}
    
    `;
    document.head.appendChild(styleElement);
}