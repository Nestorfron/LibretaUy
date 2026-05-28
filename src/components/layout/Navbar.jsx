import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

import Logo from "../common/Logo";

export default function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Preguntas",
      path: "/quiz",
    },
    {
      name: "Señales",
      path: "/signals",
    },
    {
      name: "Documentos",
      path: "/documents",
    },
    // {
    //   name: "Perfil",
    //   path: "/profile",
    // },

  ];

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-2xl border-b border-slate-200/70" />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <div className="h-20 flex items-center justify-between">
            {/* LEFT */}
            <Link
              to="/"
              className="shrink-0"
            >
              <Logo />
            </Link>

            {/* CENTER NAV */}
            <div className="hidden md:flex flex-1 justify-center px-8">
              <nav className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl p-2 shadow-sm">
                {links.map((link) => {
                  const active =
                    location.pathname === link.path;

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        active
                          ? "text-emerald-700"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {active && (
                        <div className="absolute inset-0 rounded-xl bg-emerald-100 border border-emerald-200" />
                      )}

                      <span className="relative z-10">
                        {link.name}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              {/* CTA */}
              <Link
                to="/quiz"
                className="hidden lg:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5"
              >
                Comenzar

                <ChevronRight size={18} />
              </Link>

              {/* MOBILE */}
              <button
                onClick={() =>
                  setMobileOpen(!mobileOpen)
                }
                className="md:hidden w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center"
              >
                {mobileOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        {/* OVERLAY */}
        <div
          onClick={() =>
            setMobileOpen(false)
          }
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        {/* PANEL */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="h-20 px-6 border-b border-slate-200 flex items-center justify-between">
            <Logo />

            <button
              onClick={() =>
                setMobileOpen(false)
              }
              className="w-11 h-11 rounded-2xl border border-slate-200 flex items-center justify-center"
            >
              <X size={22} />
            </button>
          </div>

          {/* LINKS */}
          <div className="p-6 flex flex-col gap-3">
            {links.map((link) => {
              const active =
                location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-5 py-4 rounded-2xl font-semibold transition-all ${
                    active
                      ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                      : "hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  {link.name}

                  <ChevronRight size={18} />
                </Link>
              );
            })}
          </div>

          {/* FOOTER */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200 bg-white">
            <Link
              to="/quiz"
              className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-bold transition-all"
            >
              Empezar Simulador

              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}