const Chip = ({text,color,className}) => {
    return(
        <div className={`custome-chip ${className}`} style={{background:color}}>
            {text}
        </div>
    )
}
export default Chip;