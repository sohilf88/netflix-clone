// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaRlHYTuBjHL-z7yyJ8_csK46F-h_vOlQ",
  authDomain: "netflix-clone-863c3.firebaseapp.com",
  projectId: "netflix-clone-863c3",
  storageBucket: "netflix-clone-863c3.appspot.com",
  messagingSenderId: "552245452629",
  appId: "1:552245452629:web:c5d3a065fc1b11228359dc"
};

// Initialize Firebase
const app =!getApps().length?initializeApp(firebaseConfig):getApp
const db=getFirestore()
const auth=getAuth()
// const app = initializeApp(firebaseConfig);
export default app;
export {db,auth};