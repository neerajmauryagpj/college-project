
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { createUser } from "../../../state/actions/usersAction";
const UserCreate = () => {
    const dispatch = useDispatch();
    const [fromdata, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",
        gender: "",
    })
    const handleInput = (type) => (event) => {
        setFormData({ ...fromdata, [type]: event.target.value }); 
    }
    const saveForm = (event) => {
        event.preventDefault();
        dispatch(createUser(fromdata));
    }
    return(
        <>
        <form onSubmit={(event) => saveForm(event)}>
            <h4>Users</h4>
            <div className="mb-3">
                <label htmlFor="user-name" className="">User Name</label>
                <input type="text" className="form-control" id="user-name" value={fromdata.name} onChange={handleInput('name')} />
            </div>
            <div className="mb-3">
                <label htmlFor="user-email" className="">Email</label>
                <input type="email" className="form-control" id="user-email" value={fromdata.email} onChange={handleInput('email')} />
            </div>
            <div className="mb-3">
                <label htmlFor="user-phone" className="">Phone Number</label>
                <input type="number" className="form-control" id="user-phone" value={fromdata.phone_number} onChange={handleInput('phone_number')} />
            </div>
            <div className="mb-3">
                <label htmlFor="select-gender" className="">Gender</label>
                <select className="form-select" id="select-gender" value={fromdata.gender} onChange={handleInput('gender')}>
                    <option value={''}>Select Gender</option>
                    <option value={"M"}>Male</option>
                    <option value={"F"}>Female</option>
                </select>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary">Submit</button>
            </div>
            </form>
        </>
    )
}
export default UserCreate