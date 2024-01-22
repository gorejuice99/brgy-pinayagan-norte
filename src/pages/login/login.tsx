import { Authenticator, Heading, useTheme, View } from "@aws-amplify/ui-react";

// Assets
import CompanyLogo from "assets/logo/brgy-logo.jpg";

// Components
import { Logo } from "../../layouts/header/components/logo";

// Styles
import styles from "./login.module.scss";
import "@aws-amplify/ui-react/styles.css";

const components = {
  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Logo
            className={`${styles.logo} mb-2`}
            roundedCircle={true}
            image={CompanyLogo}
          />
          <Heading level={2}>BRGY. PINAYAGAN NORTE WATER WORKS SYSTEM</Heading>
        </View>
      );
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: "Email",
      isRequired: true,
    },
    password: {
      placeholder: "Password",
      isRequired: true,
    },
  },
  resetPassword: {
    username: {
      placeholder: "Email",
    },
  },
};

function Login() {
  return (
    <div className={`${styles.login_wrapper} px-1`}>
      <Authenticator
        components={components}
        hideSignUp
        formFields={formFields}
      />
    </div>
  );
}

export default Login;
