import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {

    const {id} = useParams();
    const [values, setValues] = useState({
        id: id,
        name: '',
        sex: '',
        dob: '',
        salary: '',
        department: ''
    })

    useEffect(() => {
        axios.get('http://localhost:3000/users/'+id)
        .then(res => {
            setValues({...values, name: res.data.name, sex: res.data.sex, dob: res.data.dob, salary: res.data.salary, department: res.data.department})
        })
        .catch(err => console.log(err))
    },[])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/users/`+id, values)
        .then(res => {
            navigate('/dashboard');
        })
        .catch(err => console.log(err))
    }
    const handleLogout= () => {
        const confirm =window.confirm("are you sure ?")
        if(confirm){
          window.location.href="/";
        }
      }

    return (
        <div className='styling' style={{backgroundColor:'lightgreen'}}>
        <div className='container'>
            <div className='btn-group btn-group-lg d-flex' role="group" aria-label="....">
                <button type="button" className="btn btn-outline-dark w-100" onClick={() => navigate('/dashboard')}>Employees</button>
                <button type="button" className="btn btn-outline-dark w-100 active">Edit</button>
                <button type="button" className="btn btn-outline-dark w-100" onClick={() => navigate('/add')}>Add</button>
                <button type="button" className="btn btn-outline-dark w-100"  onClick={() => handleLogout()}>Log Out</button>
            </div>
            <div className='d-flex w-100 justify-content-center align-items-center'>
                <div >
                <form onSubmit={handleSubmit}>
                    <h1 >Edit Employee Details</h1>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' className='form-control' placeholder='Enter Name' 
                        value={values.name} onChange={e => setValues({...values, name: e.target.value})}/>
                    </div>
                        <div>
                            <label htmlFor="sex">Sex</label>
                            <select type="text" name='sex' className='form-control' placeholder='Enter M or F' 
                                value={values.sex} onChange={e => setValues({...values, sex: e.target.value})}>
                                <option>M</option>
                                 <option>F</option>
                            </select>
                        </div>
                    <div>
                        <label htmlFor="dob">DOB</label>
                        <input type="date" name='dob' className='form-control' placeholder='Enter dob' 
                        value={values.dob} onChange={e => setValues({...values, dob: e.target.value})}/>
                    </div>
                        <div>
                            <label htmlFor="salary">Salary</label>
                            <input type="number" name='salary' className='form-control' 
                            value={values.salary} onChange={e => setValues({...values, salary: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="department">Department</label>
                            <select type="text" name='department' className='form-control' 
                                value={values.department} onChange={e => setValues({...values, department: e.target.value})}>
                                <option>HR</option>
                                <option>Sales</option>
                                <option>Accounts</option>
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

export default Edit;
