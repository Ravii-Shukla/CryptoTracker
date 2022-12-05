import {initializeApp} from "firebase/app"

import {getAuth} from 'firebase/auth'

const firebaseConfig={
    apiKey: "AIzaSyBd0xPzzaYc1uqPsjNq-j2Vk7wTzxOIPkA",
  authDomain: "crytoverse-39618.firebaseapp.com",
  projectId: "crytoverse-39618",
  storageBucket: "crytoverse-39618.appspot.com",
  messagingSenderId: "600284565228",
  appId: "1:600284565228:web:0f4e1bfe639ad265635fc9"
}

const app= initializeApp(firebaseConfig)
const auth =getAuth(app)

export {auth}
