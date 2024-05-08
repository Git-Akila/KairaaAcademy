import React from 'react'
import MenuItem from './MenuItem';

const Dropdown = ({submenu, dropdown, depthLevel}) => {
 const newDepthLevel = depthLevel + 1;
 const dropdownClass = newDepthLevel >1? "dropdown-submenu":"";

 return (
  <ul className={`dropdown ${dropdownClass} ${dropdown ? "show":""} 
  md:absolute hidden md:w-[250px] w-full top-0  md:left-[100%] p-2 shadow shadow-slate-50 text-center bg-white md:text-start z-20`}>
{submenu.map((submenu, index)=>(
 
    <MenuItem items={submenu} key={index} depthLevel={depthLevel}/>
  ))}
  </ul>
 )
}

export default Dropdown
