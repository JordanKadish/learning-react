import React from "react";
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

// Layout.js is going to be our top level, which imports all the other components to render
export default class Layout extends React.Component{ // Everything is a component, similar to everything in HTML being an element (head, body, h1 etc)
    // "export default" is used so we can use import in client.js
    // Here, we're gonna type some Javascript code
    constructor(){// js has constructor methods!
        super(); // because we're inside a component, we must always super() a constructor (inheritance basics)
        //this.bob = "Bob"; // we can set some global script variables here. NB: Not the correct way to do it, set these in state rather
        this.state = {name: "Bob"}; // set the state in the constructor
        //data in react gets handled two ways: state and prop. Here, we're using state (something called context, newer feature)
        // State is used if there is internal component data that only affects the component and its children
        // Further down in the return, we are passing a prop (title) to the Header.js method. Props are data shared between components
    }

    changeName(iname){
        this.setState({name: iname}); // causes a rerender. Just fyi, this will cause the console log in Header.js to kick in twice (Layout is parent DOM)
    }

    render(){ // render method is essentially "what are we outputting?"
        const injectHeader = "Injected from Layout.js!";
        return(
            <div>
                <Header title = {injectHeader}/> {/* This is coming from the Header.js component. Also, this is how to comment within the render() method */}
                {/*in the above header, we are sending variable data to the Header component, to be accessed in Header.js with "this.props"*/}
                {/*title is automatically converted to an object when passed through*/}
                <h1>{this.state.name}</h1>
                <Body changeName = {this.changeName.bind(this)}/> {/*sending the changeName function to Body.js as a prop*/}
                {/*The reason we bind(this) is so that when the func is called in body.js, it executes in the context of THIS Layout.js*/}
                {/*This means that no matter who calls the changeName func, it will change the name in the Layout component!*/}
                <Footer/>
            }
            </div>
            // in js, we can do stuff like 'var div = document.createElement("div")'
            // this allows stuff like "div.innerHTML" for example. But this is effort, so react allows us to type native HTML as above
            // Cool thing about React: it creates/manages a virtual DOM, and when we change certain parts, it will only rerender the CHANGED part (rest stays as is)
            // When it renders the component tree, it compares the virtual and actual DOM to see what's changed and that is what is rerendered
            // Reason this is good: js is fast, DOM is slow. The less DOM work we have to do the faster the page loads 
        );
    }
}