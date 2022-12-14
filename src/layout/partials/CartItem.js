import { Icon } from "@mui/material";
const CartItem = () => {
    return (
        <>
            <div className="offcanvas offcanvas-end" data-bs-backdrop="static" id="offcanvasCart">
                <div className="offcanvas-header py-2 bg-primary">
                    <h5 className="offcanvas-title text-white">My Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-0">
                        <div className="w-100 py-2 px-3 d-flex  cart-card">
                            <div className="product-img my-auto" style={{width:160}}>
                                <img src="media/products/food.jpg" alt="" />
                            </div>
                            <div className="ps-3 w-100">
                                <p className="title mb-0"><b>Product Title</b></p>
                                <p className="price mb-1 text-success">₹1200</p>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary"><Icon>remove</Icon></button>
                                    <button type="button" className="qty btn btn-primary">12</button>
                                    <button type="button" className="btn btn-primary"><Icon>add</Icon></button>
                                </div>
                            </div>
                            <div className="my-auto">
                                <div className="pointer"><Icon sx={{color:'red'}}>delete</Icon></div>
                            </div>
                        </div>
                        <div className="w-100 py-2 px-3 d-flex  cart-card">
                            <div className="product-img my-auto" style={{width:160}}>
                                <img src="media/products/food.jpg" alt="" />
                            </div>
                            <div className="ps-3 w-100">
                                <p className="title mb-0"><b>Product Title</b></p>
                                <p className="price mb-1 text-success">₹1200</p>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary"><Icon>remove</Icon></button>
                                    <button type="button" className="qty btn btn-primary">12</button>
                                    <button type="button" className="btn btn-primary"><Icon>add</Icon></button>
                                </div>
                            </div>
                            <div className="my-auto">
                                <div className="pointer"><Icon sx={{color:'red'}}>delete</Icon></div>
                            </div>
                        </div>
                        <div className="w-100 py-2 px-3 d-flex  cart-card">
                            <div className="product-img my-auto" style={{width:160}}>
                                <img src="media/products/food.jpg" alt="" />
                            </div>
                            <div className="ps-3 w-100">
                                <p className="title mb-0"><b>Product Title</b></p>
                                <p className="price mb-1 text-success">₹1200</p>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary"><Icon>remove</Icon></button>
                                    <button type="button" className="qty btn btn-primary">12</button>
                                    <button type="button" className="btn btn-primary"><Icon>add</Icon></button>
                                </div>
                            </div>
                            <div className="my-auto">
                                <div className="pointer"><Icon sx={{color:'red'}}>delete</Icon></div>
                            </div>
                        </div>

                </div>
            </div>
        </>
    )
}
export default CartItem;