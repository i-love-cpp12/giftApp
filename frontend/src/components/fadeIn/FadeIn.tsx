import { useEffect, useRef, useState, type ReactNode } from "react";
import "./fadeIn.css";

interface FadeInProps
{
    children: ReactNode
};

export default function FadeIn({
    children
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

    return (
        <div ref={ref} className={`fade-in ${visible ? "visible": ""}`}>
            {children}
        </div>
    )
}