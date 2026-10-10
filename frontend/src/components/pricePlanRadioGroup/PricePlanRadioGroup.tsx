import RadioButtonGroup from "../inputField/radioButtonGroup/RadioButtonGroup"
import RadioButtonOption from "../inputField/radioButtonGroup/RadioButtonOption"
import CheckIcon from "../../assets/icons/check.svg?react";

import "./pricePlanRadioGroup.css";

type Plan = {
    value: string,
    name: string,
    isRecomended: boolean,
    price: number,
    planItems: string[]
};

interface PricePlanRadioGroupProps
{
    plans: Plan[],
    selectedPlan: string,
    onChange: (value: string) => void,
}

export default function PricePlanRadioGroup({
    plans,
    selectedPlan,
    onChange
}: PricePlanRadioGroupProps)
{
    return (
        <RadioButtonGroup
            label="Wybierz pakiet"
            name="price-plan"
            value={selectedPlan}
            onChange={(value) => { onChange(value) }}
            className="price-plan-radio-group">
            {plans.map((plan, i) => (
                <RadioButtonOption key={i} value={plan.value}>
                    {plan.isRecomended && (<div className="recomended">Polecany</div>)}
                    <div>{plan.name}</div>
                    <h2 style={{color: "var(--accent-color)"}}>{plan.price.toFixed(2)} zł</h2>
                    <div className="price-plan-items">
                        {plan.planItems.map((item, j) => (
                            <div key={j}>
                                <CheckIcon />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </RadioButtonOption>
            ))}
        </RadioButtonGroup>
    )
}
