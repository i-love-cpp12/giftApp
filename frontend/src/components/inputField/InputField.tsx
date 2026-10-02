import type { ReactNode } from "react"
import "./inputField.css";

export interface InputProps
{
    label ?: string | null,
    required: boolean,
    errorMessage ?: string,
    className ?: string
    children: ReactNode
}

export default function InputField({
    label = null,
    required = false,
    errorMessage = "",
    className = "",
    children
}: InputProps)
{
    return (
        <div className={`input ${errorMessage && "error"} ${className}`}>
            {label !== null && (
                <label>
                    {label}
                    {required && (<span className="required">*</span>)}
                </label>
            )}
            {children}
            {errorMessage !== "" && (<div className="error-message">{errorMessage}</div>)}
        </div>
    )
}