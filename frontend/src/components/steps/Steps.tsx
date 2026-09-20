import { Fragment } from "react/jsx-runtime";
import TickIcon from "../../assets/icons/check.svg?react";

import "./steps.css";


interface StepsProps {
    step: number,
    steps: string[],
    className?: string
}

export default function Steps({
    step,
    steps,
    className = ""
}: StepsProps)
{
    return (
        <div className={`steps ${className}`}>
            <div className="step-tiles">
                {
                    steps.map((_, i) => {
                        let phase: "current" | "done" | "not-active"  = "not-active";
                        if(i + 1 == step) phase = "current";
                        else if(i + 1 < step) phase = "done";

                        return (
                            <Fragment key={i}>
                                <StepTile number={i + 1} phase={phase}/>
                                {i < steps.length - 1 &&
                                    (<div className={`line ${i + 2 <= step ? "active" : ""}`}></div>)
                                }
                            </Fragment>
                        );
                    })
                }
            </div>
            <div className="step-names">
                {
                    steps.map((name, i) =>
                        (<StepName name={name} active={i + 1 <= step} key={i}/>))
                }
            </div>
        </div>
    )
}

interface StepTileProps {
    number: number,
    phase: "done" | "current" | "not-active",
}
function StepTile({
    number,
    phase = "not-active"
}: StepTileProps)
{
    return (
        <div className={`step-tile ${phase != "not-active" ? "active" : ""}`}>
            {phase == "done" ? (<TickIcon />) : number}
        </div>
    )
}


interface StepNameProps {
    name: string,
    active: boolean,
}
function StepName({
    name,
    active,
}: StepNameProps)
{
    return (
        <div className={`step-name ${active ? "active" : ""}`}>{name}</div>
    )
}