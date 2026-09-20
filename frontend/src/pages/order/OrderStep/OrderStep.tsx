import type { ReactNode } from "react";
import type { ChangeStepFn } from "./steps/stepTypes";
import Button from "../../../components/button/Button";
import FadeIn from "../../../components/fadeIn/FadeIn";
import ArrowForwardIcon from "../../../assets/icons/arrow_forward.svg?react";
import ArrowBackwardIcon from "../../../assets/icons/arrow_backward.svg?react";
import PresentIcon from "../../../assets/icons/logo.svg?react";
import "./orderStep.css";

type OrderStepPhase = "start" | "normal" | "end";

interface OrderStepProps
{
    title: string,
    description: string,
    prevStep: ChangeStepFn,
    nextStep: ChangeStepFn,
    stepPhase: OrderStepPhase,
    className?: string,
    children: ReactNode,
}

export default function OrderStep({
    title,
    description,
    prevStep,
    nextStep,
    stepPhase = "normal",
    className = "",
    children,
}: OrderStepProps)
{
    return (
        <section className={`order-step tile ${className}`}>
                <div className="title">
                    <FadeIn>
                        <h1>{title}</h1>
                    </FadeIn>
                    <FadeIn>
                        <p className="description">{description}</p>
                    </FadeIn>
                </div>

            {children}

            <nav>
                {stepPhase != "start" && (
                    <FadeIn>
                        <div className="prev">
                            <Button variant="secondary" onClick={prevStep}>
                                <ArrowBackwardIcon />
                                <span>Wróć</span>
                            </Button>
                        </div>
                    </FadeIn>
                )}
                
                <FadeIn>
                    <div className="next">
                        <Button variant="primary" onClick={nextStep}>
                            {stepPhase != "end" ?
                                (
                                    <>
                                        <span>Dalej</span>
                                        <ArrowForwardIcon />
                                    </>
                                )
                                :
                                (
                                    <>
                                        <PresentIcon className="present-icon"/>
                                        <span>Wyslij zamówienie</span>
                                    </>
                                )
                            }
                        </Button>
                    </div>
                </FadeIn>
            </nav>
        </section>
    )
}