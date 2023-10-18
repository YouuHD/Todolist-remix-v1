const ImgContainer = ({ route, description } : {route : string , description : any}) => {
    let rt = `../img/`
    return(
        
        <div className={"rounded-md shadow-gray-500 shadow-sm py-2.5 px-2.5 mt-10 my-px"}>
            <img src={`../img/${route}`} alt={description} className="img-thumbnail"/>
        </div>
    )
}

export default ImgContainer