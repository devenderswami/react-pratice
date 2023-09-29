import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"}
,[React.createElement("h1",{},"this is Namaste React 🚀"),
React.createElement("h2",{},"I,m an h2 tag")])) 

console.log(parent)


//const heading = React.createElement("h1",{id:"heading"},"Hello World From react!")
const root = ReactDOM.createRoot(document.getElementById("root"))
 root.render(parent)
