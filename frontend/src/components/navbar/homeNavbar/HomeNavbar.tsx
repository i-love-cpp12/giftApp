import Navbar from "../Navbar";
import Button from "../../button/Button";
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
                <Button>
                    <span>Zamów pomysł</span>
                    <LightbulbIcon />
                </Button>
            </section>
        </Navbar>
    );
}