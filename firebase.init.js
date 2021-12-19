
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const initialize = () => {
    const app = initializeApp(firebaseConfig);

}
export default initialize;

