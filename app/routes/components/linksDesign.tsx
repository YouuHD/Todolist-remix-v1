import {Link} from "@remix-run/react"

const LinkDesign = ({text , link , style} : {text : string , link : string , style : string}) => {
    return(
        <Link to={link} className={style}>
            {text}
        </Link>
    )
}

export default LinkDesign