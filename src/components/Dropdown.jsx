import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const MyDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
        </DropdownToggle>
      <DropdownMenu>
            <DropdownItem href="/">Home</DropdownItem>
            <DropdownItem href="/order/pizza">Pizza</DropdownItem>
            <DropdownItem href="/order/calzone">Calzone</DropdownItem>
            <DropdownItem href="/ingredients">Ingredients</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default MyDropdown;