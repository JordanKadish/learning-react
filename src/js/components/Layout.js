import React from "react";
import Header from "./Header"
import Footer from "./Footer"

// Layout.js is going to be our top level, which imports all the other components to render
export default class Layout extends React.Component{ // Everything is a component, similar to everything in HTML being an element (head, body, h1 etc)
    // "export default" is used so we can use import in client.js
    // Here, we're gonna type some Javascript code
    constructor(){// js has constructor methods!
        super(); // because we're inside a component, we must always super() a constructor (inheritance basics)
        this.bob = "Bob" // we can set some global script variables here
    }

    getStr(){ // Just a normal func returning a string
        const string1 = "working!!";
        return string1;
    }

    render(){ // render method is essentially "what are we outputting?"
        return( // Anything in {} is evaluated as js code! so string1 prints correctly
                // we call "this" because the getStr() function is in this class/component object
            <div>
                <Header/> {/* This is coming from the Header.js component. Also, this is how to comment within the render() method */}
                <h1>{this.bob}, it's {this.getStr()}</h1>
                <Footer/>
            </div>
            // in js, we can do stuff like 'var div = document.createElement("div")'
            // this allows stuff like "div.innerHTML" for example. But this is effort, so react allows us to type native HTML as above
        );
    }
}