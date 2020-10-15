const [imageA, imageB, imageC] = [document.querySelector('.cover_a'), document.querySelector('.cover_b'), document.querySelector('.cover_c')];
const [btnLeft, btnRight] = [document.querySelector('#left'), document.querySelector('#right')];


btnRight.addEventListener('click', right);

function right(e){
    imageA.style.transform = 'translate(-100%)';
    imageB.style.transform = 'translate(0%)';

    btnRight.removeEventListener('click', right);
    btnRight.addEventListener('click', rightAgain);
}

function rightAgain(e){
    imageB.style.transform = 'translate(-100%)';
    imageC.style.transform = 'translate(0%)';

    btnRight.removeEventListener('click', rightAgain);
    btnRight.addEventListener('click', right);
    // ---
    btnLeft.addEventListener('click', leftAgain);
}




// -------------

function left(e){
    imageA.style.transform = 'translate(0%)';
    imageB.style.transform = 'translate(100%)';

    btnLeft.removeEventListener('click', left);
    btnLeft.addEventListener('click', leftAgain);
}

function leftAgain(e){
    imageB.style.transform = 'translate(0%)';
    imageC.style.transform = 'translate(100%)';

    btnLeft.removeEventListener('click', leftAgain);
    btnLeft.addEventListener('click', left);
}


// menu
const [menu_btn, nav] = [document.querySelector('.menu_btn'), document.querySelector('nav')];

menu_btn.addEventListener('click', open);

function open(e){
    menu_btn.classList.add('open');
    nav.classList.add('open');
    menu_btn.removeEventListener('click', open);
    menu_btn.addEventListener('click', close);
}

function close(e){
    menu_btn.classList.remove('open');
    nav.classList.remove('open');
    menu_btn.removeEventListener('click', close);
    menu_btn.addEventListener('click', open);
}