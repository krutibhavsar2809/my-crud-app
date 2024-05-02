import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface studentObject {
    name: string,
    email: string,
}

const CreateStudents = () => {
    const [student, setStudent] = useState<studentObject>({
        name: '',
        email: '',
    });
    const navigate = useNavigate();

    console.log('student.name', student.name);
    console.log('student.email', student.email)

    const handleCreateStudent = () => {
       axios.post("http://localhost:8081/create", { name: student.name, email: student.email })
       .then(res => { console.log('res', res); window.location.pathname = '/' })
       .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleCreateStudent}>
                    <h2>Add Student</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' placeholder='Enter Name' className='form-control' onChange={(event) => setStudent({ ...student, name: event?.target.value})} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='email' placeholder='Enter Email' className='form-control' onChange={(event) => setStudent({ ...student, email: event?.target.value})}/>
                    </div>
                    <button type="submit" className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateStudents
