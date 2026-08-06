"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

/* ============================================================
   ✏️ EASY CUSTOMIZATION — Change these values ONCE to update
   BOTH the home screen header AND the after-scroll navbar.
   ============================================================

   LOGO SIZE OPTIONS (valid values):
     h-14  = 56px   (small)
     h-16  = 64px   (medium-small)
     h-20  = 80px   (medium)
     h-24  = 96px   (medium-large)
     h-28  = 112px  (large)
     h-32  = 128px  (very large)
     h-36  = 144px  (extra large)

   PADDING OPTIONS (space from screen edge):
     px-2  = very close to edge
     px-4  = small gap (default)
     px-8  = medium gap
     px-12 = large gap

   NAVBAR HEIGHT:
     h-20 = 80px (slim)
     h-24 = 96px (normal)
     h-28 = 112px (tall)
*/
// 📍 BEFORE SCROLL (Home Screen Header):
const LOGO_CLASS    = "h-32 lg:h-52 w-auto object-contain object-left"; // Logo size (Fixed invalid h-30 to h-32)
const HERO_HEIGHT   = "h-24 lg:h-28";                                   // Header container height




// 📍 AFTER SCROLL (Sticky White Navbar):
const STICKY_LOGO   = "h-28 lg:h-48 w-auto object-contain object-left"; // Logo size (Fixed invalid h-26 to h-28)
const STICKY_HEIGHT = "h-16 lg:h-20";                                   // Sticky navbar height after scroll

// 📍 ALIGNMENT & ICONS (Unlinked for independent control!):
const LOGO_MARGIN_LEFT   = "-ml-8 lg:ml-10";                    // 🔴 Use -ml-8, -ml-12, or -ml-16 to pull the invisible space off-screen
const MENU_MARGIN_RIGHT  = "mr-7 lg:mr-10";                     // Move Menu Left/Right (e.g. mr-4 is spaced)
const MENU_ICON          = "w-10 h-14 lg:w-10 lg:h-10";         // Menu icon size

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isHomePage ? window.innerHeight * 0.9 : 50;
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navLinks = ["Home", "About Us", "Projects", "Pricing", "Services", "Contact"];

  return (
    <>
      {/* ============================================
          TRANSPARENT FLOATING HEADER (home screen)
          Uses shared constants above
          ============================================ */}
      {isHomePage && !isScrolled && (
        <header className={`absolute top-0 left-0 right-0 z-50 flex items-center justify-between ${HERO_HEIGHT}`}>
          <Link href="/" className={LOGO_MARGIN_LEFT}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/buildo-logo.png"
              alt="Buildo — We Design Your Dream"
              className={LOGO_CLASS}
            />
          </Link>

          <button
            className={`text-brand-black hover:opacity-70 transition-opacity ${MENU_MARGIN_RIGHT}`}
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className={MENU_ICON} />
          </button>
        </header>
      )}

      {/* ============================================
          STICKY WHITE NAVBAR (appears after scrolling)
          Uses same shared constants above
          ============================================ */}
      <AnimatePresence>
        {(isScrolled || !isHomePage) && (
          <motion.nav
            key="sticky-nav"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-xl border-b-0 border-gray-200"
          >
            <div className="w-full">
              <div className={`flex justify-between items-center ${STICKY_HEIGHT}`}>
                <div className={`flex-shrink-0 ${LOGO_MARGIN_LEFT}`}>
                  <Link href="/">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/buildo-logo.png"
                      alt="Buildo — We Design Your Dream"
                      className={STICKY_LOGO}
                    />
                  </Link>
                </div>

                <button
                  className={`text-brand-black hover:opacity-70 transition-opacity ${MENU_MARGIN_RIGHT}`}
                  aria-label="Open menu"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Menu className={MENU_ICON} />
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ============================================
          SIDEBAR MENU OVERLAY
          ============================================ */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[90] bg-black"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 z-[100] w-full max-w-sm bg-[#fc8803]/40 backdrop-blur-md shadow-2xl flex flex-col justify-center items-center"
            >
              <button
                className="absolute top-8 right-8 text-brand-black hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={40} />
              </button>

              <div className="flex flex-col items-start space-y-8 text-2xl font-black uppercase tracking-widest text-brand-black w-full px-12">
                {navLinks.map((item) => {
                  const href =
                    item === "Home" ? "/" :
                    item === "About Us" ? "/about" :
                    `/${item.toLowerCase()}`;
                  return (
                    <Link
                      key={item}
                      href={href}
                      className="hover:text-white transition-colors w-full border-b border-black/10 pb-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
