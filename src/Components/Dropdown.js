import React from 'react'
import MenuItem from './MenuItem';

const Dropdown = ({submenu, dropdown, depthLevel}) => {
 const newDepthLevel = depthLevel + 1;
 const dropdownClass = newDepthLevel >1? "dropdown-submenu":"";

 return (
  <ul className={`dropdown ${dropdownClass} ${dropdown ? "show":""} md:absolute bg-white hidden w-[200px] top-0 z-10 md:left-[100%] p-2 text-center md:text-start`}>
{submenu.map((submenu, index)=>(
    <MenuItem items={submenu} key={index} depthLevel={newDepthLevel}/>
  ))}
  </ul>
 )
}

export default Dropdown
