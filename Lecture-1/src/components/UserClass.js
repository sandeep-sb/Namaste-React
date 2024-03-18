import React from "react";

class UserName extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "Dummy location",
            }
        };
    }

    async componentDidMount(){
        // api call
        const data  = await fetch("https://api.github.com/users/sandeep-sb");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json
        });
    }

    
    render() {
        
        const {followers, login, avatar_url} = this.state.userInfo;

        return (
            <div>
                
                <h2>Name: {login}</h2>
                <h3>Followers: {followers} </h3>
                <img
                    src={avatar_url}
                />
            </div>
        );
    };
}

export default UserName;