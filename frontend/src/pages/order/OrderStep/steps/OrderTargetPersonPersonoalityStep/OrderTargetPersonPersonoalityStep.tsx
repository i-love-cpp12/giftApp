import OrderStep from "../../OrderStep";
import type { OrderStepProps } from "../stepTypes";
import "./orderTargetPersonPersonoalityStep.css";



export default function OrderTargetPersonPersonoalityStep({
    prevStep,
    nextStep,
}: OrderStepProps)
{

    return (
        <OrderStep
            title="Charakter i zainteresowania"
            description="Im więcej szczegółów podasz, tym trafniejszy będzie pomysł na prezent."
            prevStep={prevStep}
            nextStep={nextStep}
            stepPhase="normal"
            className="order-target-preson-personality-step"
        >
            <div>dsfsdf sdf sd sdf</div>
        </OrderStep>
    )
}