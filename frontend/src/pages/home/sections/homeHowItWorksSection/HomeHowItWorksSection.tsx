import WritingPenIcon from "../../../../assets/icons/writing_pen.svg?react";
import SparkleIcon from "../../../../assets/icons/sparkles.svg?react";
import PresentIcon from "../../../../assets/icons/logo.svg?react";
import FadeIn from "../../../../components/fadeIn/FadeIn";
import "./homeHowItWorksSection.css";

interface HomeTitleSectionProps
{
    id ?: string
}

export default function HomeHowItWorksSection(props: HomeTitleSectionProps)
{
    return(
        <section className="home-how-it-works-section" {...props}>
            <FadeIn>
                <div className="title">
                    <h2>Jak to działa?</h2>
                    <div>Prosty proces w 3 krokach</div>
                </div>
            </FadeIn>
            <div className="steps-tiles-container">
                <FadeIn>
                    <div className="step-tile">
                        <div className="icon">
                            <WritingPenIcon />
                        </div>
                        <h3>Opisz osobę</h3>
                        <p className="description">
                            Wypełnij formularz &mdash; wiek, zainteresowania, charakterm okazja i budżet, Im więcej szczegółów, tym trafniejszy pomysł.
                        </p>
                        <div className="note">~ 3 minuty</div>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="step-tile">
                        <div className="icon">
                            <SparkleIcon />
                        </div>
                        <h3>Expert dobiera pomysł</h3>
                        <p className="description">
                            Nasz specjalista analizuje podane informacje i przygotowuje spersonalizowaną propozycje z uzasadnieniem.
                        </p>
                        <div className="note">12-24 godziny</div>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="step-tile">
                        <div className="icon present-icon">
                            <PresentIcon />
                        </div>
                        <h3>Zaskocz bliską osobę</h3>
                        <p className="description">
                            Kup prezent samodzielnie lub zleć nam całą realizację &mdash; zakup, personalizację, pakowanie i wysyłkę.
                        </p>
                        <div className="note">Twój wybór</div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}