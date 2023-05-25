import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Update() {
  
  const {id} = useParams();
  useEffect(() => {
    axios.get('http://localhost:3000/users/'+id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-black p-5'>
        <form>
          <h1 >Edit Employees Data</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name' />
          </div>
          <div>
            <label htmlFor="sex">Sex</label>
            <input type="text" name='sex' className='form-control' placeholder='Enter M or F' />
          </div>
          <div>
            <label htmlFor="dob">DOB</label>
            <input type="number" name='dob' className='form-control' placeholder='Enter dob' />
          </div>
          <div>
            <label htmlFor="salary">Salary</label>
            <input type="number" name='salary' className='form-control' />
          </div>
          <div>
            <label htmlFor="department">Department</label>
            <input type="text" name='department' className='form-control' />
          </div><br />
          <button className='btn btn-info'>Update</button>
        </form>
      </div>
    </div>
    )
}

export default Update;
