import ProfilePage from "./components/ProfilePage"
import Skills from "./components/Skills"
import About from "./components/About"
import Stripe from "./components/Stripe"
import EducationPage from "./components/EducationPage"
import FunFact from "./components/FunFact"
import Projects from "./components/Projects"
import SkillsPage from "./components/SkillsPage"
import ContactPage from "./components/ContactPage"
import Footer from "./components/navbar/footer"
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center h-screen  justify-center bg-zinc-50 font-sans dark:bg-black ">
        <ProfilePage />
        <Skills />
        <About />
        <Stripe/>
        <EducationPage />
        <FunFact />
        <Projects />
        <Stripe/>
        <SkillsPage />
        <ContactPage />
        <Footer />
    </div >
  );
}

