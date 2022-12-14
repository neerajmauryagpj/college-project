import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {allSubject,semesters} from "../local/local"
const Subject = () => {
    const navigate = useNavigate();
    const [subjects,setSubject] = useState([]);
    const [semester,setSemester] = useState({});
    const {Id} = useParams();
    useEffect(()=>{
        const _subject = allSubject.filter((row)=> {
            return row.SemesterId === +Id
        });
        const _semester = semesters.find((row)=>{
            return row.Id === +Id 
        });
        setSemester(_semester);
        setSubject(_subject);
        // eslint-disable-next-line 
    },[Id])

    return (
        <>
        <div className="topbar-title">
            <h3 className='my-auto text-primary' dangerouslySetInnerHTML={{__html: semester.Name}}></h3>
            <button onClick={() => navigate(-1)} className="btn btn-primary btn-sm"><ArrowBackIcon style={{height:20}}/></button>
        </div>
        <div className="container-fluid">
            <div className="row justify-content-center">
                {
                    subjects.map((subject,index)=>(
                        <div key={index} className={`card px-0 m-2 text-center`} style={{width: '18rem',borderTop:'5px solid'}}>
                            <div className="card-body">
                                <h4 className="card-title py-3" dangerouslySetInnerHTML={{__html: subject.Name}}></h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default Subject;