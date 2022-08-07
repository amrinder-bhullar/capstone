import LogIn from "../../log-in/log-in.component";

import SignUpForm from "../../sign-up-form/sign-up-form.component";

import { SignInContainer } from "./authentication.styles";

function Authentication() {
  return (
    <SignInContainer>
      <LogIn />
      <SignUpForm />
    </SignInContainer>
  );
}

export default Authentication;
