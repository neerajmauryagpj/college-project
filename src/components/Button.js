import PropTypes from 'prop-types';
const InputField = ({type,label,disable,loading,className,id,color,small,onClick}) => {
    
    const handleClick = () => {
        onClick();
    }
    return (
        <>
            <button id={id} disabled={disable} type={type} className={`btn btn-${color} ${className} ${small?'btn-sm':''}`} onClick={handleClick}>
                    <span>{label}</span>
                    {loading && <span className=" ms-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
            </button>
        </>
    )
}

InputField.defaultProps = {
    type:'button',
    label:"Button",
    className:"btn-default",
    color:"",
    id:"",
    loading:false,
    disable:false,
    small:false,
}
InputField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    id: PropTypes.string,
    loading:PropTypes.bool,
    disable:PropTypes.bool,
    small:PropTypes.bool,
    onClick:PropTypes.func,
}
export default InputField;