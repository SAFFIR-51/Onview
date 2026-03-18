import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest <= 10) {
      // Always show at top
      setHidden(false);
    } else if (latest > previous && latest > 150) {
      setHidden(true);
    } else if (latest < previous) {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'About', href: '/' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'CLASS', href: '/class' },
    { name: 'Contact', href: '/contact' },
  ];

  // Don't hide header when mobile menu is open or at the top of the page
  const shouldHide = hidden && !menuOpen;
  // Use light (white text) style only on home page when not scrolled
  const isLight = isHome && !scrolled && !menuOpen;

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={shouldHide ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLight ? 'bg-transparent py-6' : 'bg-white/90 backdrop-blur-md shadow-sm py-4'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={isLight ? '/images/logo-light.png' : '/images/logo-dark.png'}
              alt="ONVIEW"
              className="h-7 md:h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium hover:text-[#176B36] transition-colors ${
                  isLight ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://epure7.com/" target="_blank" rel="noopener noreferrer" className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
              isLight
                ? 'bg-white text-[#176B36] hover:bg-gray-100'
                : 'bg-[#176B36] text-white hover:bg-[#125229]'
            }`}>
              EPURE
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen
              ? <X className="w-6 h-6 text-gray-900" />
              : <Menu className={`w-6 h-6 ${isLight ? 'text-white' : 'text-gray-900'}`} />
            }
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay - outside header so it doesn't get hidden */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.href}
                  className="text-2xl font-bold text-gray-900 hover:text-[#176B36] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
            >
              <a href="https://epure7.com/" target="_blank" rel="noopener noreferrer" className="mt-4 px-8 py-3 bg-[#176B36] text-white rounded-full font-bold hover:bg-[#125229] transition-colors inline-block">
                EPURE
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
