import SparkleIcon from "../../../../assets/icons/sparkles.svg?react";
import ArrowRightIcon from "../../../../assets/icons/arrow_right.svg?react";
import PresentIcon from "../../../../assets/icons/logo.svg?react";
import Button from "../../../../components/button/Button";
import UserRating from "../../../../components/userRating/UserRating";
import FadeIn from "../../../../components/fadeIn/FadeIn";
import "./homeTitleSection.css";

export default function HomeTitleSection()
{
    return(
        <section className="home-title-section">
            <div className="left">
                <FadeIn>
                    <div className="title-section-label">
                        <SparkleIcon />
                        <span>Spresonalizowane pomysły na prezenty</span>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="title">
                        <h1>Prezent szyty</h1>
                        <h1 style={{color: "var(--accent-color)"}}>na miare</h1>
                        <h1>każdej osoby</h1>
                    </div>
                </FadeIn>

                <FadeIn>
                    <p>
                        Opisz osobę, która checsz obdarować &mdash; nasz ekspert przygotuje spersonalizowany pomysł dopasowany do jej charakteru, zainteresowań i okazji.
                    </p>
                </FadeIn>

                <FadeIn>
                    <div className="order-container">
                        <Button variant="primary">
                            <span>Zamów pomysł na prezent</span>
                            <ArrowRightIcon />
                        </Button>
                        <span>od 14,99 zł &middot; odpowiedź w 12-24h</span>
                    </div>
                </FadeIn>
            </div>
            <div className="right">
                <FadeIn>
                    <div className="example-rating">
                        <UserRating
                            starsRating={4.5}
                            content="Jest super, polecam serdecznie."
                            name="Zofia"
                            place="Warszawa"
                        />
                    </div>
                </FadeIn>
                
                <FadeIn>
                    <div>
                        <div className="satisfied-user-count">
                            <div className="icon">
                                <PresentIcon />
                            </div>
                            <div className="count">277</div>
                            <p>zadowolonych</p>
                            <p>klientów</p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="example-rating">
                        <UserRating
                            starsRating={5}
                            content="Nie wpadł bym na lepszy pomysł na prezent dla mojego wnuka na jego 18 urodziny!!!"
                            name="Stanisław"
                            place="Rzeszów"
                        />
                    </div>
                </FadeIn>
            </div>

        </section>
    )
}