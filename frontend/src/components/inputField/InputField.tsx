import type { ReactNode } from "react"
import "./inputField.css";

export interface InputProps
{
    label ?: string,
    inputId?: string
    required ?: boolean,
    errorMessage ?: string,
    className ?: string
    children: ReactNode
}

export default function InputField({
    label = "",
    inputId = "",
    required = false,
    errorMessage = "",
    className = "",
    children
}: InputProps)
{
    return (
        <div className={`input ${errorMessage && "error"} ${className}`}>
            {label !== "" && (
                <label htmlFor={inputId}>
                    {label}
                    {required && (<span className="required">*</span>)}
                </label>
            )}
            {children}
            {errorMessage !== "" && (<div className="error-message">{errorMessage}</div>)}
        </div>
    )
}