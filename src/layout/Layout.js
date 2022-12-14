
import { Outlet } from "react-router-dom";
import Sidebar from "./partials/Sidebar";
import Topbar from "./partials/Topbar";
function Layout() {
    return (
        <div className="main-layout">
            <Topbar />
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main-content">
                <div className='container-fluid px-0'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;