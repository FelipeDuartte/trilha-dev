// firebaseConfig.js
// 👉 Substitua os valores abaixo pelos do seu projeto no Firebase Console
// https://console.firebase.google.com → Seu projeto → Configurações → Adicionar app Web

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyCiH-8ZECYz-WH4Q_p6ZaO_KmDZitaXbRs",
  authDomain: "jornadadev-5412e.firebaseapp.com",
  projectId: "jornadadev-5412e",
  storageBucket: "jornadadev-5412e.firebasestorage.app",
  messagingSenderId: "244550158509",
  appId: "1:244550158509:web:67d698223638243b00de24"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);