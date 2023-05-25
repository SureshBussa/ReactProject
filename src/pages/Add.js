import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Add() {
  const [inputData, setInputData] = useState({name:'', sex:'', dob:'', salary:'', department:''})

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:3000/users', inputData)
    .then(res => {
      navigate('/dashboard');
      window.location.reload();
    })
    .catch(err => console.log(err));
  }

  const goBack= (e) => {
    e.preventDefault();
    window.history.back();
  }
  const handleLogout= () => {
    const confirm =window.confirm("are you sure ?")
    if(confirm){
      window.location.href="/";
    }
  }

  return (
    <div className='content' style={{backgroundImage: `url('https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg')`}}>
      <div className='container'>
        <div className='btn-group btn-group-lg d-flex' role="group" aria-label="....">
          <button className='btn btn-outline-light text-black' value={''} onClick={goBack}>Back</button>
          <button type="button" className="btn btn-outline-dark w-100" onClick={() => navigate('/dashboard')}>Employees</button>
          <button type="button" className="btn btn-outline-dark w-100">Edit</button>
          <button type="button" className="btn btn-outline-dark w-100 active">Add</button>
          <button type="button" className="btn btn-outline-dark w-100" onClick={() => handleLogout()}>Log Out</button>
        </div>
        <div className='d-flex w-100 justify-content-center align-items-center'>
          <div>
            <form onSubmit={handleSubmit}>
              <h1 >Add New Employee Details</h1>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' className='form-control' placeholder='Enter Name' required
                onChange={e => setInputData({...inputData, name: e.target.value})}/>
              </div>
              <div>
                <label htmlFor="sex">Sex</label>
                <select type="text" name='sex' className='form-control' placeholder='Enter M or F' required
                onChange={e => setInputData({...inputData, sex: e.target.value})}>
                  <option value={''}>None</option>
                  <option value={'M'}>M</option>
                  <option value={'F'}>F</option>
                </select>
              </div>
              <div>
                <label htmlFor="dob">DOB</label>
                <input type="date" name='dob' className='form-control' placeholder='Enter dob' required
                onChange={e => setInputData({...inputData, dob: e.target.value})}/>
              </div>
              <div>
                <label htmlFor="salary">Salary</label>
                <input type="text" name='salary' className='form-control' placeholder='Enter Salary' required
                onChange={e => setInputData({...inputData, salary: e.target.value})}/>
              </div>
              <div>
                <label htmlFor="department">Department</label>
                <select type="text" name='department' className='form-control' required
                onChange={e => setInputData({...inputData, department: e.target.value})}>
                  <option value={''}>Select One</option>
                  <option value={'HR'}>HR</option>
                  <option value={'Sales'}>Sales</option>
                  <option value={'Accounts'}>Accounts</option>
                </select>
              </div><br />
              <button className='btn btn-info'>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add;
