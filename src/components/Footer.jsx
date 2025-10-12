import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import translations from "../hooks/translations";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const navItems = [
    { id: "home", to: "/" },
    { id: "about", to: "/about" },
    { id: "portfolio", to: "/portfolio" },
    { id: "contact", to: "/contact" },
  ];

  return (
    <footer className="bg-slate-900/90 backdrop-blur-md text-gray-300 py-8  border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        {/* 🔹 Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              {t[item.id]}
            </NavLink>
          ))}
        </nav>

        {/* 🔹 Social Icons */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <Twitter size={22} />
          </a>
        </div>

        {/* 🔹 Footer text */}
        <p className="text-sm text-gray-500 mt-3 text-center">
          © {new Date().getFullYear()} — {t.aboutme} | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
