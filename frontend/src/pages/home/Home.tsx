import HomeNavbar from "../../components/navbar/homeNavbar/HomeNavbar";
import HomeTitleSection from "./sections/homeTitleSection/HomeTitleSection";
import HomeHowItWorksSection from "./sections/homeHowItWorksSection/HomeHowItWorksSection";
import HomePricePlansSection from "./sections/homePricePlansSection/HomePricePlansSection";
import HomeUserRatingSection from "./sections/homeUserRatingSection/HomeUserRatingSection";
import "./home.css";
export default function Home()
{
    return (
        <main>
            <HomeNavbar />
            <HomeTitleSection />
            <HomeHowItWorksSection id="how-it-works"/>
            <HomePricePlansSection id="price-plans"/>
            <HomeUserRatingSection id="opinions"/>
        </main>
    );
}