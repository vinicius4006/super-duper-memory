import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../config/firebase";

export const signIn = async (objFormUser: any): Promise<UserCredential> => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      objFormUser.email,
      objFormUser.password
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (objFormUser: any): Promise<UserCredential> => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      objFormUser.email,
      objFormUser.password
    );
    return response;
  } catch (error) {
    throw error;
  }
};
