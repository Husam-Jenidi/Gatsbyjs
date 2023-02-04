
import Greeting from "../components/Greeting"
import * as React from 'react'
import {Link} from "gatsby";
import Layout from "../components/layout";

// Rendering the <Greeting> component
const SayHello = () => {
    return (
        <Layout pageTitle="About page">
        <div>
            <Greeting name="Husa" />
            <Greeting name="sham" />
            <Greeting name="sana" />
            <h1><Link to="../">home</Link> </h1>
        </div>
        </Layout>
    )
}

export default SayHello
export const Head = () => <title>About Me</title>

