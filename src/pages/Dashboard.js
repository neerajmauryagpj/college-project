import { useNavigate } from "react-router-dom";
import { semesters } from "../local/local";
import InputField from "../components/InputField";
import { useState } from "react";
const Dashboard = () => {
    // const [user,setUser] = useState('');
    const [user,setUser] = useState({name:'neeraj',email:'neeraj@dfg'});
    const navigate = useNavigate();
    const goSubject = (id) => {
        navigate(`/subject/${id}`);
    }
    const handleChange = (name,value) => {
        setUser({...user,[name]:value});
    }
    const updateData = () => {
        setUser({name:'Ankit',email:'ankit@dfg'});
    }
    return (
        <>
        <div className="topbar-title">
            <h3 className='my-auto text-primary'>Select Semester</h3>
        </div>
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div>
                    <button className="btn btn-primary" onClick={updateData}>Update data</button>
                </div>
                <div className="col-3">
                <InputField 
                    type="text"
                    label="Name"
                    placeholder='Name'
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                />
                <InputField 
                    type="email"
                    label="Email"
                    placeholder='Email'
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
                </div>
                {
                    semesters.map((semester,index)=>(
                        <div key={index} onClick={()=>goSubject(semester.Id)} className={`card px-0 m-2 gradient text-center pointer`} style={{width: '18rem',borderTop:'5px solid'}}>
                            <div className="card-body">
                                <h4 className="card-title py-3" dangerouslySetInnerHTML={{__html: semester.Name}}></h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default Dashboard;