import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import "./log-in.styles.scss";
import { logInWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultfomrfields = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [formfields, setformfields] = useState(defaultfomrfields);
  const { email, password } = formfields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformfields({ ...formfields, [name]: value });
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await logInWithEmailAndPassword(email, password);
      resetformfields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("Incorrect email/username");
          break;
        default:
          console.log(err);
      }
    }
  };

  const resetformfields = () => {
    setformfields(defaultfomrfields);
  };

  // console.log(formfields);
  return (
    <div className="log-in-container">
      <h2>I already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGoogleUser}
          >
            Google Sign IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
