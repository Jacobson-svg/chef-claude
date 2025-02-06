
import Header from './components/Header'
import Main from './components/Main'

import React from "react"
import { use } from "react"


export default function App(){

    const [userName, setUserName] = React.useState("Joe")

    return (
        <>
            <Header />
            <Main />

        </>
    )
}