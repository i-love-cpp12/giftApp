import OrderStep from "../../OrderStep";
import type { OrderStepProps } from "../stepTypes";
import FadeIn from "../../../../../components/fadeIn/FadeIn";
import InputField from "../../../../../components/inputField/InputField";
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
            <form>
                <FadeIn>
                    <div className="default-width">
                        <InputField label="Zainteresowania i passje" inputId="target-person-passion" required={true}>
                            <textarea id="target-person-passion" placeholder="np. literatura, gotowanie, podróże, muzyka, technologia"></textarea>
                        </InputField>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="default-width">
                        <InputField label="Hobby &mdash; aktywności w czasie wolnym" inputId="target-person-hobby">
                            <textarea id="target-person-hobby" placeholder="np. majsterkowanie, wędkarstwo, fotografia, gry planszowe"></textarea>
                        </InputField>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="default-width">
                        <InputField label="Charakter osoby" inputId="target-person-personality">
                            <textarea id="target-person-personality" placeholder="np. spokojny, energetyczny, spontaniczny, skromny"></textarea>
                        </InputField>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="default-width">
                        <InputField label="Co osoba lubi i ceni" inputId="target-person-likes">
                            <textarea id="target-person-likes" placeholder="np. kawa, zwierzęta, kino, spokój, kolor zielony"></textarea>
                        </InputField>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="default-width">
                        <InputField label="Czego osoba nie lubi lub unika" inputId="target-person-dislikes">
                            <textarea id="target-person-dislikes" placeholder="np. hałas, rzeczy z plastiku, słodycze, zbędne gadżety"></textarea>
                        </InputField>
                    </div>
                </FadeIn>
            </form>
        </OrderStep>
    )
}