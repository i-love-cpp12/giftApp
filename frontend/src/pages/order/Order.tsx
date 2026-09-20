import OrderNavbar from "../../components/navbar/orderNavbar/OrderNavbar";
import Steps from "../../components/steps/Steps";
import FadeIn from "../../components/fadeIn/FadeIn";
import OrderStep from "./OrderStep/OrderStep";
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

    const stepNames = ["Twoje dane", "O osobie", "Osobowość", "Podsumowanie"];

    const [step, setStep] = useState(2);

    return (
        <div className="order">
            <OrderNavbar step={step} totalSteps={stepNames.length} />
            <main>
                <FadeIn>
                    <div className="order-steps">
                        <Steps
                            step={step}
                            steps={stepNames}
                        />
                    </div>
                </FadeIn>
                <OrderStep
                    title="Zacznijmy od coebie"
                    description="asd aslkd a lakds"
                    prevStep={() => setStep(prev => prev - 1)}
                    nextStep={() => setStep(prev => prev + 1)}
                    stepPhase={step == 1 ? "start" : ( step == stepNames.length ? "end" : "normal")}
                >
                    <div>{Array.from({length: 30}).map((_, i) => (<div key={i}>{plan}</div>))}</div>
                </OrderStep>
            </main>
        </div>
    )
}