var screenWDTH = window.screen.width;
// Inserimento frase nella stickybar in mobile
if(screenWDTH < 641){
    var stickybarTPassjkl = document.getElementById('fixed-bar');
    stickybarTPassjkl.querySelector('.fixed-content-text').style.cssText = 'display: none !important;';
     stickybarTPassjkl.querySelector('.fixed-bar-content img').style.cssText = 'display: none !important;';
     var textForTheBarTPass = document.createElement('div');
     textForTheBarTPass.textContent = '1 anno a canone zero';
     textForTheBarTPass.style.cssText = 'position: absolute; left: 60px; padding: 0 2.5px; width: 45%; color: #FFE01A; text-align: center; font-weight: bold; font-size: 18px; text-shadow: 2px 2px rgba(0,0,0,0.3); text-transform: uppercase;';
     stickybarTPassjkl.appendChild(textForTheBarTPass);
}