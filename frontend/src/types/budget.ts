export type Budget = {
    from: number,
    to: number
};

export function isValidBudget(budget: {from: number, to: number}): budget is Budget
{
    return !isNaN(budget.from) && !isNaN(budget.to) && budget.from <= budget.to && (Number.isFinite(budget.from) || Number.isFinite(budget.to));
}
export function budgetToHumanString(budget: Budget): string
{
    if(!Number.isFinite(budget.from))
        return `Do ${budget.to} zł`;
    if(!Number.isFinite(budget.to))
        return `Powyżej ${budget.from} zł`;
    return `Od ${budget.from} do ${budget.to}`;
}