import { Fragment } from "react";
import SocialLogin from "../SocialLogin/SocialLogin"
import Navbar from "../Navbar/Navbar"
import Main from "./Main/Main"
import Services from "./Services/Services"
import Gallery from "./Gallery/Gallery"
import Featured_Products from './Featured_Products/Featured_Products';
import PrintingShirt from './PrintingShirt/PrintingShirt';
import Features from './Features/Features';
import Designs from './Designs/Designs';
import Join from './Join/Join';
import Pricing from './Pricing/Pricing';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer';
export default function Home() {
    return (
        <Fragment>
            <SocialLogin />
            <Navbar />
            <Main />
            <Services />
            <Gallery />
            <Featured_Products />
            <PrintingShirt />
            <Features />
            <Designs />
            <Join />
            <Pricing />
            <Testimonials />
            <Footer />
        </Fragment>
    )
}