import { useHistory, useLocation } from "react-router";
import styles from "./Header.module.css";

const Navigation = ({ classes, isMobileMenuOpen }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const goTo = (path) => {
    history.push(path);
  };

  return (
    <nav className={classes}>
      <ul>
        <li
          className={`${styles.listItem} ${pathname === "/" && styles.active}`}
          onClick={() => goTo("/")}
        >
          Quiz
        </li>
        <li
          className={`${styles.listItem} ${
            pathname === "/is-triangle" && styles.active
          }`}
          onClick={() => goTo("is-triangle")}
        >
          Is Triangle
        </li>
        <li
          className={`${styles.listItem} ${
            pathname === "/hypotenuse" && styles.active
          }`}
          onClick={() => goTo("hypotenuse")}
        >
          Hypotenuse
        </li>
        <li
          className={`${styles.listItem} ${
            pathname === "/area" && styles.active
          }`}
          onClick={() => goTo("area")}
        >
          Area of Triangle
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
