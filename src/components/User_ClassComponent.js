import React from "react";

class UserClass extends React.Component {

    constructor (props){
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy name",
                login : "Defualt id",
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

        const {name, id, login, avatar_url} = this.state.userInfo

        return(
            <div className="member-card mt-4 p-2 w-[36rem] border-4 rounded-2xl border-blue-600 flex items-center justify-evenly">
                <div>
                    <h1>Name : {name}</h1>
                    <h2>Role : Developer</h2>
                    <h3>GitHub ID : {login}</h3>
                    <h3>ID : {id}</h3>
                </div>
                <img src={avatar_url} className="rounded-full border-2 border-black"/>

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