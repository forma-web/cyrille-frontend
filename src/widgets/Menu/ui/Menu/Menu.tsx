import { useState } from 'react';
import { MenuToggle } from '../MenuToggle/MenuToggle';
import { MenuContent } from '../MenuContent/MenuContent';

export const Menu = () => {
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
