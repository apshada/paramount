import * as firebase from 'firebase';


export const logoutUser = () => {
  firebase.auth().signOut();
};

export const loginUser = async ({ email, password }) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return {   };
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Invalid email address format."
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "Invalid email address or password."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};

