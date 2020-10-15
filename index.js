const [imageA, imageB, imageC] = [document.querySelector('.cover_a'), document.querySelector('.cover_b'), document.querySelector('.cover_c')];
const [btnLeft, btnRight] = [document.querySelector('#left'), document.querySelector('#right')];


btnRight.addEventListener('click', right);

function right(e){
    imageA.style.transform = 'translate(-100%)';
    imageB.style.transform = 'translate(0%)';

    document.querySelector('h2').textContent = `We are available all across the globe`;
    document.querySelector('.right p').textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`;

    btnRight.removeEventListener('click', right);
    btnRight.addEventListener('click', rightAgain);
}

function rightAgain(e){
    imageB.style.transform = 'translate(-100%)';
    imageC.style.transform = 'translate(0%)';

    document.querySelector('h2').textContent = `Manufactured with the best materials`;
    document.querySelector('.right p').textContent = `  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`;

    btnRight.removeEventListener('click', rightAgain);
    btnRight.addEventListener('click', right);
    // ---
    btnLeft.addEventListener('click', leftAgain);
}




// -------------

function left(e){
    imageA.style.transform = 'translate(0%)';
    imageB.style.transform = 'translate(100%)';

    document.querySelector('h2').textContent = `Discover innovative ways to decorate`;
    document.querySelector('.right p').textContent = `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`;
    
    btnLeft.removeEventListener('click', left);
    btnLeft.addEventListener('click', leftAgain);
}

function leftAgain(e){
    imageB.style.transform = 'translate(0%)';
    imageC.style.transform = 'translate(100%)';

    document.querySelector('h2').textContent = `We are available all across the globe`;
    document.querySelector('.right p').textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`;

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