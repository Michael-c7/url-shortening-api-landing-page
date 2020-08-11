let body = document.querySelector('body');
let hamburgerMenu = body.querySelector('.navbar__hamburger-menu');
let navbarItemsContainer = body.querySelector('.navbar__items-container');

let linkShortener = body.querySelector('.link-shortener');
let linkShortenerSection = body.querySelector('.link-shortener-section');
let linkShortenerInput = linkShortener.querySelector('.link-shortener__input');
let addLinkWarningMsg = linkShortener.querySelector('.add-link-warning-msg');

let shortenItButton = linkShortener.querySelector('button.btn--shorten-it');

let linkShortenerOutputContainer = linkShortener.querySelector('.link-shortener__output-container');

/*navbar*/
hamburgerMenu.addEventListener('click', navbarFunctionality);

function navbarFunctionality (event) {
    navbarItemsContainer.classList.toggle('is-open');
}





/*link shortener warning message*/
linkShortenerInput.addEventListener('input', linkShortenerInputWarningFunctionality);

function linkShortenerInputWarningFunctionality(event) {
    let inputValue = linkShortenerInput.value;
    if(!inputValue) {
        // makes the placeholder text on the input red
            linkShortenerInput.classList.add('warning-msg-on');

        // show the "please add a link" msg
            addLinkWarningMsg.classList.add('warning-msg-on');
    
    } else {
        // placeholder text will be the normal color(black)
            linkShortenerInput.classList.remove('warning-msg-on');
        // hide the "please add a link" msg
            addLinkWarningMsg.classList.remove('warning-msg-on');
    }
}





// create the shortened link
let randomString = Math.random().toString(36).substring(7);
let completeRandomString = `https://rel.ink/${randomString}`;
//    console.log(completeRandomString)





// change copy button styles upon click
linkShortenerOutputContainer.addEventListener('click', (event) => {
    let clickedTarget = event.target;

    // change styles
    if(clickedTarget.closest('button.btn--copy')) {
        /*change text*/
            clickedTarget.textContent = 'Copied!';

        /*change background color*/
            /*fallback color */
            clickedTarget.style.backgroundColor = 'darkslateblue';
            /*preferred color*/
            clickedTarget.style.backgroundColor = 'var(--dark-violet)';

        // copy target link link to clipboard (not done)
            // 1.target link
            let targetLink = clickedTarget.parentElement.parentElement;
            let targetLM = targetLink.querySelector('.link-shortener__output__lm');

            // 2.select the link text

            // 3. copy target text to clipboard

            // copied from stackoverflow

    //         function selectText(node) {
    //             node = document.getElementById(node);
            
    //             if (document.body.createTextRange) {
    //                 const range = document.body.createTextRange();
    //                 range.moveToElementText(node);
    //                 range.select();
    //             } else if (window.getSelection) {
    //                 const selection = window.getSelection();
    //                 const range = document.createRange();
    //                 range.selectNodeContents(node);
    //                 selection.removeAllRanges();
    //                 selection.addRange(range);
    //             } else {
    //                 console.warn("Could not select text in node: Unsupported browser.");
    //             }
    //         } 

    //         const clickable = document.querySelector('.click-me');
    //         clickable.addEventListener('click', () => selectText('target'));
    //         <div id="target"><p>Some text goes here!</p><p>Moar text!</p></div>
    //         <p class="click-me">Click me!</p>
     }
});

/*shorten link*/
shortenItButton.addEventListener('click', createLinkShortenerOutput);





// creates the thing you inject into the DOM
function createLinkShortenerOutput(originalLink, shortenedLink) {
    /*below is what we create w/ a document fragment an inject into the DOM */

    /*
    <div class="link-shortener__output">
        <span class="link-shortener__output__lo">https://www.frontendmentor.io</span>
        <div class="link-shortener__lm-container">
            <span class="link-shortener__output__lm">https://rel.ink/gxOXp9</span>
            <div class="btn--copy-container">
                <button class="btn btn--type-2 btn--copy">Copy</button>
            </div>
        </div>
    </div> 
    */

    /* 
    ***STEPS*** 
    1. create a document fragment of the link-shortener__output
    2. append this to the DOM within the link-shortener__output-container
    */


    // 1. create the thing
        let docFrag = document.createDocumentFragment();

        // link-shortener__output
        let linkShortenerOutputDOM = document.createElement('div');
        linkShortenerOutputDOM.classList.add('ink-shortener__output');
        docFrag.appendChild(linkShortenerOutputDOM);

            // link-shortener__output__lo
            let linkShortenerOutputLoDOM = document.createElement('span');
            linkShortenerOutputLoDOM.classList.add('link-shortener__output__lo');
            linkShortenerOutputLoDOM.textContent = originalLink;
            linkShortenerOutputDOM.appendChild(linkShortenerOutputLoDOM);

            // link-shortener__lm-container
            let linkShortenerLmContainerDOM = document.createElement('div');
            linkShortenerLmContainerDOM.classList.add('link-shortener__lm-container');
            linkShortenerOutputDOM.appendChild(linkShortenerLmContainerDOM);

                // link-shortener__output__lm
                let linkShortenerOutputLmDOM = document.createElement('span');
                linkShortenerOutputLmDOM.classList.add('link-shortener__output__lm');
                linkShortenerOutputLmDOM.textContent = shortenedLink;
                linkShortenerLmContainerDOM.appendChild(linkShortenerOutputLmDOM);

                // btn--copy-container
                let btnCopyContainerDOM = document.createElement('div');
                btnCopyContainerDOM.classList.add('btn--copy-container');
                linkShortenerLmContainerDOM.appendChild(btnCopyContainerDOM);

                    // btn--copy
                    let btnCopy = document.createElement('button');
                    btnCopy.classList.add('btn');
                    btnCopy.classList.add('btn--type-2');
                    btnCopy.classList.add('btn--copy');
                    btnCopy.textContent = 'Copy';
                    btnCopyContainerDOM.appendChild(btnCopy);

    // console.log(docFrag);

    /* 2. inject the entire thing into the DOM
    create unique thing for each thing created.
    think the unique id should be based
    on the length of the total of all items
    OR the use the unique link id as the unique thing
    for each thing here
    */
}

createLinkShortenerOutput('userInputHere', completeRandomString);


/*
 change link-shortener__output__lm text
 to copied and apply the purple color
 when the button has been clicked,
 when the button has been clicked you should
 copy the text from link-shortener__output__lm 
 to the users clip board
 */ 

 /*
  would also like to use
  session / local storage
  to save the link that have been created
  **/  