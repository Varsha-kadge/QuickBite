// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyATkOAad_ETA6ma2Vo56BQIR69F6NatU0k',
  authDomain: 'quickbite-8ff38.firebaseapp.com',
  projectId: 'quickbite-8ff38',
  storageBucket: 'quickbite-8ff38.firebasestorage.app',
  messagingSenderId: '799717538398',
  appId: '1:799717538398:web:4dece4fbe322c38abfd2cf',
  measurementId: 'G-CEM9WZCKXR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
