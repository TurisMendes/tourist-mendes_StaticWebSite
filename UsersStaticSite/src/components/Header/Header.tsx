import React, { useEffect, useState } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

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
                className="text-white font-montserrat text-base font-bold leading-5 pb-2.5 hover:border-b-2 hover:border-white transition duration-300"
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

      <aside
        id='mobile-menu'
        className={`fixed top-0 right-0 lg:hidden h-1/2 w-full px-4 md:px-8 pt-2 bg-primary transform transition-transform duration-300 ease-in-out z-40 
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isMenuOpen}
      >
        <img
        src="./src/assets/logos/TurisMendes.svg"
        alt="TurisMendes Logo"
        className='w-[105px] h-[60px] mb-5'
      />
        <div className='bg-white w-full h-[1px]' />
        <nav className="my-5">
          <ul className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <li key={item.label} className="w-fit">
                <a
                  href={item.href}
                  className="text-white font-inter text-base font-bold leading-5"
                  onClick={() => setIsMenuOpen(false)}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='bg-white w-full h-[1px]' />
        <ThemeSwitcher />
      </aside>
    </header>
  );
}

export default Header;
