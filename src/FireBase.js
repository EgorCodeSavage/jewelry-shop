import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRfTnlgfDVh1VkQREwYFoORRf_YZ2ZIjY",
  authDomain: "malva-juwelry.firebaseapp.com",
  projectId: "malva-juwelry",
  storageBucket: "malva-juwelry.appspot.com",
  messagingSenderId: "845688003641",
  appId: "1:845688003641:web:4d8e69cb5052f27079c1e8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);