import React from "react";
// see Layout.js for more info
export default class Header extends React.Component{
    render(){// here, we are logging the props object as well as printing a variable from props: the title
        console.log(this.props);
        return(
            <div>
                <header>this is a header, titled "{this.props.title}"</header>
            </div>
        );
    }
}