import React, { useEffect } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

interface AsideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: Array<{
    label: string;
    href: string;
  }>;
}

function AsideMenu({ isOpen, onClose, menuItems }: AsideMenuProps): React.ReactNode {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  return (
    <aside
      id="mobile-menu"
      className={`fixed top-0 left-0 lg:hidden w-full h-[441px] px-4 md:px-8 pt-2 bg-primary transform transition-transform duration-300 ease-in-out z-40 
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <img
        src="/logos/TurisMendes.svg"
        alt="TurisMendes Logo"
        className="mb-5"
      />

      <div className="bg-white w-full h-[1px]" />

      <nav className="my-5">
        <ul className="flex flex-col gap-5">
          {menuItems.map((item) => (
            <li key={item.label} className="w-fit">
              <a
                href={item.href}
                className="text-h4 text-white leading-5"
                onClick={onClose}
                tabIndex={isOpen ? 0 : -1}
                aria-label={`Ir para a página de ${item.label}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bg-white w-full h-[1px]" />

      <ThemeSwitcher />
    </aside>
  );
}


export default AsideMenu;
