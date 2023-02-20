
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAGryRFGg5QFFHjQRfP5sWrqRurqsL56Ew",
  authDomain: "shiftacademyg23.firebaseapp.com",
  projectId: "shiftacademyg23",
  storageBucket: "shiftacademyg23.appspot.com",
  messagingSenderId: "1087275661137",
  appId: "1:1087275661137:web:581370f4a18ece30ee4570"
};
const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app)
export const auth = getAuth(app)