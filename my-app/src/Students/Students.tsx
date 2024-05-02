import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/")
    .then(res => setStudents(res.data))
    .catch(err => console.log(err));
  }, []);

  const handleDelete = (id: number) => {
     axios.delete("http://localhost:8081/student/"+id)
     .then(res => window.location.reload())
     .catch(err => console.log(err));
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((student:any) => (
                <tr key={student.ID}>
                  <td>{student.ID}</td>
                  <td>{student.Name}</td>
                  <td>{student.Email}</td>
                  <td><Link to={`/update/${student.ID}`} className='btn btn-primary'>Update</Link></td>
                  <td><button className='btn btn-danger' onClick={() => handleDelete(student.ID)}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Students
