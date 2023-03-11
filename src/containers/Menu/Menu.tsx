import React from 'react';
import { createPortal } from 'react-dom';
import MenuContent from './components/MenuContent/MenuContent';
import MenuToggle from './components/MenuToggle/MenuToggle';

const Menu = () => {
  console.log(document.getElementById('menu'));

  return (
    <>
      <MenuToggle />
      {createPortal(
        <MenuContent />,
        document.getElementById('menu') as HTMLElement
      )}
    </>
  );
};

export default Menu;
