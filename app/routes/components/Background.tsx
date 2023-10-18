const Background = ({ style , children } : { children : any , style : any}) => {
    return(
        <div className={style}>
            {children}
        </div>
    )
}

export default Background