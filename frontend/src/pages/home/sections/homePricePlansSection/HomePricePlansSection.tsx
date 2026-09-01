import FadeIn from "../../../../components/fadeIn/FadeIn";
import PricePlanItem from "./PricePlanItem";
import Button from "../../../../components/button/Button";
import "./homePricePlansSection.css";

interface HomePricePlansSectionProps
{
    id ?: string
}

export default function HomePricePlansSection(props: HomePricePlansSectionProps)
{
    return(
        <section className="home-price-plans-section" {...props}>
            <FadeIn>
                <div className="title">
                    <h2>Cennik</h2>
                    <div>Wybierz pakiet dopasowany do swoich potrzeb</div>
                </div>
            </FadeIn>
            <div className="price-plans-container">
                <FadeIn>
                    <div className="plan-tile tile">
                        <div className="plan-title">
                            <h3>Basic</h3>
                            <div>Szybki i trafny pomysł</div>
                        </div>
                        <div className="price">
                            <h4 className="value">14.99</h4>
                            <span className="currency">zł</span>
                        </div>
                        <div className="plan-items">
                            <PricePlanItem planItemContent="1 spersonalizowana propozycja"/>
                            <PricePlanItem planItemContent="Opis i uzasadnienie wyboru"/>
                            <PricePlanItem planItemContent="Odpowiedź w 24 godziny"/>
                        </div>
                        <Button variant="primary">Zamów Basic</Button>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="plan-tile tile premium">
                        <div className="plan-title">
                            <h3>Premium</h3>
                            <div>Pełna analiza z detalami</div>
                        </div>
                        <div className="price">
                            <h4 className="value">29.99</h4>
                            <span className="currency">zł</span>
                        </div>
                        <div className="plan-items">
                            <PricePlanItem
                                planItemContent="2-3 spersonalizowane propozycje"
                                flipedColors={true}
                            />
                            <PricePlanItem
                                planItemContent="Linki do zakupu produktów"
                                flipedColors={true}
                            />
                            <PricePlanItem
                                planItemContent="Wskazówki personalizacji"
                                flipedColors={true}
                            />
                            <PricePlanItem
                                planItemContent="Opcja pełnej obsługi"
                                flipedColors={true}
                            />
                            <PricePlanItem
                                planItemContent="Odpowiedź w 12 godzin"
                                flipedColors={true}
                            />
                        </div>
                        <Button variant="secondary">Zamów Premium</Button>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="plan-tile tile">
                        <div className="plan-title">
                            <h3>Pełna obsługa</h3>
                            <div>Prezent od A do Z</div>
                        </div>
                        <div className="price individual-price">
                            <h4 className="value">Wycena</h4>
                            <span className="currency">indywidualna</span>
                        </div>
                        <div className="plan-items">
                            <PricePlanItem planItemContent="Wybór i zakup prezentu"/>
                            <PricePlanItem planItemContent="Personalizacja (grawer, haft, itp.)"/>
                            <PricePlanItem planItemContent="Eleganckie pakowanie"/>
                            <PricePlanItem planItemContent="Wysyłka bezpośrednio do odbiorcy"/>
                            <PricePlanItem planItemContent="Ręcznie pisana kartka"/>
                        </div>
                        <Button variant="primary">Zapytaj o wycenę</Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}