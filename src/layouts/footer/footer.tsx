import { Link } from "react-router-dom";

// Constants
import {
  TERMS_OF_USE,
  PRIVACY_STATEMENT,
  CONTACT_SUPPORT,
} from "constants/paths";

// Styles
import Style from "./footer.module.scss";

function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className={`fixed-bottom py-3 ${Style.footer}`}>
      <div className="container-fluid">
        <ul className={`d-flex align-items-center ${Style.footer_links}`}>
          <li>© {year} Brgy. Pinayagan Norte. All Rights Reserved.</li>
          <li>
            <Link to={TERMS_OF_USE}>Terms</Link>
          </li>
          <li>
            <Link to={PRIVACY_STATEMENT}>Privacy</Link>
          </li>
          <li>
            <Link to={CONTACT_SUPPORT}>Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
