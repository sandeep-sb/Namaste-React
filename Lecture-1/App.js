import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "div", 
    {id: "parent"}, [
    React.createElement(
        "div", 
        {id: "child1"}, [
            React.createElement("h1", {}, "This is Namaste React🚀"),
            React.createElement("h2", {}, "This is an h2 tag")
        ]),
        React.createElement(
        "div", 
        {id: "child1"}, [
            React.createElement("h1", {}, "This is an h1 tag"),
            React.createElement("h2", {}, "This is an h2 tag")
        ])
    ]
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);