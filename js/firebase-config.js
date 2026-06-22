// =============================================
//  FIREBASE CONFIG — shared across all pages
//  Import this file using <script type="module">
// =============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAJV-Bzdl9HH5zjXUkzlKpJYpyVGBYm5Y",
  authDomain: "newera-showcase.firebaseapp.com",
  projectId: "newera-showcase",
  storageBucket: "newera-showcase.firebasestorage.app",
  messagingSenderId: "621438368786",
  appId: "1:621438368786:web:b53f66785f261f1399accb"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
const auth = getAuth(app);

// KEEP LOGIN SESSION 
setPersistence(auth, browserLocalPersistence);

export { db, auth };