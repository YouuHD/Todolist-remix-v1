//TERMINAR
const Container = ({ style , children} : {style : string , children : any}) => {
    let showIt = true;
    let template = `bg-slate-50 rounded-md shadow-gray-500 shadow-sm py-2.5 px-2.5 ${style}`;
    // console.log(template)
    return(
        
        <div className={template}>
            {children}
            
        </div>
    )
}

export default Container