import { NavLink } from "react-router-dom";
import Icon from '@mui/material/Icon';

const Sidebar = () => {
    return (
        <>
            <div className="wrapper">
                <span className="navbar-brand"  >
                    <img src="media/logo.svg" alt="" width="80" />
                </span>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : ''}>
                            <Icon sx={{ marginRight: '12px' }}>dashboard</Icon>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'active-link' : ''} >
                            <Icon sx={{ marginRight: '12px' }}>account_circle</Icon>
                            User Profile
                        </NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink to='/profile/John' className={({ isActive }) => isActive ? 'active-link' : ''}>
                            <Icon sx={{ marginRight: '12px' }}>manage_accounts</Icon>
                            Accounts
                        </NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink to='/test' className={({ isActive }) => isActive ? 'active-link' : ''} >
                            <Icon sx={{ marginRight: '12px' }}>lock</Icon>
                            Authentication
                        </NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink to='/users' className={({ isActive }) => isActive ? 'active-link' : ''} >
                            <Icon sx={{ marginRight: '12px' }}>person</Icon>
                            Add Users
                        </NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink to='/student' className={({ isActive }) => isActive ? 'active-link' : ''} >
                            <Icon sx={{ marginRight: '12px' }}>person</Icon>
                            Student
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Sidebar;