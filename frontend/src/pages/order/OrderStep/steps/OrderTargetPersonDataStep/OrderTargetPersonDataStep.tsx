import OrderStep from "../../OrderStep";
import type { OrderStepProps } from "../stepTypes";
import "./orderTargetPersonDataStep.css";



export default function OrderTargetPersonDataStep({
    prevStep,
    nextStep,
}: OrderStepProps)
{

    return (
        <OrderStep
            title="Opowiedz o osobie"
            description="Podstawowe informacje pomogą dopasować trafny prezent"
            prevStep={prevStep}
            nextStep={nextStep}
            stepPhase="normal"
            className="order-target-preson-data-step"
        >
            <div>dsfsdf sdf sd sdf</div>
        </OrderStep>
    )
}