import OrderNavbar from "../../components/navbar/orderNavbar/OrderNavbar";
import Steps from "../../components/steps/Steps";
import FadeIn from "../../components/fadeIn/FadeIn";
import OrderCustomerDataStep from "./OrderStep/steps/OrderCustomerDataStep/OrderCustomerDataStep";
import { useState, type ReactElement } from "react";
import "./order.css";
import OrderTargetPersonDataStep from "./OrderStep/steps/OrderTargetPersonDataStep/OrderTargetPersonDataStep";
import OrderTargetPersonPersonoalityStep from "./OrderStep/steps/OrderTargetPersonPersonoalityStep/OrderTargetPersonPersonoalityStep";
import OrderSummaryStep from "./OrderStep/steps/OrderSummaryStep/OrderSummaryStep";
import usePricePlan from "../../hooks/usePricePlan";

export default function Order()
{
    usePricePlan();

    const stepNames = ["Twoje dane", "O osobie", "Osobowość", "Podsumowanie"];
    const stepComponents: ReactElement[] = [
        (<OrderCustomerDataStep
            prevStep = {() => {}}
            nextStep={() => setStep((prev) => prev + 1)}
        />),
        (<OrderTargetPersonDataStep
            prevStep = {() => {setStep((prev) => prev - 1)}}
            nextStep={() => setStep((prev) => prev + 1)}
        />),
        (<OrderTargetPersonPersonoalityStep
            prevStep = {() => {setStep((prev) => prev - 1)}}
            nextStep={() => setStep((prev) => prev + 1)}
        />),
        (<OrderSummaryStep
            prevStep = {() => {setStep((prev) => prev - 1)}}
            nextStep={() => {console.log("data send")}}
        />),
    ];

    const [step, setStep] = useState(1);

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
                {stepComponents[step - 1]}
            </main>
        </div>
    )
}