import type { HomeSectionProps } from "../../Home";
import { Link } from "react-router-dom";
import FadeIn from "../../../../components/fadeIn/FadeIn";
import Button from "../../../../components/button/Button";
import LogoIcon from "../../../../assets/icons/logo.svg?react";
import ArrowRightIcon from "../../../../assets/icons/arrow_right.svg?react";
import "./homeSummarySection.css";

export default function HomeSummarySection(props: HomeSectionProps)
{
    return (
        <section className="home-summary-section" {...props}>
            <FadeIn>
                <div className="logo">
                    <LogoIcon />
                </div>
            </FadeIn>
            <FadeIn>
                <h2>Gotowy zrobić wrażenie?</h2>
            </FadeIn>
            <FadeIn>
                <div className="description">
                    Daj nam 3 minuty i kilkanaście złotych &mdash; a my zadbamy, żeby twój prezent był naprawde wyjątkowy.
                </div>
            </FadeIn>
            <FadeIn>
                <Link to="/order">
                    <Button variant="primary">
                        <span>Zamów pomysł teraz</span>
                        <ArrowRightIcon />
                    </Button>
                </Link>
            </FadeIn>
        </section>
    )
}