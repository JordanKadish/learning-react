import React from "react";
// see Layout.js for more info
export default class Body extends React.Component{
    constructor(){
        super();
        this.state = {name: "Jordan", newname: "George"};
    }

    getStr(){ // Just a normal func returning a string
        const string1 = "working!!";
        return string1;
    }

    render(){
        // Anything in {} is evaluated as js code! so string1 prints correctly
        // we call "this" because the getStr() function is in this class/component object
        return(
            <div>
                <div>
                    <h1> and {this.state.name}, it's {this.getStr()}</h1>
                    <input />
                </div>
            </div>
        );
    }

    componentDidMount(){
        setTimeout(// this method only activates 3 seconds after initial rendering
            () => {
                this.setState({name: this.state.newname}) // this is how to change state. Here, I am changing my name to the newname variable in state
                // setState() causes a rerender, so we can't call it within the render method (infinite loop!)
                // NB: putting this method in Layout.js causes the console log in Header.js to get called again!
                // I assume it's because Header.js is a child (rendered through Layout's render())?
            },
        3000) // make the change after 3000ms aka 3s
    }
}