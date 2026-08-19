import { useEffect, useRef, useState, cloneElement, type ReactElement } from "react";
import "./fadeIn.css";

interface FadeInProps
{
    children: ReactElement<{className?: string}>,
};

export default function FadeIn({
    children,
}: FadeInProps)
{
    const [visible, setVisible] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        });

        if(ref.current)
            observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const childProps = {
        ref,
        className: `${children.props.className ?? ""} fade-in ${
            visible ? "visible" : ""
        }`
    };

    return cloneElement(children, childProps as any);
}