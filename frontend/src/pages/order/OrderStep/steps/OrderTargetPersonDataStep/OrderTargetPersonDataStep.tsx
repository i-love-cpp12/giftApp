import OrderStep from "../../OrderStep";
import type { OrderStepProps } from "../stepTypes";
import "./orderTargetPersonDataStep.css";
import DropDownList from "../../../../../components/inputField/dropDownList/DropDownList";
import FadeIn from "../../../../../components/fadeIn/FadeIn";



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
            <form>
                <div className="age-and-sex">
                    <FadeIn>
                        <div className="default-width">
                            <DropDownList onChange={() => {}} options={["kawa", "bal", "sdfsdf", "dfgdgf"]}/>
                        </div>
                    </FadeIn>
                </div>
            </form>
        </OrderStep>
    )
}