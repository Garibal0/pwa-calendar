// Firebase config (przykładowy)
const firebaseConfig = {
  apiKey: "AIzaSyB0uoslmSpHIWBLwsMLP8wuOpoQkh9tB7c",
  authDomain: "grzybek-3ded4.firebaseapp.com",
  projectId: "grzybek-3ded4",
  storageBucket: "grzybek-3ded4.appspot.com",
  messagingSenderId: "318728205473",
  appId: "1:318728205473:web:3d7e110088ff1e2c7aace0",
  measurementId: "G-K3L05XR8KH"
};

// testowy render
document.addEventListener("DOMContentLoaded", () => {
  const appDiv = document.getElementById("app");
  appDiv.innerHTML = `
    <h2>Witaj w PWA Calendar 🚀</h2>
    <p>Jeśli to widzisz, aplikacja działa poprawnie.</p>
  `;
  console.log("App.js działa ✅");
});