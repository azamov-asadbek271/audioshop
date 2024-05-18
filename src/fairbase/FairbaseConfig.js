import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT2ueDC5fNWO1IdZp7co54EuUggv-BUQ4",
  authDomain: "audio-shop-8e760.firebaseapp.com",
  projectId: "audio-shop-8e760",
  storageBucket: "audio-shop-8e760.appspot.com",
  messagingSenderId: "210209666671",
  appId: "1:210209666671:web:7ed2c0cb0ad136c00bbf9a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
