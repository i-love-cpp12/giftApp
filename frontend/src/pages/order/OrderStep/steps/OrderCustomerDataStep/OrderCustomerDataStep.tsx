import OrderStep from "../../OrderStep";
import type { OrderStepProps } from "../stepTypes";
import InputField from "../../../../../components/inputField/InputField";
import FadeIn from "../../../../../components/fadeIn/FadeIn";
import TileSingleChoiceInputField from "../../../../../components/tileSingleChoiceInputField/TileSingleChoiceInputField";
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
            <form>
                <FadeIn>
                    <div className="default-width">
                        <InputField label="Imie i nazwisko" required={true}>
                            <input type="text" placeholder="Jan Kowalski"/>
                        </InputField>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="default-width">
                        <InputField label="Adres e-mail" required={true}>
                            <input type="email" placeholder="jan@email.com"/>
                        </InputField>
                    </div>
                </FadeIn>
                <TileSingleChoiceInputField options={[]} required={false}>
                    jhkshdf
                </TileSingleChoiceInputField>
            </form>
        </OrderStep>
    )
}