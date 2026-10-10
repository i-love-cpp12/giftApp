import { useSearchParams } from "react-router-dom"
import type { Plan } from "../types/pricePlan";
import { useState } from "react";

export default function usePricePlan(): [Plan, typeof setPlan]
{
    const [URLSearchParams] = useSearchParams();
    const planParam = URLSearchParams.get("plan")?.toLowerCase() ?? "";

    const possiblePlans = ["basic", "premium", "custom"];
    const [plan, setPlan] = useState<Plan>((possiblePlans.includes(planParam) ? planParam : "basic") as Plan);

    window.history.replaceState(null, "", `?plan=${plan}`);

    return [plan, setPlan];
}