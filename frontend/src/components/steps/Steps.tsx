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
                    steps.map((_, i) =>
                        (
                            <>
                                <StepTile number={i + 1} active={i + 1 <= step} key={i * 2}/>
                                {
                                    i < steps.length - 1 ?
                                        (
                                            <div
                                                className={`line ${i + 2 <= step ? "active" : ""}`}
                                                key={i * 2 + 1}
                                            ></div>
                                        )
                                        :
                                        null
                                }
                            </>
                        )
                    )
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
    active: boolean
}
function StepTile({
    number,
    active
}: StepTileProps)
{
    return (
        <div className={`step-tile ${active ? "active" : ""}`}>{number}</div>
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