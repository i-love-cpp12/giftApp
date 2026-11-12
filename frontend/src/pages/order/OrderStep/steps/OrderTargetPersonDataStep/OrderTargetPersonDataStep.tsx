import OrderStep from "../../OrderStep";
import type { OrderStepProps } from "../stepTypes";
import DropDownList from "../../../../../components/inputField/dropDownList/DropDownList";
import FadeIn from "../../../../../components/fadeIn/FadeIn";

import "./orderTargetPersonDataStep.css";
import InputField from "../../../../../components/inputField/InputField";
import type { Sex } from "../../../../../types/sex";


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
                                options={[
                                    {label: "Męższczyzna", value: ("men" as Sex)},
                                    {label: "Kobieta", value: ("women" as Sex)}
                                ]}
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
                                {label: "Urodziny", value: "birthday"},
                                {label: "Imieniny", value: "name_day"},
                                {label: "Walentynki", value: "valentines_day"},
                                {label: "Boże Narodzenie", value: "christmas"},
                                {label: "Wielkanoc", value: "easter"},
                                {label: "Dzień Matki", value: "mothers_day"},
                                {label: "Dzień Ojca", value: "fathers_day"},
                                {label: "Dzień Babci", value: "grandmothers_day"},
                                {label: "Dzień Dziadka", value: "grandfathers_day"},
                                {label: "Dzień Dziecka", value: "childrens_day"},
                                {label: "Rocznica", value: "anniversary"},
                                {label: "Ślub", value: "wedding"},
                                {label: "Narodziny dziecka", value: "birth_of_child"},
                                {label: "Awans lub sukces", value: "promotion_or_success"},
                                {label: "Podziękowanie", value: "thank_you"},
                                {label: "Przeprosiny", value: "apology"},
                                {label: "Bez okazji", value: "just_because"},
                                {label: "Inna okazja", value: "other"}
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
                            options={[
                                {label: "Do 50 zł", value: JSON.stringify({ from: 0, to: 50 })},
                                {label: "50-100 zł", value: JSON.stringify({ from: 50, to: 100 })},
                                {label: "100-150 zł", value: JSON.stringify({ from: 100, to: 150 })},
                                {label: "150-200 zł", value: JSON.stringify({ from: 150, to: 200 })},
                                {label: "200-300 zł", value: JSON.stringify({ from: 200, to: 300 })},
                                {label: "300-500 zł", value: JSON.stringify({ from: 300, to: 500 })},
                                {label: "500-750 zł", value: JSON.stringify({ from: 500, to: 750 })},
                                {label: "750-1000 zł", value: JSON.stringify({ from: 750, to: 1000 })},
                                {label: "1000+ zł", value: JSON.stringify({ from: 1000, to: null })},
                                {label: "Bez limitu", value: JSON.stringify({ from: null, to: null })}
                            ]}
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