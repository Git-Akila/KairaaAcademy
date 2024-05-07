import React,{useState, useEffect, useRef} from 'react'
import Dropdown from "./Dropdown";
import { Link } from 'react-router-dom';

const MenuItem = ({items,depthLevel}) => {
 const [dropdown, setDropDown]=useState(false);
const ref=useRef(null);

useEffect(()=>{
  const handler=(event)=>{
    if(dropdown && ref.current && !ref.current.contains(event.target)){
     setDropDown(false); 
    }
  };
  document.addEventListener('mousedown', handler);
  document.addEventListener('touchstart', handler);

return()=>{
  document.removeEventListener('mousedown',handler);
  document.removeEventListener('touchstart', handler);
}

},[dropdown])

const onMouseEnter=()=>{
  if(window.innerWidth<=960 ){
    setDropDown(true);
  }
}

const onMouseLeave=()=>{
  if(window.innerWidth <=960){
    setDropDown(false)
  }
}


return (
  <li className='menu-items relative'  ref={ref}
  onMouseOver={onMouseEnter}
  onMouseDown={onMouseLeave}
  >

    {items.submenu ? (
      <>
      <button
      // type='button'
      // aria-haspopup='menu'
      // aria-expanded={dropdown ? "true":"false"}
      // onClick={()=>setDropDown((prev)=>!prev)}
      onClick={() => setDropDown(!dropdown)}
      className='cursor-pointer '
      >
        {items.title}{depthLevel>0 ? <span>&raqao;</span>:<span  className='arrow' />}
      </button>
      <Dropdown depthLevel={depthLevel} submenu={items.submenu} dropdown={dropdown}/>
      </>
    ):(
<Link to={items.url} className='block hover:text-blue-500 p-2'>{items.title}</Link>
    )}
  </li>
)
}

export default MenuItem;
