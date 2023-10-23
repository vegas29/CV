import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { SocialMenu } from "../components/SocialMenu";
import { Works } from "../components/Works";

export const Mainpage = () => {
  return (
    <div className="bg-[#120E26] h-full">
      <div className="container mx-auto">
        <Navbar/>
        <Hero/>
        <SocialMenu/>
        <AboutMe/>
        <Works/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}
