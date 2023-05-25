import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUpPage() {

    return (
        <div style={{backgroundColor:'lightcyan'}} className="text-center -auto" >
            <h5 style={{fontWeight:'bold', fontSize:50}}>Create your personal account</h5>
            <form action="/dashboard">
                <p>
                    <label style={{fontWeight:'bold',fontSize:20}}>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label style={{fontWeight:'bold',fontSize:20}}>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label style={{fontWeight:'bold',fontSize:20}}>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span style={{fontWeight:'bold'}}>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button style={{fontWeight:'bold',fontSize:20}} id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}