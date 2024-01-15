"use strict";
// Playground by Bartosz Pudo

// Creates the Array for languages that will be used later.
const langArray = ['html', 'css', 'javascript'];

// Creates a style element and appends it to the body.
function createStyle(content) {
    let style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = content;
    document.body.appendChild(style);
    // Turned off cuz it trashes the console logs. 
    // console.log(style);
}

function createPlaygroundView() {
        let playgroundView = document.createElement("div");
        playgroundView.classList.add("playground-view");
        document.body.appendChild(playgroundView);
        let script = document.createElement("script");
        script.type = "text/javascript";
        playgroundView.appendChild(script);
}

function createLangTextarea() {
    // Creates the textareas and appends them to the body.
    let langTextareaContainer = document.createElement("div");
    langTextareaContainer.classList.add("lang-textarea-container");
    const langTextarea = document.createElement("textarea");
    for (let i = 0; i <= langArray.length - 1; i++) {
        let langTextarea = document.createElement("textarea");
        // Setting classlist and id to langTextarea.
        langTextarea.classList.add("lang-textarea");
        langTextarea.setAttribute("id", langArray[i]);
        // Appends the textarea to the body.
        langTextareaContainer.appendChild(langTextarea);

        console.log(langTextarea);
        langTextarea.addEventListener("focusout", () => {
            let content = langTextarea.value;
            uploader(content);
        });
    }
    document.body.appendChild(langTextareaContainer);
}

function uploader(content) {        
    switch (document.querySelector(`#${langArray[0]}`).id) {
        case 'html':
            let html = '';
            html = content;
            document.body.querySelector('div.playground-view').innerHTML = html;
        break;
        case 'css':
            console.log("Currently not supported!");
            // let pg_style = document.createElement("style");
            // pg_style.type = 'text/css';
            // pg_style = content;
            // document.body.querySelector('div.playground-view').appendChild(pg_style);
        break; 
        case 'javascript':
            console.log("Currently not supported!");
            // const script = content.value;
            // const playgroundView = document.querySelector('playgroundView');

            // const startCompiling = new Function(script);
            // eval(script);
            // playgroundView.innerHTML = `function startCompiling(){${script}}`;

            // startCompiling();
        break;
        default:
            // DODAĆ Linie na końcu dla błędu
            console.log("Wrong Language! Can't upload content! Watch Line ");
        break;
    }
}

// If the document is loaded, run the functions.
document.addEventListener("DOMContentLoaded", () => {
    createLangTextarea();
    createPlaygroundView();
    // Prebaked style info uploads to the style element.
    const styleString = (`
    .lang-textarea{
        width: 28%;
        height: 300px;
    }
    #html{
        color: white;
        background-color: orange;
    }
    #css{
        color: white;
        background-color: blue;
    }
    #javascript{
        background-color: yellow;
    }
    .lang-textarea-container{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .playground-view{
        display: flexbox;
        margin: auto;
        width: 98%;
        height: 500px;
        border: solid black 1px;
    }
    `);

    createStyle(styleString);
});

