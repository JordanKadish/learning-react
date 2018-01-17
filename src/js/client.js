import React from "react";
import ReactDOM from "react-dom"; // rendering engine, separated to allow syntax versatility

class Layout extends React.Component{ // Everything is a component, similar to everything in HTML being an element (head, body, h1 etc)
    
    // Here, we're gonna type some Javascript code
    constructor(){// js has constructor methods!
        super(); // because we're inside a component, we must always super() a constructor (inheritance basics)
        this.bob = "Bob"
    }

    getStr(){ // Just a normal func returning a string
        const string1 = "working!!";
        return string1;
    }

    render(){ // render method is essentially "what are we outputting?"
        return( // Anything in {} is evaluated as js code! so string1 prints correctly
                // we call "this" because the getStr() function is in this class/component object
            <h1>{this.bob}, it's {this.getStr()}</h1>
            // in js, we can do stuff like 'var div = document.createElement("div")'
            // this allows stuff like "div.innerHTML" for example. But this is effort, so react allows us to type native HTML as above
        );
    }
}

const app = document.getElementById('app'); // we get the 'app' id from the html page
ReactDOM.render(<Layout/>, app); // here's where the rendering happens. We use the class as an element tag and render it into the page id we got