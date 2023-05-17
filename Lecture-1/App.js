import React from "react";
import ReactDOM from "react-dom/client";

// react element
const heading = <h1 id="heading">Namaste React with JSX🚀</h1>;

// react component 
const HeadingComponent = () => {
    return <h1>Namaste react Heading Component</h1>;
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
