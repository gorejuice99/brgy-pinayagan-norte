import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react-core";

// Assets
import CompanyLogo from "assets/logo/brgy-logo.jpg";
import UserProfile from "assets/icons/user-profile-icon.png";
import UserLight from "assets/icons/user-light.png";
import UserDark from "assets/icons/user-dark.png";
import SignOutLight from "assets/icons/sign-out-light.png";
import SignOutDark from "assets/icons/sign-out-dark.png";

// Components
import { Logo, Separator, MainNavItems } from "./components";

// Contexts
import { useTheme } from "contexts/theme-context";

// Constants
import { HOME } from "constants/paths";

// Styles
import styles from "./header.module.scss";

const Header = () => {
  const userTheme = { light: UserLight, dark: UserDark };
  const signOutTheme = { light: SignOutLight, dark: SignOutDark };
  const { theme } = useTheme();
  const { signOut } = useAuthenticator();

  const hideOffcanvas = () => {
    // document.getElementById("offcanvas-pinayagan")?.classList.toggle("show");
  };

  return (
    <>
      <Navbar
        key="md"
        expand="md"
        variant="dark"
        className={`${styles.navbar}`}
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to={HOME}>
              <Logo
                className={`${styles.logo} me-2`}
                roundedCircle={true}
                image={CompanyLogo}
              />
              <span className={styles.logoText}>Pinayagan Norte</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvas-pinayagan" />
          <Separator outerClass="d-flex" innerClass={styles.separator} />
          <Navbar.Offcanvas
            id="offcanvas-pinayagan"
            data-bs-target
            aria-labelledby="offcanvas-brgy"
            placement="top"
            scroll={true}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvas-brgy">
                Pinayagan Norte
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.offcanvas_body_bg}>
              <Nav
                className={`${styles.navLinkContainer} justify-content-start flex-grow-1 pe-3 `}
              >
                <MainNavItems onClickNavLink={hideOffcanvas} />
              </Nav>
              <Nav className={styles.navDropdownContainer}>
                <NavDropdown
                  className={styles.profileContainer}
                  title={
                    <Logo
                      className={styles.profileDark}
                      roundedCircle={false}
                      image={UserProfile}
                    />
                  }
                  align="end"
                  autoClose="outside"
                >
                  <NavDropdown.Item className="p-1 ps-3">
                    <Row>
                      <Col md={2} className="pe-0">
                        <img
                          src={userTheme[theme]}
                          className={styles.navDropdownIcon}
                        />
                      </Col>
                      <Col md={10}>
                        <p className={styles.navDropdownUser}>Your Account</p>
                      </Col>
                    </Row>
                  </NavDropdown.Item>
                  <NavDropdown.Divider className={styles.navDropdownDivider} />
                  <NavDropdown.Item
                    className="p-1 ps-3"
                    onClick={() => signOut()}
                  >
                    <Row>
                      <Col md={2} className="pe-0">
                        <img
                          src={signOutTheme[theme]}
                          className={styles.navDropdownIcon}
                        />
                      </Col>
                      <Col md={10}>Sign Out</Col>
                    </Row>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
