import OrderStep from "../../OrderStep";
import type { OrderStepProps } from "../stepTypes";
import "./orderSummaryStep.css";



export default function OrderSummaryStep({
    prevStep,
    nextStep,
}: OrderStepProps)
{

    return (
        <OrderStep
            title="Ostatni krok"
            description="Coś jeszcze warte wspomnienia? Sprawdź podsumowanie i wyślij zamówienie."
            prevStep={prevStep}
            nextStep={nextStep}
            stepPhase="end"
            className="order-summary-step"
        >
            <div>dsfsdf sdf sd sdf</div>
        </OrderStep>
    )
}