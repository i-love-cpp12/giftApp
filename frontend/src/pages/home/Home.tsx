import HomeNavbar from "../../components/navbar/homeNavbar/HomeNavbar";
import HomeTitleSection from "./sections/homeTitleSection/HomeTitleSection";
import HomeHowItWorksSection from "./sections/homeHowItWorksSection/HomeHowItWorksSection";
import HomePricePlansSection from "./sections/homePricePlansSection/HomePricePlansSection";
import HomeUserRatingSection from "./sections/homeUserRatingSection/HomeUserRatingSection";
import HomeSummarySection from "./sections/homeSummarySection/HomeSummarySection";
import HomeFooter from "../../components/footer/homeFooter/HomeFooter";
import "./home.css";

export interface HomeSectionProps
{
    id ?: string
}

export default function Home()
{
    return (
        <main>
            <HomeNavbar />
            <HomeTitleSection />
            <HomeHowItWorksSection id="how-it-works"/>
            <HomePricePlansSection id="price-plans"/>
            <HomeUserRatingSection id="opinions"/>
            <HomeSummarySection />
            <HomeFooter/>
        </main>
    );
}