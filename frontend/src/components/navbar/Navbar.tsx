import type { ReactNode } from "react";
import Logo from "../logo/Logo";
import "./navbar.css"

interface NavbarProps {
    children: ReactNode,
    className?: string
};

export default function Navbar({children, className}: NavbarProps)
{
    return (
        <header className={"navbar " + (className ?? "")}>
            <section>
                <Logo />
            </section>
            {children}
        </header>
    );
}