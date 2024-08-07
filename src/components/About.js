// import User from "./User"
import UserClass from "./User_ClassComponent"
import React from "react"
import UserContext from "../utils/UserContext"

class  About extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="px-4 py-2">
                <UserContext.Consumer>
                    { ({loggedInUser}) => <h1 className="text-2xl pb-4">Welcome {loggedInUser}!!</h1>}
                </UserContext.Consumer>
                <h1 className="text-4xl font-bold">About</h1>
                <h2 className="text-xl">This is the about page</h2>
                <UserClass name={"Akshat (class)"} location={"Remote (class)"}/>
            </div>
        )
    }
}


// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is the about page</h2>
//             <User name={"Akshat (function)"}/>
//             <UserClass name={"Akshat (class)"} location={"Remote (class)"}/>
//         </div>
//     )
// }

export default About