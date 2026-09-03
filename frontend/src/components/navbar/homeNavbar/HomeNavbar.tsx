import Navbar from "../Navbar";
import Button from "../../button/Button";
import { Link } from "react-router-dom";
import LightbulbIcon from "../../../assets/icons/lightbulb.svg?react";

export default function HomeNavbar()
{
    return (
        <Navbar>
            <nav className="links">
                <a href="#how-it-works">Jak to działa</a>
                <a href="#price-plans">Cennik</a>
                <a href="#opinions">Opinie</a>
            </nav>
            <section className="order-btn">
                <Link to="order">
                    <Button>
                        <span>Zamów pomysł</span>
                        <LightbulbIcon />
                    </Button>
                </Link>
            </section>
        </Navbar>
    );
}