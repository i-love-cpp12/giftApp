import LogoIcon from "../../../assets/icons/logo.svg?react";
import { Link } from "react-router-dom";
import FadeIn from "../../fadeIn/FadeIn";
import "./homeFooter.css"

export default function HomeFooter()
{
    return (
        <footer className="home-footer">
            <FadeIn>
                <div className="logo">
                    <LogoIcon />
                    <span>Perfect Present</span>
                </div>
            </FadeIn>
            <FadeIn>
                <div className="copy-right">
                    &copy; {new Date().getFullYear()} Idealny Prezent &middot; Wszystkie prawa zastrzeżone
                </div>
            </FadeIn>
            <FadeIn>
                <div className="admin-panel">
                    <Link to="/admin">admin</Link>
                </div>
            </FadeIn>
        </footer>
    )
}