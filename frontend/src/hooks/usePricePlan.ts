import { useSearchParams } from "react-router-dom"
import type { Plan } from "../types/pricePlan";

export default function usePricePlan(): Plan
{
    const [URLSearchParams] = useSearchParams();
    const planParam = URLSearchParams.get("plan")?.toLowerCase() ?? "";

    const possiblePlans = ["basic", "premium", "custom"];
    const plan: Plan = (possiblePlans.includes(planParam) ? planParam : "basic") as Plan;

    window.history.replaceState(null, "", `?plan=${plan}`);

    return plan;
}