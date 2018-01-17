import React from "react";
import ReactDOM from "react-dom"; // rendering engine, separated to allow syntax versatility
import Layout from "./components/Layout"; // our js file containing the Layout class component we made

const app = document.getElementById('app'); // we get the 'app' id from the html page
ReactDOM.render(<Layout/>, app); // here's where the rendering happens. We use the class as an element tag and render it into the page id we got