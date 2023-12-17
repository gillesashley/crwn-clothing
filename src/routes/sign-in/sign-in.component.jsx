import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    createUserDocumentFromAuth(user);
    // console.log(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </div>
  );
}
