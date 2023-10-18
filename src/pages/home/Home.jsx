import React from 'react'

export default function Home() {

    const accessToken = localStorage.getItem("accessToken");

    return (
        <div>my token: {accessToken}</div>
    )
}
