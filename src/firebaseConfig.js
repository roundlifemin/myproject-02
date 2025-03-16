//  mport firebase from "firebase/app";
// import "firebase/firestore";

// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';


// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
// };

// const firebaseConfig = {
//     apiKey: "AIzaSyAUa_d2_HFfxsRWBE4OIPVBSTR4NZfGDXE",
//     authDomain: "myprojec-02.firebaseapp.com",
//     projectId: "myprojec-02",
//     storageBucket: "myprojec-02.firebasestorage.app",
//     messagingSenderId: "313101967683",
//     appId: "1:313101967683:web:c400040a734d10559dcff6",
//     measurementId: "G-EKS50C299L"
//   };

// //export default firebase.initializeApp(firebaseConfig);
// // firebase.initializeApp(firebaseConfig);

// // export const db = firebase.firestore();

// // Firebase 초기화
// const app = initializeApp(firebaseConfig);
// const firebasedb = getFirestore(app);
// export { firebasedb };


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAUa_d2_HFfxsRWBE4OIPVBSTR4NZfGDXE",
    authDomain: "myprojec-02.firebaseapp.com",
    projectId: "myprojec-02",
    storageBucket: "myprojec-02.firebasestorage.app",
    messagingSenderId: "313101967683",
    appId: "1:313101967683:web:c400040a734d10559dcff6",
    measurementId: "G-EKS50C299L"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firebasedb = getFirestore(app);
export { firebasedb };