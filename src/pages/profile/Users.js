
import UserCreate from "./components/UserCreate"
import UserListing from "./components/UserListing"
const Users = () => {
    return (
        <>
            <div className="row">
                <div className="col-4 px-5">
                    <UserCreate />
                </div>
                <div className="col-8">
                    <UserListing />
                </div>
            </div>
        </>
    )
}
export default Users