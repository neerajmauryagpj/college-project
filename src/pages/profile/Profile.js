import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"

export default function UserProfile(){
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const goDashboard = () =>{
        navigate('/',{ replace: true });
    }
    const changeName = () =>{
        setUserName(userName = 'Neeraj')
    }
    const getLocation = () =>{
        console.log(location);
    }
    let [userName,setUserName] = useState(params.name);
    return(
        <>
            <h1>Welcome <span className="text-primary">{userName}!</span></h1>
            <h1>This is User Profile Page</h1>
            <div className="col-3">
                <button className="btn btn-primary d-block mb-2" onClick={() => goDashboard()}>Go to Dashboard</button>
                <button className="btn btn-primary d-block mb-2" onClick={() => changeName()}>changeName</button>
                <button className="btn btn-primary d-block mb-2" onClick={() => getLocation()}>useLocation</button>
            </div>
        </>
    )
}