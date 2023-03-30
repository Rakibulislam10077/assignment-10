// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBK72lvIEyBAw5Z4UifT4gYhr3L6gE5XpM",
    authDomain: "assignment-10-ad0e1.firebaseapp.com",
    projectId: "assignment-10-ad0e1",
    storageBucket: "assignment-10-ad0e1.appspot.com",
    messagingSenderId: "220302292439",
    appId: "1:220302292439:web:f437a34f2546f9331a4792"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;