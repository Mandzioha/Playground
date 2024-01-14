"use strict";
// Playground by Bartosz Pudo

function uploader(content){
    const style = document.querySelector("style");    
    
    switch(langArray){
        case 'js':
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.innerHTML = content;
        break;
    }
}

// Creates a style element and appends it to the body.
function createStyle(content){
    let style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = content;
    document.body.appendChild(style);
    // Turned off cuz it trashes the console logs. 
    // console.log(style);
}

function createLangTextarea(){
    // Creates the Array for languages that will be used later.
        let langArray = ['html', 'css', 'javascript'];
    // Creates the textareas and appends them to the body.
        for(let i = 0; i <= langArray.length-1; i++){
        let langTextarea = document.createElement("textarea");
            // Setting classlist and id to langTextarea.
                langTextarea.classList.add("lang-textarea");    
                langTextarea.setAttribute("id", langArray[i]);
            // Appends the textarea to the body.
                document.body.appendChild(langTextarea);
                console.log(langTextarea);
                langTextarea.addEventListener("focusout", () => {
                    content = langTextarea.value;
                    uploader(content);
                });
        }
        
}

// If the document is loaded, run the functions.
document.addEventListener("DOMContentLoaded", () => {
    createLangTextarea();

    // Prebaked style info uploads to the style element.
    const styleString = (``);

    createStyle(styleString);
});

