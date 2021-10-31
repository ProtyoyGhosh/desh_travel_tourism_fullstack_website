import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase_config";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initializeFirebase;