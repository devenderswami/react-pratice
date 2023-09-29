import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS  object => HTMLElemenet(render)

// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste React"
// )
// console.log(heading)

//JSX(transpiled before it reaches to js engine)- Parcel - Babel

// JSX - > babel transpile it to  React.createElement => ReactElement - JS object => HTMLElement(render)

//const jsxHeading = <h1 id="heading">Namaste react using JSX 🚀 </h1>

// React Element
const jsxHeading = (
<h1 id="heading">  
Namaste react using JSX 🚀 
</h1>
);
// React Component
// class base components => old
// functional componenets => new

//React Functional component two ways

// const HeadingComponent = () =>{
//     return <h1>Namaste React Functional Component</h1>
// }
// functional Component
const Title = ()=>(
    <h1 className="head" tabIndex="5">
        Namaste react using JSX
    </h1>
);
// react element


const elem = <span>React Element</span>

// React Element
const  title = (
    <h1 className="head" tabIndex="5">
    {elem}
     this is title
</h1>
)

const number = 10000;

// Component Composition
const HeadingComponent = () =>(
    <div id="container">
     <Title />
     {title}
     <h2>{number}</h2>
     <h1 className="heading">Namaste React Functional Component</h1>
     </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading)

root.render(<HeadingComponent/>)



