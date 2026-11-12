import { isValidPrice, priceToHumanString, type Price } from "./price";

export type Budget = {
    from: Price | null,
    to: Price | null
};

export function isValidBudget(budget: {from: number | null, to: number | null}): budget is Budget
{
    if(budget.from !== null && budget.to !== null && budget.from > budget.to)
        return false;

    return (
        (budget.from === null || isValidPrice(budget.from)) &&
        (budget.to === null || isValidPrice(budget.to))
    );
}
export function budgetToHumanString(budget: Budget): string
{
    if(budget.from === null && budget.to === null)
        return "Nie ograniczony";
    if(budget.from === null)
        return `Do ${priceToHumanString(budget.to)}`;
    if(budget.to === null)
        return `Powyżej ${priceToHumanString(budget.from)}`;
    return `Od ${priceToHumanString(budget.from)} do ${priceToHumanString(budget.to)}`;
}