import HomeIcon from "../../assets/icons/logo.svg?react"
import { Link } from "react-router-dom"
import "./logo.css"

export default function Logo()
{
    return (
        <Link to="/home" className="logo">
            <HomeIcon className="logomark"/>
            <span className="logotype">perfect present</span>
        </Link>
    )
}