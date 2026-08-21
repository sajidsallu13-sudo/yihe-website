import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Services from "../components/Services";
import TradeProcess from "../components/TradeProcess";
import ProductCategories from "../components/ProductCategories";
import About from "../components/About";
import GlobalPresence from "../components/GlobalPresence";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import FounderMessage from "../components/FounderMessage";

export default function Home(){

return(

<>

<Hero/>
<FounderMessage />
<WhyChoose/>
<Services/>
<TradeProcess/>
<ProductCategories/>
<Gallery />
<About/>
<GlobalPresence/>
<CTASection/>
<Footer/>
</>

)

}