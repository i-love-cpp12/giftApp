import type { Plan } from "../types/pricePlan";

const pricePlanCostMap = new Map<Plan, number | null>();
pricePlanCostMap.set("basic", 14.99);
pricePlanCostMap.set("premium", 29.99);
pricePlanCostMap.set("custom", null);

export default function getPricePlanCost(plan: Plan): number | null
{
    return pricePlanCostMap.get(plan);
}