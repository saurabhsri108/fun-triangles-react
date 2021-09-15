import { useState } from "react";
import Container from "../Container";
import Hamburger from "./Hamburger";
import styles from "./Header.module.css";
import Navigation from "./Navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <Container>
        <a href="/" className={styles.logo}>
          Fun with Triangles
        </a>
        <Hamburger
          toggleMenu={toggleMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <Navigation
          classes={`${styles.mobile} ${isMobileMenuOpen && styles.open}`}
        />
        <Navigation classes={`${styles.screen}`} />
      </Container>
    </header>
  );
};

export default Header;
