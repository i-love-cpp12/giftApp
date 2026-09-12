import { useSearchParams } from "react-router-dom"
import OrderNavbar from "../../components/navbar/orderNavbar/OrderNavbar";
import { useState } from "react";
type Plan = "basic" | "premium" | "custom";

export default function Order()
{
    const [URLSearchParams] = useSearchParams();
    const planParam = URLSearchParams.get("plan")?.toLowerCase() ?? "";

    const possiblePlans = ["basic", "premium", "custom"];
    const plan: Plan = (possiblePlans.includes(planParam) ? planParam : "basic") as Plan;

    window.history.replaceState(null, "", `?plan=${plan}`);

    const [step, setStep] = useState(1);

    return (
        <>
            <OrderNavbar step={step} totalSteps={4} />
            <main>
                <div>{plan}</div>
            </main>
        </>
    )
}