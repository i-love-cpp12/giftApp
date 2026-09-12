import OrderNavbar from "../../components/navbar/orderNavbar/OrderNavbar";
import Steps from "../../components/steps/Steps";
import FadeIn from "../../components/fadeIn/FadeIn";
import { useSearchParams } from "react-router-dom"
import { useState } from "react";
import "./order.css";
type Plan = "basic" | "premium" | "custom";

export default function Order()
{
    const [URLSearchParams] = useSearchParams();
    const planParam = URLSearchParams.get("plan")?.toLowerCase() ?? "";

    const possiblePlans = ["basic", "premium", "custom"];
    const plan: Plan = (possiblePlans.includes(planParam) ? planParam : "basic") as Plan;

    window.history.replaceState(null, "", `?plan=${plan}`);

    const [step, setStep] = useState(2);

    return (
        <div className="order page">
            <OrderNavbar step={step} totalSteps={4} />
            <main>
                <FadeIn>
                    <div className="order-steps">
                        <Steps
                            step={step}
                            steps={["Twoje dane", "O osobie", "Osobowość", "Podsumowanie"]}
                        />
                    </div>
                </FadeIn>
                <div>{Array.from({length: 100}).map(_ => (<div>{plan}</div>))}</div>
            </main>
        </div>
    )
}