import React from "react";

class UserClass extends React.Component {

    constructor (props){
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy name",
                location : "Defualt location",
                id: 0X0,
                avatar_url: ""
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshat-jain11")
        const json = await data.json()
        this.setState({
            userInfo: json
        })
    }
    
    render() {

        // const {name, location} = this.props
        const {name, location, id, avatar_url} = this.state.userInfo

        return(
            <div className="member-card">
                <h1>Name : {name}</h1>
                <h2>Role : Developer</h2>
                <h3>Location : {location}</h3>
                <h3>ID : {id}</h3>
                <img src={avatar_url} />

                {/* <h4>Count : {dummy}</h4>
                <h4>Value of Dummy2: {dummy2}</h4>
                <button onClick={()=>{
                    this.setState({
                        dummy2: (dummy2 == "Increase 2") ? ("Decrease 1") : ("Increase 2") ,
                        dummy: (dummy2 == "Increase 2") ? (dummy+2) : (dummy-1)
                    })
                }}>
                    {dummy2}
                </button> */}
            </div>
        )
    }
}

export default UserClass