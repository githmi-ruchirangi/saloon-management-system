// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQck6ftFfQXOwATarT6ZN9dxW9XjZ0dpI",
  authDomain: "saloon-management-system-9e299.firebaseapp.com",
  projectId: "saloon-management-system-9e299",
  storageBucket: "saloon-management-system-9e299.appspot.com",
  messagingSenderId: "377077306376",
  appId: "1:377077306376:web:7abc3ffb627175c42badbd",
  measurementId: "G-K31NW9RLJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase app as the default export
export default app;
