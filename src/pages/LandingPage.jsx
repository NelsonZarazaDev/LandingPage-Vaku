import NavbarLanding from "../components/navbarLanding/NavbarLanding";
import StartLanding from "../components/startLanding/StartLanding";
import BarLogosLanding from "../components/barLogosLanding/BarLogosLanding";
import ScopeLanding from "../components/scopeLanding/ScopeLanding";
import StatisticsText from "../components/statisticsTextLanding/StatisticsTextLanding";
import Functionalities from "../components/functionalitiesLanding/FunctionalitiesLanding";
import FrequentlyAskedQuestionsLanding from "../components/frequentlyAskedQuestionsLanding/FrequentlyAskedQuestionsLanding";
import Footer from "../components/footer/Footer";

export default function LandingPage() {
  return (
    <>
      <div className="h-auto">
        <NavbarLanding />
        <div className="flex flex-col justify-center">
          <StartLanding />
        </div>
      </div>

      <div className="space-y-10 flex flex-col justify-center">
        <BarLogosLanding />
        <div className="relative h-auto md:px-25">
          <ScopeLanding />
          <div
            className=" hidden lg:block
        pointer-events-none
        absolute 
        bottom-0 
        left-0 
        w-80 h-80 
        bg-blue-500 
        opacity-20 
        rounded-full 
        blur-3xl 
        -translate-x-20 
        -translate-y-5
        z-[-1]"
          ></div>
        </div>
      </div>

      <div className="h-auto px-4 space-y-9 lg:px-25 flex flex-col overflow-visible">
        <div className="relative flex-grow-[0.4]">
          <StatisticsText />
          <div
            className="
        hidden lg:block
        pointer-events-none
        absolute 
        bottom-0 
        right-0 
        w-30 h-80 
        bg-green-500 
        opacity-20 
        rounded-full 
        blur-3xl 
        translate-x-20
        -translate-y-5
        z-[-1]
      "
          ></div>
        </div>
        <div className="flex-grow-[0.6]">
          <Functionalities />
        </div>
      </div>

      <div className="h-dvh flex flex-col mt-8 md:mt-0">
        <div className="px-3 md:px-25 space-y-10">
          <FrequentlyAskedQuestionsLanding />
        </div>
        <Footer />
      </div>
    </>
  );
}
