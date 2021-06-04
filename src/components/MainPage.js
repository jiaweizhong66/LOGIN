import React from 'react'

function MainPage({name, Logout}) {
  const btnClick = e=> {
    e.preventDefault();
    window.open("https://jiaweizhong66.github.io/");
  }

    return (
        <div className="welcome">
          <button onClick={Logout}>Logout</button>
          <h2>Welcome, <span>{name}</span></h2>
          <div className="card">
            <div className="card-content">
              <h2 className="title">Who am I</h2>
              <p className="intro">2A math student in University of Waterloo. Seeking 2021 fall intern</p>
              <a onClick={btnClick} className="button">Learn More</a>
            </div>
          </div>
        </div>
    )
}

export default MainPage
