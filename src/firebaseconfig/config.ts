import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyArmVlt6c1emUrHgaxBWigl3QxAVJhyMWE",
  authDomain: "fir-authentication-f20d0.firebaseapp.com",
  projectId: "fir-authentication-f20d0",
  storageBucket: "fir-authentication-f20d0.firebasestorage.app",
  messagingSenderId: "712820523466",
  appId: "1:712820523466:web:5f27f622883c0630944f33",
  measurementId: "G-B8RVNQL2VN",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log({ auth });
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
