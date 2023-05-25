import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";


function Dashboard() {
  const [data, setData] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/users`)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    const conf= window.confirm("Do you want to delete ?");
    if(conf){
    axios.delete('http://localhost:3000/users/'+id)
    .then(res => {
      window.location.reload();
    })
    .catch(err => console.log(err));
  }
  }
  const handleLogout= () => {
    const confirm =window.confirm("are you sure ?")
    if(confirm){
      window.location.href="/";
    }
  }
  return (
    <div className="content" style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2016/10/22/17/06/gradient-1761190_1280.jpg')`, 
    height: "600px"}}>
      <div className="container">
        <div className='btn-group btn-group-lg d-flex' role="group" aria-label="....">
          <button type="button" className="btn btn-outline-dark w-100 active">Employees</button>
          <button type="button" className="btn btn-outline-dark w-100">Edit</button>
          <button type="button" className="btn btn-outline-dark w-100" onClick={() => navigate('/add')}>Add</button>
          <button type="button" className="btn btn-outline-dark w-100" onClick={() => handleLogout()}>Log Out</button>
        </div>
        <div  >
          <table className="table table-striped table-bordered table-responsive">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Sex</th>
                <th>DOB</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.sex}</td>
                  <td>{user.dob}</td>
                  <td>{user.salary}</td>
                  <td>{user.department}</td>
                  <td>
                    <Link className="text-decoration-none btn btn-sm btn-success" to={`/edit/${user.id}`}>Edit</Link>
                    <button className="text-decoration-none btn btn-sm btn-danger mx-1" 
                    onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
