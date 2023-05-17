import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1 id="heading">Namaste React with JSX🚀</h1>;

const HeadingComponent = () => {
    return <div>
        <TitleComponent />
        <h1>Namaste react Heading Component</h1>
    </div>;
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
