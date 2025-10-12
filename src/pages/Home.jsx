// src/pages/Home.jsx
import { Link } from "lucide-react";
import { useLanguage } from "../components/LanguageContext";
import translations from "../hooks/translations";
import { NavLink } from "react-router-dom";
import TechStack from "../components/Motia";
import Portfolio from "./Portfolio";
import Slider from "../components/Slider";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <section aria-label="Hero" className="relative overflow-x-hidden">
        {/* Main wrapper */}
        <div className="my-container pt-32 flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left: text */}
          <div className="w-full md:w-1/2 pt-20  0 md:mt-10 text-center md:text-left md:text-base">
            <h2 className="lg:text-4xl md:text-3xl sm: text-5xl font-extrabold mb-2">
              {t.welcome}
            </h2>
            <h1 className="lg:text-5xl md:text-2xl ms:font-black sm: text-4xl font-black mb-3 leading-tight  ">
              {t.description}
            </h1>
            <p className="lg:text-2xl md:text-xl  ms:text-2xl font-normal opacity-80 mb-5">
              {t.tile}
            </p>

            <NavLink
              to="/contact"
              className=" btn btn-outline btn-warning font-extrabold "
            >
              Contact me
            </NavLink>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-end relative">
            {/* Decorative background image (absolute, responsive, clipped & rounded) */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
              <div className=" overflow-hidden rounded-2xl w-[90vw] max-w-[900px] sm:w-[400px]  lg:w-[1000px]  h-[420px] md:h-[420px] md:w-[500px]  lg:h-[640px] ">
                <img
                  src="/flags/bg-logo.png"
                  alt="Decorative background"
                  className="  bg-ilse w-full h-full object-cover object-bottom pb-15 z-100 gfre   "
                />
              </div>
            </div>

            {/* Foreground image - sits above background */}
            <div className="relative z-10 w-[330px] md:w-[300px] lg:w-[420px]  left-2">
              <div className="rounded-xl overflow-hidden p-2 md:p-4 flex justify-center items-center bg-transparent  ">
                <img
                  src="/mi.png"
                  alt="Product"
                  className="w-full h-auto object-contain "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack section */}
        <div className="pt-8 my-container">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Tech Stack</h3>
          <div className="mi-tech">
            <TechStack />
          </div>
        </div>
      </section>
      <div className="min-h-screen relative overflow-hidden">
        {/* Decorative Circle Elements - Right Side */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 md:translate-x-1/6 lg:translate-x-1/4 xl:translate-x-1/4 sm:right-[-60px] md:right-[-10px] lg:right-0">
          <div className="relative max-w-[700px] w-[90vw] md:w-[700px] h-[700px] md:h-[700px]">
            {/* Large Yellow Arc */}
            <div className="absolute top-0 right-0 w-full h-full">
              <div
                className="max-w-full h-full rounded-full border-[80px] border-transparent border-t-[#E2A200] border-r-[#E2A200] transform rotate-45
                        md:border-[80px] sm:border-[50px] sm:opacity-70"
              ></div>
            </div>

            {/* Cyan Arc */}
            <div className="absolute top-20 right-20 w-[560px] h-[560px] ">
              <div
                className="w-full h-full rounded-full border-[70px] border-transparent border-b-[#2CC2C2] border-l-[#2CC2C2] transform rotate-45
                        md:border-[70px] sm:border-[40px] sm:opacity-80 "
              ></div>
            </div>

            {/* Inner Dark Circle */}
            <div className="absolute top-1/2 left-1/5 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#8a8b8b] opacity-90"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
            {/* Left Side - Images */}
            <div className="space-y-8 flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src="../flags/mi-about.jpg"
                  alt="Profile"
                  className="
              w-full max-w-[450px] h-[420px] object-cover rounded-3xl shadow-2xl
              sm:max-w-[420px] sm:h-[380px]
              md:max-w-[450px] md:h-[420px]
              lg:max-w-[450px] lg:h-[420px]
              mx-auto lg:mx-0
            "
                />
              </div>

              <div className="relative ml-auto w-full flex justify-end">
                <img
                  src="../flags/about-bg.jpg"
                  alt="Lifestyle"
                  className="
              w-full max-w-[380px] h-[280px] object-cover rounded-3xl shadow-2xl
              sm:max-w-[340px] sm:h-[240px]
              md:max-w-[380px] md:h-[280px]
              lg:max-w-[380px] lg:h-[280px]
            "
                />
              </div>
            </div>

            {/* Right Side - About Me Content */}
            <div className="space-y-6 pt-6 lg:pt-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 lg:mb-12 leading-tight">
                {t.aboutme}
              </h1>

              <div className="space-y-6 sm:space-y-8 leading-relaxed text-[16px] sm:text-[18px] md:text-[20px] font-light max-w-full lg:max-w-[720px]">
                <p className="leading-7">{t.hello}</p>

                <p className="leading-7">{t.prect}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Slider />
      </div>
    </>
  );
}
