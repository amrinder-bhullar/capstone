import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import LogIn from "../../log-in/log-in.component";

import SignUpForm from "../../sign-up-form/sign-up-form.component";

import "./authentication.styles.scss";

function Authentication() {
  return (
    <div className="sign-in-container">
      <LogIn />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
