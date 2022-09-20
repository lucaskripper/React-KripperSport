import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAAsIrw26kq2WIaVftUDFbnhycqm9Gpek4",
  authDomain: "krippersport.firebaseapp.com",
  projectId: "krippersport",
  storageBucket: "krippersport.appspot.com",
  messagingSenderId: "833438925293",
  appId: "1:833438925293:web:62447ca7e0fdfbbb4167e4"
};
const app = initializeApp(firebaseConfig);
export const bd = getFirestore(app)