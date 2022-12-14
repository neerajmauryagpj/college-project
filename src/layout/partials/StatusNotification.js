import { useSelector } from "react-redux/es/exports";

const StatusNotification = () => {
    const status = useSelector(state => state.notification);
    return(
        <>
            <div className="alert-wrapper">
                {
                    status.map((data,index) => (
                        <div key={index} className={`alert ${(data.code === 'ERR_NETWORK')?'bg-danger':'bg-success'} text-white alert-dismissible`} role="alert">
                            <strong>{data.message}</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    ))
                }
                {/* <div className="alert bg-danger text-white alert-dismissible" role="alert">
                    <strong>A simple dark alert—check it out!</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> */}

            </div>
        </>
    )
}
export default StatusNotification;