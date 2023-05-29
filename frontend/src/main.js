import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import App from './App.vue'
import router from './router'
import { ErrorMessage, Field, Form } from 'vee-validate'

const app = createApp(App)
const firebaseConfig = {
    apiKey: "AIzaSyCONx_tOsNSNWahCIu56c7eAnz47VepVKk",
    authDomain: "paseomascotaszonas.firebaseapp.com",
    projectId: "paseomascotaszonas",
    storageBucket: "paseomascotaszonas.appspot.com",
    messagingSenderId: "912731362436",
    appId: "1:912731362436:web:4d22dbb18837e129fb5ed1",
    measurementId: "G-KYVY89R46E"
  };
const firebaseApp = initializeApp(firebaseConfig);  
const db = getFirestore(firebaseApp);

app.use(createPinia())
app.use(router)

app.mount('#app')
