import PropTypes from 'prop-types'
const InputField = ({type,label,name,value,placeholder,className,id,required,onChange}) => {
    const handleChange = (e) => {
        const {name,value} = e.target;
        onChange(name,value);
    }
    return (
        <>
        {
            (type==='textarea')
            ?
            <div className={required?'required':''}>
                {
                    label && (<label htmlFor={id} className="form-label">{label}</label>)
                }
                <textarea
                    name={name}
                    className={`${className} form-control`} 
                    id={id} 
                    rows="4"
                    placeholder={placeholder}
                    onChange={handleChange}
                >
                    {value}
                </textarea> 
            </div>
            :
            <div className={required?'required':''}>
                {
                    label && (<label htmlFor={id} className="form-label">{label}</label>)
                }
                <input 
                    type={type}
                    value={value} 
                    name={name}
                    className={`${className} form-control`} 
                    id={id} 
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            </div>
        }   
        </>
    )
}

InputField.defaultProps = {
    type:'text',
    label:"",
    name:"",
    placeholder:"",
    className:"",
    id:"",
    required:false,
}
InputField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    required:PropTypes.bool,
    onChange:PropTypes.func.isRequired
}
export default InputField;