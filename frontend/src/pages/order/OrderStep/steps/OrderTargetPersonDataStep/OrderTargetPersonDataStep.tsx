import OrderStep from "../../OrderStep";
import type { OrderStepProps } from "../stepTypes";
import DropDownList from "../../../../../components/inputField/dropDownList/DropDownList";
import FadeIn from "../../../../../components/fadeIn/FadeIn";

import "./orderTargetPersonDataStep.css";
import InputField from "../../../../../components/inputField/InputField";


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
                            <InputField label="Wiek osoby" inputId="target-person-age" required={true}>
                                <input id="target-person-age" type="text" inputMode="numeric" placeholder="np. 16" maxLength={3}/>
                            </InputField>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="default-width z-index-high">
                            <DropDownList
                                onChange={() => {}}
                                options={["Męższczyzna", "Kobieta"]}
                                label="Płeć"
                                inputId="sex"
                                required={true}
                            />
                        </div>
                    </FadeIn>
                </div>
                <FadeIn>
                    <div className="default-width z-index-mid">
                        <DropDownList
                            onChange={() => {}}
                            options={[
                                "Urodziny",
                                "Imieniny",
                                "Walentynki",
                                "Boże Narodzenie",
                                "Wielkanoc",
                                "Dzień Matki",
                                "Dzień Ojca",
                                "Dzień Babci",
                                "Dzień Dziadka",
                                "Dzień Dziecka",
                                "Rocznica",
                                "Ślub",
                                "Narodziny dziecka",
                                "Awans lub sukces",
                                "Podziękowanie",
                                "Przeprosiny",
                                "Bez okazji",
                                "Inna okazja"
                            ]}
                            label="Okazja"
                            inputId="occasion"
                            required={true}
                        />
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="default-width">
                        <InputField label="Relacja" inputId="relation" required={true}>
                            <input id="relation" type="text" placeholder="np. przyjaciel, rodzic, kolega z pracy..."/>
                        </InputField>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="default-width">
                        <DropDownList
                            onChange={() => {}}
                            options={["Do 50 zł",
                                    "50-100 zł",
                                    "100-150 zł",
                                    "150-200 zł",
                                    "200-300 zł",
                                    "300-500 zł",
                                    "500-750 zł",
                                    "750-1000 zł",
                                    "1000+ zł",
                                    "Bez limitu"]}
                            label="Budżet na prezent"
                            inputId="budget"
                            required={true}
                        />
                    </div>
                </FadeIn>
            </form>
        </OrderStep>
    )
}