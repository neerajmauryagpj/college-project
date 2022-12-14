
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Icon } from "@mui/material";
import { getUsers,deleteUser } from "../../../state/actions/usersAction";
const UserListing = () => {
    const state_data = useSelector(state => state.users);
    const dispatch = useDispatch();
    const getusers = () => {
        dispatch(getUsers());
    }
    const delete_user = (id) => {
        dispatch(deleteUser(id));
    }
    return (
        <>
            <div className="d-flex justify-content-between">
                <h4>All Users</h4>
                <button className="btn btn-primary" onClick={()=>{getusers()}}>Get Users</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr className="table-primary">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state_data.map((data, index)=> (
                            <tr key={index}>
                                <th scope="row">{data.id}</th>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone_number}</td>
                                <td>{data.gender}</td>
                                <td onClick={() => delete_user(data.id)}><Icon className="danger">delete</Icon></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default UserListing;