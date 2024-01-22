import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

// Configs
import { mainNavItems } from "configs/nav-items";

// Styles
import styles from "../header.module.scss";

export const MainNavItems = ({ onClickNavLink }: any) => {
  const location = useLocation();
  const items = [...mainNavItems];

  return (
    <>
      {items.map((item, index) => {
        const { name, path } = item;

        return (
          <Nav.Link
            onClick={() => onClickNavLink()}
            key={index}
            className={`${styles.navLink} me-2 p-3`}
            as={Link}
            to={path}
            active={location.pathname === path}
          >
            {name}
          </Nav.Link>
        );
      })}
    </>
  );
};
