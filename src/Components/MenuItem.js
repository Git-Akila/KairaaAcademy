import React, { useState, useEffect, useRef } from 'react'
import Dropdown from "./Dropdown";
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MenuItem = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };
  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  const handleClick = () => {
    if (items.submenu && depthLevel === 0) {
      setDropdown(!dropdown);
    }
  };

  return (
    <li className='menu-items relative' ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >

      {items.submenu ? (
        <>
          <button
            type='button'
            aria-haspopup='menu'
            // aria-expanded={dropdown ? "true":"false"}
            // onClick={()=>setDropDown((prev)=>!prev)}
            // onClick={() => setDropDown(!dropdown)}
            className='cursor-pointer text-center p-2 items-center'
            onClick={handleClick}
          >
             {/* {items.title}{depthLevel > 0 ? <span>&raqao;</span> : <span className='arrow' />} */}
             
             {items.title}{depthLevel > 0 ? <IoIosArrowDown /> : <span className='arrow' />}
             
             
            {/* {items.title}{depthLevel > 0  <IoIosArrowDown /> */}
 
          </button>
          <Dropdown depthLevel={depthLevel} submenu={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link to={items.url} className='block hover:text-blue-500 p-2'>{items.title}</Link>
      )}
    </li>
  )
}

export default MenuItem;
