import React from 'react'

function MainPage({name, Logout}) {
    return (
        <div className="welcome">
          <h2>Welcome, <span>{name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default MainPage
