import PropTypes from 'prop-types'
const RadioGroup = ({label,items,name,value,placeholder,className,id,required,disable,multiple,loading,returnObject,onChange}) => {
    const handleChange = (e) => {
        const {name,value} = e.target;
        let return_val = value;
        if(returnObject){
            // eslint-disable-next-line
            const _val = items.find((el)=>el.value==value);
            return_val = _val
        }
        console.log({return_val:return_val})
        onChange(name,return_val);
    }
    return (
        <>
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
        </>
    )
}

RadioGroup.defaultProps = {
    label:"",
    name:"",
    placeholder:"",
    className:"",
    id:"",
    items:[],
    required:false,
    disable:false,
    loading:false,
    multiple:false,
    returnObject:false,
}
RadioGroup.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    items: PropTypes.array,
    required:PropTypes.bool,
    disable:PropTypes.bool,
    loading:PropTypes.bool,
    multiple:PropTypes.bool,
    returnObject:PropTypes.bool,
    onChange:PropTypes.func.isRequired
}
export default RadioGroup;