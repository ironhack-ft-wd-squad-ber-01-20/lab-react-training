import React from "react";

const greetings = props =>{
    //create greeting variable set to empty string
    let greeting = "";
    //create an object that contains greeting in each language
    let language = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
    };
    //set greeting to language using a forEach
    Object.keys(language).forEach (lang => {
        if (lang === props.lang) {
            greeting = language[lang];
        }
    });

    return (
        <div>
            <div className ="greeting">
                <p lang ={props.lang}> {greeting} {props.children}</p>
            </div>
        </div>

    );
};

export default greetings;