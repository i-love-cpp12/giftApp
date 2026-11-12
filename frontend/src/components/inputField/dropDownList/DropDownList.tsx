import InputField from "../InputField";
import DropDownListItem from "./DropDownListItem";
import DropDownArrowIcon from "../../../assets/icons/arrow_drop_down.svg?react";
import { useState } from "react";
import "./dropDownList.css"

export type Option = {
    label: string,
    value: string
};

interface DropDownListProps
{
    onChange: (value: string) => void,
    options: Option[],
    defaultOption ?: string,
    required ?: boolean,
    errorMessage ?: string,
    label ?: string,
    inputId ?: string
    className ?: string
}

export default function DropDownList({
    onChange,
    options,
    defaultOption = "Wybierz...",
    required = false,
    errorMessage = "",
    label = "",
    inputId = "",
    className = "",
}: DropDownListProps)
{
    const defaultOptionIndex = options.findIndex(option => option.label === defaultOption);
    const [selectedOption, setSelectedOption] = useState<Option | null>(
        defaultOptionIndex !== -1 ? options[defaultOptionIndex] : null
    );
    const [extended, setExtended] = useState<boolean>(false);

    return (
        <InputField
            label={label}
            inputId={inputId}
            required={required}
            className={`${className}`}
            errorMessage={errorMessage}>
            <div className={`drop-down-list ${extended ? "extended":"folded"}`}>
                <button id={inputId} type="button" className="header input-custom" onClick={() => setExtended(prev => !prev)} tabIndex={0}>
                    {selectedOption?.label || defaultOption}
                    <DropDownArrowIcon />
                </button>
                <div className="tile options input-custom">
                    {options.map((option, i) => (
                        <DropDownListItem
                            key={i}
                            label={option.label}
                            selected={option.label === selectedOption?.label}
                            onClick={() => {
                                setSelectedOption(option);
                                onChange(option.value);
                                setExtended(false);
                            }}
                        />
                    ))}
                </div>
            </div>
        </InputField>
    )
}