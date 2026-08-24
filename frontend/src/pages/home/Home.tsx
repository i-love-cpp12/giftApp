import HomeNavbar from "../../components/navbar/homeNavbar/HomeNavbar";
import HomeTitleSection from "./sections/homeTitleSection/HomeTitleSection";
import HomeHowItWorksSection from "./sections/homeHowItWorksSection/HomeHowItWorksSection";
import "./home.css";
export default function Home()
{
    return (
        <main>
            <HomeNavbar />
            <HomeTitleSection />
            <HomeHowItWorksSection id="how-it-works"/>
            <HomeTitleSection id="price-plans"/>
            <HomeTitleSection id="opinions"/>
        </main>
    );
}