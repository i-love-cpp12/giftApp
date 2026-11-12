import type { Price } from "../types/price";
import type { Plan } from "../types/pricePlan";

type PlanDetails = {
    cost: Price | null,
    maxWaitHours: number
};
const pricePlanCostMap = new Map<Plan, PlanDetails>();
pricePlanCostMap.set("basic", {
    cost: 14.99,
    maxWaitHours: 24
});
pricePlanCostMap.set("premium", {
    cost: 29.99,
    maxWaitHours: 12
});
pricePlanCostMap.set("custom", {
    cost: null,
    maxWaitHours: null
});

export default function getPricePlanDetails(plan: Plan): PlanDetails
{
    return pricePlanCostMap.get(plan);
}