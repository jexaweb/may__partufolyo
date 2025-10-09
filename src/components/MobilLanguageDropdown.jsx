import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

export default function MobilLanguageDropdown() {
  const { language, setLanguage } = useLanguage();

  const langs = [
    { code: "uz", label: "Uz", flag: "/flags/uzb.png" },
    { code: "ru", label: "Ru", flag: "/flags/rus.png" },
    { code: "kr", label: "Kr", flag: "/flags/korea.png" },
    { code: "en", label: "En", flag: "/flags/english.png" },
  ];

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, [setLanguage]);

  const handleSelect = (code) => {
    setLanguage(code);
    localStorage.setItem("language", code);
  };

  return (
    <div className="flex items-center gap-3">
      {langs.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleSelect(lang.code)}
          className={`flex items-center gap-2 px-2 py-1 rounded-md transition-all duration-200 ${
            lang.code === language
              ? "bg-cyan-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          <img src={lang.flag} alt={lang.label} className="w-5 h-5" />
          {lang.label}
        </button>
      ))}
    </div>
  );
}
