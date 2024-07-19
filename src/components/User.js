import { useState } from "react"

const User = (props) => {

    const [dummy] = useState("Functional component using useState hook")
    const [dummy2] = useState("2nd dummy variable from useState")

    return( 
        <div className="member-card">
            <h1>Name : {props.name}</h1>
            <h2>Role : Developer</h2>
            <h3>Location : Remote</h3>
            <h4>{dummy}</h4>
            <h4>{dummy2}</h4>
        </div>
    )
}

export default User