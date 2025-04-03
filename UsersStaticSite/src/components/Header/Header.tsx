import React, { useEffect, useState } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import AsideMenu from '../AsideMenu/AsideMenu';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';

function Header(): React.ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll()
  const [scrollDirection, setScrollDirection] = useState("up")

  useMotionValueEvent(scrollY, "change", (current) => {
    const previousDirection = scrollY?.getPrevious() ?? 0;
    const directionDiff = current - previousDirection;
    if (current <= 0) {
      setScrollDirection('up');
    } else {
      setScrollDirection(directionDiff > 0 ? "down" : "up")

    }
  })

  const menuItems = [
    { label: 'Atrações Locais', href: '#' },
    { label: 'Agentes Culturais', href: '#' },
    { label: 'Trilhas', href: '#' },
    { label: 'Eventos', href: '#' },
    { label: 'Mapa Interativo', href: '#' },
    { label: 'Sobre', href: '#' }
  ];

  useEffect(() => {
    const handleFocusOutside = (event: FocusEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('#mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('focusin', handleFocusOutside);
    return () => document.removeEventListener('focusin', handleFocusOutside);
  }, [isMenuOpen]);

  return (
    <motion.header
      animate={{ y: scrollDirection === 'down' ? -100 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 flex w-full items-center bg-primary justify-between lg:justify-center h-20 z-30"
      id='home'
    >
      <div className="app-container">
        <div className="flex w-full items-center justify-between lg:justify-center h-20 z-30">
          <div className="flex w-full items-center justify-between gap-8">
            <a href="/" className='flex items-center justify-center'>
              <img
                src="/logos/TurisMendes.svg"
                alt="TurisMendes Logo"
                className='w-full object-cover'
              />
            </a>
            <nav className="hidden lg:flex">
              <ul className="flex gap-6">
                {menuItems.map((item) => (
                  <li key={item.label} className="w-fit">
                    <a
                      href={item.href}
                      className="truncate text-h4 text-white pb-2.5 hover:border-b-2 hover:border-white transition duration-300"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label={`Ir para a página de ${item.label}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className='hidden lg:flex'>
              <ThemeSwitcher />
            </div>
          </div>

          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
          )}

          <button onClick={() => setIsMenuOpen(state => !state)} className="lg:hidden w-[43.82px] z-50 relative" aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <img src="/icons/close-menu-burger-btn.svg" alt="" className="Header__menu-burger" />
            ) : (
              <img src="/icons/menu-burger.svg" alt="" className="Header__menu-burger object-cover" />
            )}
          </button>

          <AsideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} menuItems={menuItems} />
        </div>
      </div>
    </motion.header>

  );
}

export default Header;