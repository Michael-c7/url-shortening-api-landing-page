let body = document.querySelector('body');
let hamburgerMenu = body.querySelector('.navbar__hamburger-menu');
let navbarItemsContainer = body.querySelector('.navbar__items-container');

let linkShortener = body.querySelector('.link-shortener');
let linkShortenerSection = body.querySelector('.link-shortener-section');
let linkShortenerInput = linkShortener.querySelector('.link-shortener__input');
let addLinkWarningMsg = linkShortener.querySelector('.add-link-warning-msg');

let shortenItButton = linkShortener.querySelector('button.btn--shorten-it');

/*navbar*/
hamburgerMenu.addEventListener('click', navbarFunctionality);

function navbarFunctionality (event) {
    navbarItemsContainer.classList.toggle('is-open');

    console.log(event.target);
}





/*link shortener warning message*/
linkShortenerInput.addEventListener('input', linkShortenerInputWarningFunctionality);

function linkShortenerInputWarningFunctionality(event) {
    let inputValue = linkShortenerInput.value;
    if(!inputValue) {
        // apply a class on the input
        linkShortenerInput.classList.add('warning-msg-on');

        // show the "please add a link" msg
        addLinkWarningMsg.classList.add('warning-msg-on');
    
    } else {
        linkShortenerInput.classList.remove('warning-msg-on');
        // 
        addLinkWarningMsg.classList.remove('warning-msg-on');
    }
}





/*shorten link */
shortenItButton.addEventListener('click', createLinkShortenerOutput);


function createLinkShortenerOutput(shortenedLink) {
    /*
    <div class="link-shortener__output">
        <!--link original-->
        <span class="link-shortener__output__lo">https://www.frontendmentor.io</span>
        <!--link modified-->
        <span class="link-shortener__output__lm">https://rel.ink/gxOXp9</span>
        <button class="btn btn--type-2 btn--copy">Copy</button>
    </div>
    */

    /*STEP : 1*/
    



    /* 
    ***STEPS*** 
    1. create a document fragment of the link-shortener__output
    2. append this to the DOM within the link-shortener__output-container
    */
}


function shortenLink(linkToShorten) {
   /*
   from : https://www.frontendmentor.io

   to : https://rel.ink/gxOXp9

   NOTE: the end part
   eg : gxOXp9 should Not be longer than 6 characters 
   
   1. randomly generate a link w/ numbers & letters(lower & uppercase)
   */
}



/*
 change link-shortener__output__lm text
 to copied and apply the purple color
 when the button has been clicked,
 when the button has been clicked you should
 copy the text from link-shortener__output__lm 
 to the users clip board
 */ 

 /*would also like to use session / local storage to save the link that have been created */