import InputField from "../InputField";
import DropDownListItem from "./DropDownListItem";
import DropDownArrowIcon from "../../../assets/icons/arrow_drop_down.svg?react";
import { useState } from "react";
import "./dropDownList.css"

interface DropDownListProps
{
    onChange: (value: string) => void,
    options: string[],
    defaultValue ?: string,
    required ?: boolean,
    errorMessage ?: string,
    label ?: string,
    className ?: string
}

export default function DropDownList({
    onChange,
    options,
    defaultValue = "Wybierz...",
    required = false,
    errorMessage = "",
    label = "",
    className = "",
}: DropDownListProps)
{
    const [selectedValue, setSelectedValue] = useState<string | null>(options.includes(defaultValue) ? defaultValue : null);
    const [extended, setExtended] = useState<boolean>(false);

    return (
        <InputField
            label={label}
            required={required}
            className={`${className}`}
            errorMessage={errorMessage}>
            <div className={`drop-down-list ${extended ? "extended":"folded"}`}>
                <button className="header input-custom" onClick={() => setExtended(prev => !prev)} tabIndex={0}>
                    {selectedValue || defaultValue}
                    <DropDownArrowIcon />
                </button>
                <div className="tile options input-custom">
                    {options.map((optionValue, i) => (
                        <DropDownListItem
                            key={i}
                            value={optionValue}
                            selected={optionValue === selectedValue}
                            onClick={() => {
                                setSelectedValue(optionValue);
                                onChange(optionValue);
                                setExtended(false);
                            }}
                        />
                    ))}
                </div>
            </div>
        </InputField>
    )
}