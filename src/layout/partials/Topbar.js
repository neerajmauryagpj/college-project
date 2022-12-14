import { Icon } from "@mui/material";
import CartItem from "./CartItem";
const Topbar = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg fixed-top header-top" style={{ backgroundColor: '#e3f2fd' }}>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <nav className="me-auto">
                                <ol className="breadcrumb my-auto">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active">Library</li>
                                </ol>
                            </nav>
                            <div className="d-flex align-items-center">
                                <div className="my-cart-btn pointer me-3 rounded-circle"
                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart"
                                    style={{ width: "35px", height: '35px' }}
                                >
                                    <Icon sx={{ color: 'white', fontSize: 18 }}>shopping_cart</Icon>
                                    <span className="badge text-bg-primary">20</span>
                                </div>
                                <div className="dropstart">
                                    <span className="d-flex align-items-center text-white text-decoration-none" data-bs-toggle="dropdown">
                                        <div className="pointer d-flex align-items-center justify-content-center bg-secondary  me-3 rounded-circle" style={{ width: "35px", height: '35px' }}>
                                            <Icon>person</Icon>
                                        </div>
                                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2 d-none" />
                                    </span>
                                    <ul className="dropdown-menu py-0" style={{ borderRadius: 0 }}>
                                        <li className="pointer"><span className="dropdown-item">Profile</span></li>
                                        <li className="pointer"><span className="dropdown-item">Settings</span></li>
                                        <li className="pointer"><hr className="dropdown-divider my-0" /></li>
                                        <li className="pointer"><span className="dropdown-item">Sign out</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <CartItem />
            </div>
        </>
    )
}
export default Topbar;