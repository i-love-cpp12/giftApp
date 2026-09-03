import UserRating from "../../../../components/userRating/UserRating";
import FadeIn from "../../../../components/fadeIn/FadeIn";
import type { HomeSectionProps } from "../../Home";
import "./homeUserRatingSection.css";



export default function HomeUserRatingSection(props: HomeSectionProps)
{
    return(
        <section className="home-user-rating-section" {...props}>
            <FadeIn>
                <h2>Co mówią klijenci?</h2>
            </FadeIn>
            <div className="ratings">
                <FadeIn>
                    <div>
                        <UserRating
                            starsRating={5}
                            content="Bardzo polecam! Wszystko działa dokładnie tak, jak powinno, a korzystanie z serwisu jest naprawdę proste i wygodne."
                            name="Kamil"
                            place="Cieszyn"
                        />
                    </div>
                </FadeIn>

                <FadeIn>
                    <div>
                        <UserRating
                            starsRating={4}
                            content="Jestem bardzo zadowolona z usługi. Cały proces przebiegł sprawnie, a kontakt był szybki i bezproblemowy. Na pewno jeszcze skorzystam."
                            name="Julia"
                            place="Katowice"
                        />
                    </div>
                </FadeIn>

                <FadeIn>
                    <div>
                        <UserRating
                            starsRating={4}
                            content="Bardzo dobre doświadczenie. Strona jest przejrzysta, wszystko można szybko znaleźć, a realizacja przebiegła bez żadnych problemów."
                            name="Mateusz"
                            place="Bielsko-Biała"
                        />
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}