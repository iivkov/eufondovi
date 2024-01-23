import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown }) => {
    return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <MenuItems items={submenu} key={index} />
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;