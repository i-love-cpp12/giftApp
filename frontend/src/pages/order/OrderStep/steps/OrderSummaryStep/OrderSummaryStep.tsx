import OrderStep from "../../OrderStep";
import type { OrderStepProps } from "../stepTypes";
import FadeIn from "../../../../../components/fadeIn/FadeIn";
import InputField from "../../../../../components/inputField/InputField";
import OrderSummary from "../../../../../components/orderSummary/OrderSummary";
import type { Email } from "../../../../../types/email";
import type { Budget } from "../../../../../types/budget";
import SparklesIcon from "../../../../../assets/icons/sparkles.svg?react";
import getPricePlanDetails from "../../../../../config/pricePlanDetails";
import usePricePlan from "../../../../../hooks/usePricePlan";

import "./orderSummaryStep.css";

export default function OrderSummaryStep({
    prevStep,
    nextStep,
}: OrderStepProps)
{
    const [plan] = usePricePlan();

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
                    <InputField label="Dodatkowe wskazówki" inputId="additional-info" required={false}>
                        <textarea id="additional-info" placeholder="np. ma alergię na kurz, daje tej osobie co roku..., chcę osobę zaskoczyć..."></textarea>
                    </InputField>
                </div>
            </FadeIn>
            <FadeIn>
                <div className="default-width">
                    <OrderSummary
                        customerName="Oliwier"
                        customerEmail={"oliwiermoskala2@gmail.com" as Email}
                        occasion="Urodziny"
                        targetPersonAge={16}
                        targetPersonSex="men"
                        realtion="brat"
                        budget={{from: 100, to: 500} as Budget}
                        pricePlan={plan} />
                </div>
            </FadeIn>
            <FadeIn>
                <div className="note default-width tile">
                    <SparklesIcon />
                    <p className="description">
                        Po wysłaniu formularza otrzymasz e-mail z linkiem do płatności. Propozycję prezentu wyślemy w ciągu <span>{getPricePlanDetails(plan).maxWaitHours} godzin</span> od zaksięgowania wpłaty.
                    </p>
                </div>
            </FadeIn>
        </OrderStep>
    )
}