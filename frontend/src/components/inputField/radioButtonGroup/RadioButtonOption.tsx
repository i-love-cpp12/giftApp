import type { ComponentProps, ReactNode } from "react";

interface RadioButtonOptionProps extends Omit<ComponentProps<"input">, "type">
{
    children: ReactNode
}

export default function RadioButtonOption({
    className = "",
    children,
    ...props
}: RadioButtonOptionProps)
{
    return (
        <label className={[
                "tile-radio-option",
                className,
            ].filter(Boolean).join(" ")}>
            <input {...props} type="radio"/>
            {children}
        </label>
    )
}