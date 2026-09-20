import OrderStep from "../../OrderStep";
import type { OrderStepProps } from "../stepTypes";
import "./orderCustomerDataStep.css";

export default function OrderCustomerDataStep({
    prevStep,
    nextStep,
}: OrderStepProps)
{

    return (
        <OrderStep
            title="Zacznijmy od Ciebie"
            description="Podaj dane kontaktowe &mdash; wyślemy ci na nie spersonalizowaną propozycję."
            prevStep={prevStep}
            nextStep={nextStep}
            stepPhase="start"
            className="order-customer-data-step"
        >
            <div>dsfsdf sdf sd sdf</div>
        </OrderStep>
    )
}