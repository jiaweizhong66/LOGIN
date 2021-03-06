import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name:"", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    const alertMessage = () => {
        alert("DO not match, please retry.");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="inner-form">
                <h2>Login</h2>
                {(error != "") ? ( <div className="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="NAME">Name:</label>
                    <input type="text" name="name" id="name" required onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="EMAIL">Email:</label>
                    <input type="email" name="email" id="email" required onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="PASSWORD">Password:</label>
                    <input type="password" name="password" id="password" required onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="Login"/>
            </div>
        </form>
    )
}

export default LoginForm
