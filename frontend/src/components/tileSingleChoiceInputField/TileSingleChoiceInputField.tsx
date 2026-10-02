import type { ComponentProps, ReactNode } from "react"
import InputField from "../inputField/InputField"
import "./tileSingleChoiceInputField.css"
import type { InputProps } from "../inputField/InputField"

interface RadioButton extends ComponentProps<"input">
{
    selected ?: boolean,
}
interface TileSingleChoiceInputProps extends InputProps
{
    options: RadioButton[],
    children : ReactNode
}
export default function TileSingleChoiceInputField(props: TileSingleChoiceInputProps)
{
    const {options, children} = props;
    
    return (
        <div className="TileSingleChoiceInputField">
        {
            options.map(option => (
                <InputField {...props} errorMessage="" className="option">
                    <input {...option} type="radio" checked={option.selected}/>
                    {children}
                </InputField>
            ))
        }
        </div>
    )
}