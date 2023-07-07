import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDptFHf51hXuoQrjRV2MeCgW8eTAXrIpwc",
  authDomain: "fir-auth-7875.firebaseapp.com",
  projectId: "fir-auth-7875",
  storageBucket: "fir-auth-7875.appspot.com",
  messagingSenderId: "715143399143",
  appId: "1:715143399143:web:13ab12c8c94e3d6bd98442",
  measurementId: "G-6H415MGG1V"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);


export { app, auth, storage };






