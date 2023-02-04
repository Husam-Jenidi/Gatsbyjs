
import Greeting from "../components/Greeting"
import * as React from 'react'
import {Link} from "gatsby";

// Rendering the <Greeting> component
const SayHello = () => {
    return (
        <div>
            <Greeting name="Husa" />
            <Greeting name="sham" />
            <Greeting name="sana" />
            <h1><Link to="../">home</Link> </h1>
        </div>
    )
}

export default SayHello
export const Head = () => <title>About Me</title>

