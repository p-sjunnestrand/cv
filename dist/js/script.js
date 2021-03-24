document.getElementById('dynamicCont').innerHTML = '';
pageOne();

document.getElementById('btn-main').addEventListener('click', function(){
    document.getElementById('dynamicCont').innerHTML = '';
    pageOne();
});
document.getElementById('btn-modules').addEventListener('click', function(){
    document.getElementById('dynamicCont').innerHTML = '';
    pageTwo();
});
document.getElementById('btn-work').addEventListener('click', function(){
    document.getElementById('dynamicCont').innerHTML = '';
    pageThree();
    workContent();
});
document.getElementById('btn-education').addEventListener('click', function(){
    document.getElementById('dynamicCont').innerHTML = '';
    pageFour();
});
document.getElementById('btn-portfolio').addEventListener('click', function(){
    document.getElementById('dynamicCont').innerHTML = '';
    pageFive();
});

// -------------------------------------------------------------------------------------------------------------------
// -----------------------------------____   ___    ___   ____      ___   __  __ ____-----------------------------------
// -----------------------------------|| \\ // \\  // \\ ||        // \\  ||\ || ||  -----------------------------------
// -----------------------------------||_// ||=|| (( ___ ||==     ((   )) ||\\|| ||==-----------------------------------
// -----------------------------------||    || ||  \\_|| ||___     \\_//  || \|| |___-----------------------------------
// --------------------------------------------------------------------------------------------------------------------

function pageOne (){
    const personalInfo = document.createElement('section'); //personal info grid wrapper
    personalInfo.classList.add('personal-info');
    // personalInfo.classList.add('main-content');
    document.getElementById('dynamicCont').appendChild(personalInfo);//adds personal info to main content

    const personalInfoTop = document.createElement('div'); //top part of personal info page containing tech-talk
    personalInfoTop.classList.add('personal-info-top');
    personalInfo.appendChild(personalInfoTop); //adds top to personal info

    let mumboJumbo = ["Crypto-encabulator running at ∑4/1600V...", "Linear phase scattering stable...", "Multi spectrum quantifier modulation .01-α through 600-λ...", "Spectrostatic hypo-flux at 13/900γ..."] //array containing tech-talk

    const mumboJumboList = document.createElement('ul'); //creaste list for techtalk
    mumboJumboList.classList.add('personal-info-mumbojumbo');
    personalInfoTop.appendChild(mumboJumboList);

    for (let mumbo in mumboJumbo){//adds items from array to list
        mumboJumboList.insertAdjacentHTML('beforeend', `<li>${mumboJumbo[mumbo]}</li>`);   
    }

    const personalInfoStatus = document.createElement('p'); //adds STATUS-banner
    personalInfoStatus.insertAdjacentHTML('beforeend', 'STATUS: all systems nominal.');
    personalInfoStatus.classList.add('personal-info-status');
    personalInfoTop.appendChild(personalInfoStatus);

    let personalInfoHeading = document.createElement('div'); //adds ASCII name and corresponding info
    personalInfoHeading.classList.add('personal-info-heading');
    personalInfoHeading.innerHTML = `<p>Seventh Beach Industries<br>Autonomous Pseudo-Voltonic Lewitt-Hoffenfeld Manifold, AKA the</p>
    <img src="img/ascii-name.png" alt="The name 'Petter Sjunnestrand' written in ASCII characters." class="personal-info__name-ascii"/>
    <p class="model-name">Model 86-q4</p>`;
    personalInfo.appendChild(personalInfoHeading);

    let personalInfoImg = document.createElement('div'); //adds ASCII picture
    personalInfoImg.classList.add('personal-info-img');
    personalInfoImg.innerHTML = `<img src="img/profile-picture.png" alt="A profile picture of Petter in ASCII art style." class="personal-info__profile-picture"/>`;
    personalInfo.appendChild(personalInfoImg);

    let personalInfoWarning = document.createElement('div'); //adds warning to bottom
    personalInfoWarning.classList.add('personal-info-warning');
    personalInfoWarning.innerHTML = `<p>WARNING! DO NOT USE IF TRIHYDROXILATING PETA-FLUX EXCEEDS .2∆-p IN IMEDIATE SURROUNDINGS! ALWAYS CHECK THE HEXPHASIC CUPROLYTIC CAPACITATOR VALUES BEFORE START UP!</p>`;
    personalInfo.appendChild(personalInfoWarning);
}
// -------------------------------------------------------------------------------------------------------------------
// ----------------------------------- ____   ___    ___   ____    ______ __    __   ___  ------------------------------
// ----------------------------------- || \\ // \\  // \\ ||       | || | ||    ||  // \\ ------------------------------
// ----------------------------------- ||_// ||=|| (( ___ ||==       ||   \\ /\ // ((   ))------------------------------
// ----------------------------------- ||    || ||  \\_|| ||___      ||    \V/\V/   \\_//-------------------------------
// ---------------------------------------------------------------------------------------------------------------------

function pageTwo () {
    const modulesMain = document.createElement('section'); //modules main
    modulesMain.setAttribute('class', 'modules'/*'main-content modules'*/);
    document.getElementById('dynamicCont').appendChild(modulesMain);//adds modules to main content

    const modulesHeading = document.createElement('div'); //adds modules header
    modulesHeading.setAttribute('class', 'modules__heading');
    modulesHeading.innerHTML = `<h1>MODULES.EXE</h1>`;
    modulesMain.appendChild(modulesHeading);

    let langTech = document.createElement('div'); //adds module items
    langTech.classList.add('modules__item');
    let webProc = document.createElement('div');
    webProc.classList.add('modules__item');
    webProc.id = 'webProc';
    let eduMod = document.createElement('div');
    eduMod.classList.add('modules__item');
    eduMod.id = 'eduMod';
    modulesMain.append(langTech, webProc, eduMod);

    let langTechContents = `<h2>LangTech 400</h2>
    <p> Module enables two-way communication in selected languages. 
    The MENA-package includes Arabic, Sorani Kurdish and Hebrew.
    Note that skill in each individual language is controlled by amount of allocated memory. 
    The currently used AKH-program allocates memory as follows:</p>
    <div class="skills">
        <div class="skills__a1 label">Language</div>
        <div class="skills__a2 label">Memory</div>
        <div class="skills__a3 label">Skill</div>
        <div class="skills__b1">Swedish</div>
        <div class="skills__b2">320kB</div>
        <div class="skills__b3">*****</div>
        <div class="skills__c1">English</div>
        <div class="skills__c2">320kB</div>
        <div class="skills__c3">*****</div>
        <div class="skills__d1">Arabic</div>
        <div class="skills__d2">256kB</div>
        <div class="skills__d3">****<span class="faded-asterisk">*</span></div>
        <div class="skills__e1">Sorani</div>
        <div class="skills__e2">128kB</div>
        <div class="skills__e3">**<span class="faded-asterisk">***</span></div>
        <div class="skills__f1">Hebrew</div>
        <div class="skills__f2">64kB</div>
        <div class="skills__f3">*<span class="faded-asterisk">****</span></div>
    </div>`;

    langTech.innerHTML = `<div class='itemPic' id = 'langTech';>ق</div><div class = 'itemText'>LangTech 400</div>`;//`<h1 class="modules__names heading">LangTech 400</h1>
    langTech.addEventListener('click', ()=>{
        // let langTechWindow;
        moduleExpand(langTechContents);
        // let langTechWindow = document.createElement('div');
        // langTechWindow.classList.add('appWindow');
        // let escBtn = document.createElement('div');
        // escBtn.classList.add('escBtn');
        // escBtn.innerHTML = 'X';
        // langTechWindow.appendChild(escBtn);
        // let appBar = document.createElement('div');
        // appBar.innerHTML = '::::::::::::::::::::::::::::::::::::::::::::::';
        // appBar.classList.add('appBar');
        // langTechWindow.appendChild(appBar);
        // let appContents = document.createElement('div');
        // appContents.classList.add('appContents');
    
        // document.querySelector('.modules').appendChild(langTechWindow);
        // document.querySelector('.window').classList.add('expand');
    });
    
    // document.getElementById('btn').addEventListener('click', ()=>{
    //     document.querySelector('.window').classList.remove('expand');
    // });
    // `;
    webProc.innerHTML = `<img src='img/logo-websites-31321.png' alt = 'picture of stylized earth' class = 'itemPic'><div class = 'itemText'>WebProc-0.2</div>`;//`<h1 class="modules__names heading">WebProc-0.2</h1>
    let webProcContents =  `<h2>WebProc-0.2 (Beta)</h2>
    <p> The WebProc-0.2 (Beta) module enables skillful processing of web design tools including HTML, CSS & JavaScript.
    Note that the module is only in its Beta development stage and all features
    may not yet be 100% functional. The full release is expected in fall 2022. Allocated memory program below.</p>
    <div class="skills">
        <div class="skills__a1 label">Tool</div>
        <div class="skills__a2 label">Memory</div>
        <div class="skills__a3 label">Skill</div>
        <div class="skills__b1">HTML</div>
        <div class="skills__b2">192kB</div>
        <div class="skills__b3">***<span class="faded-asterisk">**</span></div>
        <div class="skills__c1">CSS</div>
        <div class="skills__c2">192kB</div>
        <div class="skills__c3">***<span class="faded-asterisk">**</span></div>
        <div class="skills__d1">JavaScript</div>
        <div class="skills__d2">128kB</div>
        <div class="skills__d3">**<span class="faded-asterisk">***</span></div>
    </div>`;

    webProc.addEventListener('click', ()=>{
        moduleExpand(webProcContents);
    });
    
    eduMod.innerHTML = `<img src='img/students-cap.png' alt = 'picture of stylized student cap' class = 'itemPic'><div class = 'itemText'>EduMod Alpha</div>`;//`<h1 class="modules__names heading">EduMod Alpha</h1>
    let eduModContents = `<h2>EduMod Alpha</h2>
        <p>Grants enhanced pedagogical abilities.</p>`;
    eduMod.addEventListener('click', ()=>{
        moduleExpand(eduModContents);
    });
}
function moduleExpand (moduleContents) {
    appWindow = document.createElement('div');
    appWindow.classList.add('appWindow');
    let appTopBar = document.createElement('div');
    appTopBar.classList.add('appTopBar');
    appWindow.appendChild(appTopBar);
    let escBtn = document.createElement('div');
    escBtn.classList.add('escBtn');
    escBtn.innerHTML = 'X';
    appTopBar.appendChild(escBtn);
    let appBar = document.createElement('div');
    appBar.innerHTML = '::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::';
    appBar.classList.add('appBar');
    appTopBar.appendChild(appBar);
    let appContents = document.createElement('div');
    appContents.innerHTML = moduleContents;
    appContents.classList.add('appContents');
    appWindow.appendChild(appContents);

    document.querySelector('.modules').appendChild(appWindow);

    escBtn.addEventListener('click', ()=>{
        appWindow.remove();
    });
    // document.querySelector('.window').classList.add('expand');
}
    // ------------------------------------------------------------------------------------------------------------------
    // ---------------------------- ____   ___    ___   ____    ______ __  __ ____   ____  ____-----------------------------
    // -----------------------------|| \\ // \\  // \\ ||       | || | ||  || || \\ ||    ||   -----------------------------
    // -----------------------------||_// ||=|| (( ___ ||==       ||   ||==|| ||_// ||==  ||== -----------------------------
    // -----------------------------||    || ||  \\_|| ||___      ||   ||  || || \\ ||___ ||___-----------------------------
    // --------------------------------------------------------------------------------------------------------------------
let workMain;
function pageThree () {
    workMain = document.createElement('section'); //work main
    workMain.setAttribute('class', 'work'/*'main-content work'*/);
    document.getElementById('dynamicCont').appendChild(workMain);//adds work to main content

    const workTop = document.createElement('div'); //work heading
    workTop.classList.add('work__top');
    workTop.innerHTML = `<h1 class="heading">WORK.EXE</h1>`;
}
function workContent() {
    fetch("js/contents.json")
    .then(function(response){
        return(response.json());
    })
    .then(function(data){
        console.log(data);
        for (let i = 0; i <= 2; i++){
            let columnWrapper = document.createElement('div');
            columnWrapper.classList.add('table-column-wrapper');
            workMain.appendChild(columnWrapper);
            console.log(columnWrapper);
            for (obj in data) {
                if (data[obj].label == true){
                    workMain.insertAdjacentHTML('beforeend', `<div class = ${data[obj].classes}>${data[obj].contents}</div>`);
                    console.log(obj);
                }
                else if (data[obj].column == i){
                console.log(data[obj]);
                columnWrapper.insertAdjacentHTML('beforeend', `<div class = ${data[obj].classes}>${data[obj].contents}</div>`);
                }
            }
        }
    })
}
// ------------------------------------------------------------------------------------------------------------
// ----------------------------- ____   ___    ___   ____     ____   ___   __ __ ____ -----------------------------
// ----------------------------- || \\ // \\  // \\ ||       ||     // \\  || || || \\-----------------------------
// ----------------------------- ||_// ||=|| (( ___ ||==     ||==  ((   )) || || ||_//-----------------------------
// ----------------------------- ||    || ||  \\_|| ||___    ||     \\_//  \\_// || \\-----------------------------
// ---------------------------------------------------------------------------------------------------------------

function pageFour () {
    const educationMain = document.createElement('section'); //education main
    educationMain.setAttribute('class', 'education'/*'main-content education'*/);
    document.getElementById('dynamicCont').appendChild(educationMain);//adds education to main content

    const educationTop = document.createElement('div');
    educationTop.classList.add('edu__top');
    educationMain.appendChild(educationTop);

    let educationWrp = document.createElement('div');
    educationWrp.innerHTML = `<div class="edu__year">Graduation year</div>
        <div class="edu__school">School</div>
        <div class="edu__description">Program</div>
        <!--Top row is a, Leftmost column is 1-->
        <div class="edu__a1">2022</div>
        <div class="edu__a2">Medieinstitutet</div>
        <div class="edu__a3">Front End Developer. Vocational education (YH).</div>
        <div class="edu__b1">2019</div>
        <div class="edu__b2">Uppsala University</div>
        <div class="edu__b3">Masters degree in Semitic languages.</div>
        <div class="edu__c1">2013</div>
        <div class="edu__c2">Uppsala University</div>
        <div class="edu__c3">Bachelor's degree in Arabic</div>
        <div class="edu__d1">2006</div>
        <div class="edu__d2">Nacka Gymnasium</div>
        <div class="edu__d3">High school diploma in social science/media</div>
        <div class="edu__e1">2005</div>
        <div class="edu__e2">Duluth East High School</div>
        <div class="edu__e3">One year high school studies in Minnesota as part of an exchange year.</div>
        <div class="edu__bottom"></div>`;
    educationMain.appendChild(educationWrp);
}

// ---------------------------------------------------------------------------------------------------------
// --------------------------------____   ___    ___   ____     ____ __ __ __  ____---------------------------
// --------------------------------|| \\ // \\  // \\ ||       ||    || || || ||   ---------------------------
// --------------------------------||_// ||=|| (( ___ ||==     ||==  || \\ // ||== ---------------------------
// --------------------------------||    || ||  \\_|| ||___    ||    ||  \V/  ||___---------------------------
// ----------------------------------------------------------------------------------------------------------

function pageFive () {
    const portfolioMain = document.createElement('section'); //portfolio main
    portfolioMain.setAttribute('class', 'portfolio'/*'main-content portfolio'*/);
    document.getElementById('dynamicCont').appendChild(portfolioMain);//adds portfolio to main content

    let portfolioTop = document.createElement('div');
    portfolioTop.classList.add('portfolio__top');
    portfolioTop.innerHTML = `<h1 class="heading">PORTFOLIO.XAML</h1>`;
    portfolioMain.appendChild(portfolioTop);

    let portfolioCont = document.createElement('div');
    portfolioCont.classList.add('portfolio-container');
    portfolioMain.appendChild(portfolioCont);

    portfolioCont.innerHTML = `<a href="https://www.ne7kisweidi.se">
        <div class="portfolio-item">
            <img src="img/ne7ki-sweidi.png" alt="The phrase 'Let's talk Swedish written' in Arabic." class="portfolio-item__picture">
            <div class="portfolio-item__text-wrapper">
                <p class="portfolio-item__text">Podcast for learning Swedish, in Arabic.</p>
            </div>
        </div>
    </a>
    <div class="portfolio-item portfolio-item">
        <div class="portfolio-item__text-wrapper portfolio-item__text-wrapper--empty">
            <p class="portfolio-item__text">Error 42<br>Directory empty.</p>
        </div>
    </div>
    <div class="portfolio-item portfolio-item">
        <div class="portfolio-item__text-wrapper portfolio-item__text-wrapper--empty">
            <p class="portfolio-item__text">Error 42<br>Directory empty.</p>
        </div>
    </div>`;
}

// Studentcap icon: <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
