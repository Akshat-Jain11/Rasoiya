// import User from "./User"
import UserClass from "./User_ClassComponent"
import React from "react"

class  About extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is the about page</h2>
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