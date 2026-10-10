import OrderStep from "../../OrderStep";
import type { OrderStepProps } from "../stepTypes";
import InputField from "../../../../../components/inputField/InputField";
import FadeIn from "../../../../../components/fadeIn/FadeIn";
import "./orderCustomerDataStep.css";
import PricePlanRadioGroup from "../../../../../components/pricePlanRadioGroup/PricePlanRadioGroup";
import { type Plan } from "../../../../../types/pricePlan";

type statePlanSetter = React.Dispatch<React.SetStateAction<Plan>>;
interface OrderCustomerDataStepProps extends OrderStepProps
{
    plan: Plan,
    setPlan: statePlanSetter
}
export default function OrderCustomerDataStep({
    prevStep,
    nextStep,
    plan,
    setPlan
}: OrderCustomerDataStepProps)
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
            <form>
                <FadeIn>
                    <div className="default-width">
                        <InputField label="Imie i nazwisko" inputId="name" required={true}>
                            <input id="name" type="text" placeholder="Jan Kowalski"/>
                        </InputField>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="default-width">
                        <InputField label="Adres e-mail" inputId="email" required={true}>
                            <input id="email" type="email" placeholder="jan@email.com"/>
                        </InputField>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="default-width">
                        <PricePlanRadioGroup plans={[
                            {
                                value: "basic",
                                name: "Basic",
                                isRecomended: false,
                                price: 14.99,
                                planItems: [
                                    "1 propozycja prezentu",
                                    "Opis i uzasadnienie wyboru",
                                    "Odpowiedź w 24 godziny"
                                ]
                            },
                            {
                                value: "premium",
                                name: "Premium",
                                isRecomended: true,
                                price: 29.99,
                                planItems: [
                                    "2-3 propozycje prezentu",
                                    "Linki do zakupu online",
                                    "Wskazówki personalizacji",
                                    "Opcja pełnej obsługi",
                                    "Odpowiedź w 12 godzin"
                                ]
                            },
                        ]}
                        selectedPlan={plan}
                        onChange={(value: string) => setPlan(value as Plan)}/>
                    </div>
                </FadeIn>
            </form>
        </OrderStep>
    )
}