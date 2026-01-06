import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const signup = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

const logout = () => signOut(auth);

export default {
  login,
  signup,
  logout,
  onAuthStateChanged: (cb) => onAuthStateChanged(auth, cb),
};