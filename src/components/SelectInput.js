import PropTypes from 'prop-types'
const SelectInput = ({label,items,name,value,placeholder,className,id,required,disable,multiple,loading,returnObject,onChange}) => {

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
                <select 
                    id={id} 
                    name={name}
                    className={`${className} form-select form-select-sm`}
                    placeholder={placeholder}
                    onChange={handleChange}
                    // eslint-disable-next-line
                    value={typeof(value)=='object'?value.value:value}
                    data={typeof(value)=='object'?value.value:value}
                    disabled={disable}
                >
                    <>
                    {
                        items.length?
                            items.map((row,key)=>(
                                    typeof(row)=="object"
                                    ?
                                    <option key={key} value={row.value}>{row.label}</option>
                                    :
                                    <option key={key} value={row}>{row}</option>
                            ))
                        :
                        <option value="">No Item</option>
                    }
                    </>
                </select>
            </div>
        </>
    )
}

SelectInput.defaultProps = {
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
SelectInput.propTypes = {
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
export default SelectInput;