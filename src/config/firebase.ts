import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb56732ZkACuroOPxkELIC_UdHg8RDuFQ",
  authDomain: "super-duper-memory.firebaseapp.com",
  projectId: "super-duper-memory",
  storageBucket: "super-duper-memory.appspot.com",
  messagingSenderId: "289766993116",
  appId: "1:289766993116:web:c87b4fb54aec60b6195819",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
