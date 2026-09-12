import Navbar from "../Navbar";
import "./orderNavbar.css";

interface OrderNavbarProps {
    step: number
    totalSteps: number
}

export default function OrderNavbar({
    step,
    totalSteps
}: OrderNavbarProps)
{
    return (
        <Navbar className="order-navbar">
            <div className="step">
                Krok {step} z {totalSteps}
            </div>
        </Navbar>
    );
}