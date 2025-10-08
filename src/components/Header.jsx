import { useState, useEffect } from "react";
import { Menu, X, Home, Briefcase, User, Mail } from "lucide-react";
import LanguageDropdown from "./LanguageDropdown";
import KYLogo8 from "./Logo";
import { NavLink } from "react-router-dom";
import translations from "../hooks/translations";
import { useLanguage } from "./LanguageContext";
import Themes from "./Themes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language } = useLanguage();
  const t = translations[language];

  const navItems = [
    { id: "home", key: "Home", icon: Home, to: "/" },
    { id: "about", key: "About", icon: User, to: "/about" },
    { id: "portfolio", key: "Portfolio", icon: Briefcase, to: "/portfolio" },
    { id: "contact", key: "Contact", icon: Mail, to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 mt-5 mb-5  ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <KYLogo8 width={400} height={100} />
            </div>

            <div className=" my-container hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    to={item.to}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                      activeSection === item.id
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{t[item.id]}</span>
                    </div>

                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
                    )}

                    <div className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </NavLink>
                );
              })}
              <Themes />
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg bg-slate-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-slate-700/50 transition-colors duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 text-cyan-400 transition-all duration-300 ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 text-cyan-400 transition-all duration-300 ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>

            <LanguageDropdown />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-slate-900/95 backdrop-blur-md">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20"
                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen
                      ? "slideIn 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
            <LanguageDropdown />
          </div>
        </div>

        {/* Animations */}
        <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
      `}</style>
      </nav>
    </>
  );
}
