import type { ComponentProps } from "react";
import "./button.css";

interface ButtonProps extends ComponentProps<"button">
{
    variant?: "primary" | "secondary"
};

export default function Button(
    {
        variant = "primary",
        className = "",
        ...props
    }: ButtonProps
)
{
    return(
        <button {...props} className={`button button--${variant} ${className}`} />
    );
}