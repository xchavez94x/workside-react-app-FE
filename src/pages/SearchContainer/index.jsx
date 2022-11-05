import React, { useRef } from 'react'
import Seacrh from '../../components/Search'

export default function SearchContainer() {
    const inputRef = useRef()
    return (
        <>
            <Seacrh input={inputRef} />
            <section style={{ color: "white" }}>
                fetched jobs Here 
            </section>
        </>

    )
}
