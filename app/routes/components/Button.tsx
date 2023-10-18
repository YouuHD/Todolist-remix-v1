const Button = ({ label , onClick , style , type} : {label : any , onClick : any , style : string , type : any} ) => {
    return(
        <button onClick={onClick} className={style}>
            {label }
        </button>
    )
}

export default Button