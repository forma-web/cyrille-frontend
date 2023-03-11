import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import MenuContent from './components/MenuContent/MenuContent';
import MenuToggle from './components/MenuToggle/MenuToggle';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevValue) => !prevValue);
  };

//   useEffect(() => {
//     const appRoot = document.getElementById('app') as HTMLElement;
//     if (!appRoot) return;

//     appRoot.style.overflowY = isOpen ? 'hidden' : 'auto';
//   }, [isOpen]);

  return (
    <>
      <MenuToggle onClick={toggleMenu} isOpen={isOpen} />
      {createPortal(
        <MenuContent isOpen={isOpen} />,
        document.getElementById('menu') as HTMLElement
      )}
    </>
  );
};

export default Menu;
