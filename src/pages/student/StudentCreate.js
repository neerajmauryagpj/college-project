import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SelectInput from "../../components/SelectInput";
import InputField from "../../components/InputField";
import Button from "../../components/Button"
import { useState } from "react";
const StudentCreate = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
    const initialData ={
            first_name:"",
            last_name:"",
            class:"",
            section:"",
            gender:"",
            dob:"",
            roll_number:"",
            religion:"",
            email:"",
            file_upload:"",  
        };
    const [student,setStudent] = useState(initialData);
    const handleChange = (name,value) => {
        setStudent({...student,[name]:value})
        console.log(student);
    }
    const CreateOrUpdate = () => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },2000)
    }
    return(
        <>
            <div className="topbar-title">
                <h3 className='my-auto text-primary'>New Student</h3>
                <div>
                    <button onClick={() => navigate(-1)} className="btn btn-primary btn-sm"><ArrowBackIcon style={{height:20}}/></button>
                    {<button onClick={() => CreateOrUpdate()} className="btn btn-primary btn-sm ms-2">Save</button>}
                    <Button 
                        color="primary"
                        className="ms-2"
                        label="Save Student"
                        loading={loading}
                        disable={loading}
                        onClick={CreateOrUpdate}
                    />
                </div>
            </div>
            <div className="container-fluid height-fix">
                <div className="row px-2">
                    <div className="col-12 my-3">
                        <h3>Student Information</h3>
                    </div>
                </div>
                <div className="row px-4">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <SelectInput
                            label="Select Class"
                            placeholder='Select Class'
                            name="class"
                            items={[
                                {value:1,label:"BA"},
                                {value:2,label:"BSC"},
                                {value:3,label:"BCA"}
                            ]}
                            value={student.class}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="First Name"
                            placeholder='First Name'
                            name="first_name"
                            value={student.first_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="Last Name"
                            placeholder='Last Name'
                            name="last_name"
                            value={student.last_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="Class"
                            placeholder='Class'
                            name="class"
                            value={student.class}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="Section"
                            placeholder='Section'
                            name="section"
                            value={student.section}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="Gender"
                            placeholder='Gender'
                            name="gender"
                            value={student.gender}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="Date of Birth"
                            placeholder='Date of Birth'
                            name="last_name"
                            value={student.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="Roll Number"
                            placeholder='Roll Number'
                            name="roll_number"
                            value={student.roll_number}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="Religion"
                            placeholder='Religion'
                            name="religion"
                            value={student.religion}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="Email"
                            placeholder='Email'
                            name="email"
                            value={student.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="file"
                            label="Upload Photo"
                            placeholder='Upload Photo'
                            name="file_upload"
                            value={student.file_upload}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row px-2">
                    <div className="col-12 my-3">
                        <h3>Parents Information</h3>
                    </div>
                </div>
                <div className="row px-4">
                    <div className="col-12 col-md-6 col-lg-3 mb-3 required">
                        <InputField
                            type="text"
                            label="Father Name"
                            placeholder='Father Name'
                            name="father_name"
                            value={student.father_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="Mother Name"
                            placeholder='Mother Name'
                            name="mother_name"
                            value={student.mother_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="Occupation"
                            placeholder='Occupation'
                            name="occupation"
                            value={student.occpation}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="Phone Number"
                            placeholder='Phone Number'
                            name="phone_number"
                            value={student.phone_number}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="Religion"
                            placeholder='Religion'
                            name="religion"
                            value={student.religion}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <InputField
                            type="text"
                            label="District"
                            placeholder='District'
                            name="district"
                            value={student.district}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6  mb-3">
                        <InputField
                            type="textarea"
                            label="Address"
                            placeholder='Address'
                            name="address"
                            value={student.address}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default StudentCreate;