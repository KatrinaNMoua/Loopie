import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import React, { useState } from "react";
import Hamburger from "hamburger-react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Hamburger
          size={30}
          toggled={open}
          toggle={setOpen}
          duration={0.8}
          easing="ease-in-out"
          rounded
        />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <h1>Loopie</h1>
        </NavLink>
      </header>
      {open && (
        <div>
          <nav>
            <div>
              <ul>
                <li className={styles.list}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className={styles.list}>
                  <NavLink
                    to="/account"
                    className={({ isActive }) =>
                      isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                  >
                    My Account
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default NavBar;
