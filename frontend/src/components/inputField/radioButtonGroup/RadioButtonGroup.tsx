import { Children, cloneElement, isValidElement, type ComponentProps, type ReactElement, type ReactNode } from "react";
import InputField from "../InputField";
import RadioButtonOption from "./RadioButtonOption";

interface RadioButtonGroupProps
{
    name: string,
    value: string,
    onChange: (value: string) => void,
    required ?: boolean,
    errorMessage ?: string,
    label ?: string,
    className ?: string
    children: ReactNode
}

export default function RadioButtonGroup({
    name,
    value,
    onChange,
    required = false,
    errorMessage = "",
    label = "",
    className = "",
    children
}: RadioButtonGroupProps)
{
    const options = Children.map(children, (child) => {
        if(!isValidElement(child) || child.type !== RadioButtonOption)
            return child;

        const option = child as ReactElement<ComponentProps<typeof RadioButtonOption>>;

        return cloneElement(option, {
            name,
            checked: value === option.props.value,
            className: [
                option.props.className,
                value === option.props.value && "checked",
            ].filter(Boolean).join(" "),
            onChange: () => {onChange(String(option.props.value))}
        });
    });

    return (
        <InputField
            label={label}
            required={required}
            className={`radio-button-group ${className}`}
            errorMessage={errorMessage}>
            {options}
        </InputField>
    )
}