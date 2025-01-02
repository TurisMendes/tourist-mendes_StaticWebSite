import React, { useEffect, useState } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import AsideMenu from '../AsideMenu/AsideMenu';

function Header(): React.ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="flex w-full gap-4 items-center justify-between bg-primary h-20 px-4 md:px-8 xl:px-[150px]" >
      <img
        src="./src/assets/logos/TurisMendes.svg"
        alt="TurisMendes Logo"
        className='w-[105px] h-[60px] mb-5'
      />
      <nav className="p-6 hidden lg:flex">
        <ul className="flex gap-6">
          {menuItems.map((item) => (
            <li key={item.label} className="w-fit">
              <a
                href={item.href}
                className="text-h4 text-white pb-2.5 hover:border-b-2 hover:border-white transition duration-300"
                onClick={() => setIsMenuOpen(false)}
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

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <button onClick={() => setIsMenuOpen(state => !state)} className="lg:hidden z-50 relative" aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMenuOpen ? (
          <img src="./src/assets/icons/Close.svg" alt="Fechar menu" className="w-6 h-6" />
        ) : (
          <img
            src="./src/assets/icons/Menu-burguer.svg"
            alt="Abrir menu"
            className="w-6 h-6"
          />
        )}
      </button>

      <AsideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} menuItems={menuItems}  />
    </header>
  );
}

export default Header;
