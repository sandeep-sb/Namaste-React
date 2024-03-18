import React from "react";
import UserName from "./UserClass";

class About extends React.Component {
    
    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }
    
    componentDidMount(){
        console.log("Parent componentDidMount ")
    }

    render(){
        console.log("parent render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is namaste react series</h2>
                <UserName name={"Sandeep Singh"} location={"Lucknow"} contact={"@sandeepsb04"}/>
            </div>
        );
    }
}

export default About;