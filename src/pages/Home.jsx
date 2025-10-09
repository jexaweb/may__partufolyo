// src/pages/Home.jsx
import { Link } from "lucide-react";
import { useLanguage } from "../components/LanguageContext";
import translations from "../hooks/translations";
import { NavLink } from "react-router-dom";
import TechStack from "../components/Motia";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="">
      <div className=" my-container  pt-30 flex  gap-30 ">
        <div className="mt-50 mb-1 w-150 h-100">
          <h2 className="text-3xl font-extrabold  mb-1 ">{t.welcome}</h2>
          <h1 className="text-5xl font-black mb-2">{t.description}</h1>
          <p className="text-2xl font-normal opacity-80  mb-3">{t.tile}</p>
          <NavLink
            to={"/contact"}
            className={"btn btn-outline btn-warning font-extrabold"}
          >
            Contact me
          </NavLink>
        </div>
        <div className="bg">
          <div>
            <img
              src="../public/flags/mi.png"
              alt=""
              max-width={10}
              height={10}
              className=" bgimg  bottom-0 w-130 h-152 "
            />
            <img src="../public/flags/gleb-bg.png" alt="" className=" bg-img" />
          </div>
        </div>
      </div>
      <div className="pt-30  my-container">
        <h3>Tech Stack</h3>
        <TechStack />
      </div>
    </div>
  );
}
