import { useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const langs = [
    { code: "uz", label: "Uz", flag: "/flags/uzb.png" },
    { code: "ru", label: "Ru", flag: "/flags/rus.png" },
    { code: "kr", label: "Kr", flag: "/flags/korea.png" },
    { code: "en", label: "Er", flag: "/flags/english.png" },
  ];

  const activeLang = langs.find((l) => l.code === language);

  return (
    <div className="relative">
      {/* Tanlangan til */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md"
      >
        <img src={activeLang.flag} alt={activeLang.label} className="w-5 h-5" />
        {activeLang.label}
      </button>

      {/* Dropdown menyu */}
      {open && (
        <div className="absolute mt-2 right-0 bg-gray-900 border border-gray-700 rounded-md overflow-hidden shadow-lg z-50">
          {langs.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-800"
            >
              <img src={lang.flag} alt={lang.label} className="w-5 h-5" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
