import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGw2ZGgaO_RdLrfzn9XxscTTGkfjvY_E4",
  authDomain: "abba-7a62a.firebaseapp.com",
  projectId: "abba-7a62a",
  storageBucket: "abba-7a62a.firebasestorage.app",
  messagingSenderId: "666112241049",
  appId: "1:666112241049:web:daf7326b925bc127b8f708",
  measurementId: "G-0V7VWZ1BQT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
