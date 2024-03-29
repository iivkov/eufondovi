import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
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

  return (
    <div className="menu-items" ref={ref} onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave} onClick={closeDropdown}>
      {items.submenu ? (
        <>
         <button
      type="button" aria-haspopup="menu"
      aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}
     >
      {items.title}{" "}
     </button>
     <Dropdown submenus={items.submenu}
      dropdown={dropdown} 
     />
    </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </div>
  );
};

export default MenuItems;