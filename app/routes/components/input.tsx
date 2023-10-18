const Input = ({placeHolder , style , type , name} : {placeHolder : string , style : any , type : any , name : string}) => {
    return(
        <input name={name}
            placeholder = {placeHolder} className={style} type ={type}></input>
        
    )
}

export default Input