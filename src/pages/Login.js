import React, { useState } from "react";
import { unameValidator, passwordValidator } from '../components/validation';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Login.css";


const Login = () => {
    const navigate = useNavigate()
    const [data,setData] = useState({
        username : '',
        password : ''
    })

    const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

    const {username,password} = data;

    const handleChange = e => {
        e.preventDefault();
		setData({ ...data, [e.target.name]: e.target.value });
	};


    const formSubmitter = e => {
		e.preventDefault();
		setsuccessMessage('');
		if (!unameValidator(data.username)) return seterrorMessage('Please enter valid user id');

		if (!passwordValidator(data.password))
			return seterrorMessage(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);
		//setsuccessMessage('Successfully Validated');
		if(data.username !== 'Suresh.@atos1' || data.password !== 'Password@1') return seterrorMessage('Invalid username or password');
            
		navigate('/dashboard')

	};


return (
    <div className='content' style={{backgroundImage:`url('https://st.depositphotos.com/1605581/3032/i/600/depositphotos_30328185-stock-photo-abstract-blue-background-business-card.jpg')`}} >
        <div  >
            <div className='btn-group btn-group-lg d-flex' role="group" aria-label="...">
            <button type="button" className="btn btn-outline-dark  active" style={{fontWeight:'bold' }}>Login</button>
         </div>
         <div className="container">
            <form  className="login" onSubmit={formSubmitter}>
                <h1 style={{fontSize:50, fontWeigth:"bold", textDecoration:"underline"}}>Login</h1>
                {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
                {successMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>}
                <label htmlFor="username" style={{fontSize:30, fontWeight:"bold"}}>User-name</label>
                <input type="text" name="username" placeholder="username" id="username" value={username} onChange={handleChange} />
                <label htmlFor="password" style={{fontSize:30, fontWeight:"bold"}}>Password</label>
                <input type="password" name="password" placeholder="password" id="password" value={password} onChange={handleChange}/>
                <button className="text-decoration-none btn btn-sm btn-dark" type="submit">Submit</button>
                <footer>
                    <p>First time? <Link to="/register">Create an account</Link>.</p>
                    <p><Link to="/" >Back to Homepage</Link>.</p>
                </footer>   
            </form>
         </div>
        </div> 

    </div>
)
}

export default Login;



