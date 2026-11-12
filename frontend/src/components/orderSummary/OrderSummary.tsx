import getPricePlanDetails from "../../config/pricePlanDetails"
import { budgetToHumanString, type Budget } from "../../types/budget"
import type { Email } from "../../types/email"
import type { Plan } from "../../types/pricePlan"
import { sexToHumanString, type Sex } from "../../types/sex"
import { capilalizeFirstLetter } from "../../utils/stringUtils"
import "./orderSummary.css"

interface OrderSummaryProps
{
    customerName: string,
    customerEmail: Email,
    occasion: string,
    targetPersonAge: number,
    targetPersonSex: Sex,
    realtion: string,
    budget: Budget,
    pricePlan: Plan
}

export default function OrderSummary({
    customerName,
    customerEmail,
    occasion,
    targetPersonAge,
    targetPersonSex,
    realtion,
    budget,
    pricePlan
}: OrderSummaryProps)
{
    return (
        <div className="order-summary tile">
            <h4>Podsumowanie zamówienia</h4>
            <div className="summary">
                <div className="item-name">
                    Klient:
                </div>
                <div className="item-value">
                    {capilalizeFirstLetter(customerName.toLowerCase())} ({customerEmail.toLowerCase()})
                </div>

                <div className="item-name">
                    Okazja:
                </div>
                <div className="item-value">
                    {capilalizeFirstLetter(occasion.toLowerCase())}
                </div>

                <div className="item-name">
                    Osoba obdarowana:
                </div>
                <div className="item-value">
                    {targetPersonAge} lat, {sexToHumanString(targetPersonSex)}, relacja: {realtion}
                </div>

                <div className="item-name">
                    Budżet:
                </div>
                <div className="item-value">
                    {budgetToHumanString(budget)}
                </div>

                <div className="item-name">
                    Pakiet:
                </div>
                <div className="item-value">
                    {capilalizeFirstLetter(pricePlan as string)} - {getPricePlanDetails(pricePlan).cost + " zl" || "Wycena indywidualna"}
                </div>
            </div>
        </div>
    )
}