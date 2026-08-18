import Navbar from "../Navbar";

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
                <button className="accent-btn">Zamów pomysł</button>
            </section>
        </Navbar>
    );
}