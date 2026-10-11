import OrderStep from "../../OrderStep";
import type { OrderStepProps } from "../stepTypes";
import FadeIn from "../../../../../components/fadeIn/FadeIn";
import InputField from "../../../../../components/inputField/InputField";
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
            <FadeIn>
                <div className="default-width">
                    <InputField label="Zainteresowania i passje" inputId="additional-info" required={false}>
                        <textarea id="additional-info" placeholder="np. ma alergię na kurz, daje tej osobie co roku..., chcę osobę zaskoczyć..."></textarea>
                    </InputField>
                </div>
            </FadeIn>
        </OrderStep>
    )
}