import CheckIcon from "../../../../assets/icons/check.svg?react";
import "./pricePlanItem.css";

interface PricePlanItemProps
{
    planItemContent: string,
    flipedColors ?: boolean
}

export default function PricePlanItem({
    planItemContent,
    flipedColors = false
}: PricePlanItemProps)
{
    return (
        <div className={`price-plan-item ${flipedColors ? "fliped-colors" : ""}`}>
            <CheckIcon />
            <span>{planItemContent}</span>
        </div>
    );
}