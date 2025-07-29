import { homePage } from "./homePage.js"

export function landingPage() {
    // GETS BODY ELEMENT FROM HTML
    const pageContent = document.querySelector('.content');

    // ADDS HEADER CONTENT
    const pageHeader = document.createElement('header');
    pageHeader.classList.add('header');
    pageContent.appendChild(pageHeader);

    const pageTitleDiv = document.createElement('div');
    pageTitleDiv.classList.add('titleDiv');
    pageHeader.appendChild(pageTitleDiv);

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'To Do Lists';
    pageTitleDiv.appendChild(title);

    const loginDiv = document.createElement('div');
    loginDiv.classList.add('loginDiv');
    pageHeader.appendChild(loginDiv);

    const loginButton = document.createElement('button');
    loginButton.classList.add('loginButton');
    loginButton.textContent = 'Start Free Today';
    loginDiv.appendChild(loginButton);
    loginButton.addEventListener('click', () => {
        pageContent.textContent = "";
        homePage();
    })

    // ADDS MAIN PAGE CONTENT
    const main = document.createElement('main');
    main.classList.add('main');
    pageContent.appendChild(main);

    // ADDS SECTION IN MAIN FOR TEXT CARD
    const textCardSection = document.createElement('section');
    textCardSection.classList.add('textCardSection');
    main.appendChild(textCardSection);

    const textCardDiv = document.createElement('div');
    textCardDiv.classList.add('textCard');
    textCardSection.appendChild(textCardDiv);

    const textCardTitle = document.createElement('h2');
    textCardTitle.classList.add('textCardTitle');
    textCardTitle.textContent = 'Work simple, Work clean'
    textCardDiv.appendChild(textCardTitle);

    const textCardInfo = document.createElement('p');
    textCardInfo.classList.add('textCardInfo');
    textCardInfo.textContent = 'A tool made for keeping dynamic teams in sync without complication';
    textCardDiv.appendChild(textCardInfo);

    const textCardLogin = document.createElement('button');
    textCardLogin.classList.add('loginButton');
    textCardLogin.textContent = 'Start Free Today';
    textCardDiv.appendChild(textCardLogin);
    textCardLogin.addEventListener('click', () => {
        pageContent.textContent = "";
        homePage();
    })

    // ADDS SECTION IN MAIN FOR IMG 
    const imgSection = document.createElement('section');
    imgSection.classList.add('imgSection');
    main.appendChild(imgSection);

    // FIX ME!!! ADD IMG HERE

    // ADDS FOOTER
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    pageContent.appendChild(footer);

    const footerContent1 = document.createElement('p');
    footerContent1.classList.add('footerContent1');
    footerContent1.textContent = '\"Simple, straight forward and super powerful\"';
    footer.appendChild(footerContent1);

    const footerContent2 = document.createElement('p');
    footerContent2.classList.add('footerContent1');
    footerContent2.textContent = '\"The new best To-Do list on the market, plus its 100% free\"';
    footer.appendChild(footerContent2);

    const footerContent3 = document.createElement('p');
    footerContent3.classList.add('footerContent1');
    footerContent3.textContent = '\"Nothing short of the best\"';
    footer.appendChild(footerContent3);
}