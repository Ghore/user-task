import React from "react";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className={style.header__list}>
        <li className={style.header__list_item}>
          <NavLink to="/first-page">Fist page</NavLink>
        </li>
        <li className={style.header__list_item}>
          <NavLink to="/second-page">Second page</NavLink>
        </li>
        <li className={style.header__list_item}>
          <NavLink to="/third-page">Third page</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
