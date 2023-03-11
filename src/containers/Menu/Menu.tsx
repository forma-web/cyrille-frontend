import React, { useState } from 'react';
import MenuContent from './components/MenuContent/MenuContent';
import MenuToggle from './components/MenuToggle/MenuToggle';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <MenuToggle isOpen={isOpen} onClick={toggleMenu} />
      <MenuContent isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Menu;
