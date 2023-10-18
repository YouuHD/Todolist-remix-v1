const Input = ({placeHolder} : {placeHolder : string}) => {
    return(
        <input 
            placeholder = {placeHolder} className="shadow-sm shadow-gray-500 rounded-md my-1.5 mx-1.5 justify-stretch text-center w-3/4"></input>
        
    )
}

export default Input