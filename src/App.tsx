import { useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";

// Pages
import Home from "pages/home";
import Login from "pages/login";
import TermsOfUse from "pages/terms-of-use/terms";
import PrivacyStatement from "pages/privacy-statement";
import ContactSupport from "pages/contact-support";

// Configs
import awsExports from "configs/aws-exports";

// Layouts
import PageLayout from "layouts/page-layout";

// Constants
import {
  HOME,
  LOGIN,
  TERMS_OF_USE,
  PRIVACY_STATEMENT,
  CONTACT_SUPPORT,
} from "constants/paths";

// Contexts
import { ThemeProvider } from "contexts/theme-context";

// Styles
import "./App.scss";

const contextWrapper = () => (
  <ThemeProvider>
    <PageLayout />
  </ThemeProvider>
);

function App() {
  const authenticated = "authenticated";
  const { route } = useAuthenticator((context: { route: string }) => [
    context.route,
  ]);

  useEffect(() => {
    Amplify.configure(awsExports);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={contextWrapper()}>
          <Route path={HOME} element={<Home />} />
          <Route
            path={route === authenticated ? LOGIN : LOGIN}
            element={route === authenticated ? <Login /> : <Login />}
          />
          <Route path={TERMS_OF_USE} element={<TermsOfUse />} />
          <Route path={PRIVACY_STATEMENT} element={<PrivacyStatement />} />
          <Route path={CONTACT_SUPPORT} element={<ContactSupport />} />
        </Route>
        <Route path="*" element={<Navigate to={HOME} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
