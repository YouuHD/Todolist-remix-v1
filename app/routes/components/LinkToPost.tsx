import {Link} from "@remix-run/react"

const LinkToPost = ({text , link} : {text : string , link : string}) => {
    return(
        <Link to={link} className="text-xl text-blue-600 underline">
            {text}
        </Link>
    )
}

export default LinkToPost