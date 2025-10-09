// src/pages/Home.jsx
import { useLanguage } from "../components/LanguageContext";
import translations from "../hooks/translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className=" my-container text-center mt-50 ">
      <h1 className="text-3xl font-bold">{t.welcome}</h1>

      <p></p>
    </div>
  );
}
