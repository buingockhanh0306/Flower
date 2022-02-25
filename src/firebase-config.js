import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB7ueeNd1hWMYfug7btlUIh8pwuVJ0lAMM",
  authDomain: "flower-40e37.firebaseapp.com",
  databaseURL: "https://flower-40e37-default-rtdb.firebaseio.com",
  projectId: "flower-40e37",
  storageBucket: "flower-40e37.appspot.com",
  messagingSenderId: "376374293205",
  appId: "1:376374293205:web:593cf7aba5c02bc9cee85c",
  measurementId: "G-WFPH4PLSB2"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

const providerGoogle = new GoogleAuthProvider()
const providerFacebook = new FacebookAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, providerGoogle).then((result) => {
    localStorage.setItem('name', result.user.displayName)
    localStorage.setItem('avatar', result.user.photoURL)
  }).catch((error) => {
    console.log(error);
  })
}

export const signInWithFacebook = () => {
  signInWithPopup(auth, providerFacebook).then((result) => {
    localStorage.setItem('name', result.user.displayName)
    localStorage.setItem('avatar', result.user.photoURL)

  }).catch((error) => {
    console.log(error);
  })
}

export const signOutUser = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    localStorage.clear()
    console.log('sign out');
    window.location.reload();

  }).catch((err) => {
    console.log(err);
  })
}
