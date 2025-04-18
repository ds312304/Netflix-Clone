import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAYORgiteJ6cgsqHJbz8xxmWx7UuMjogWQ",
  authDomain: "netflix-clone-b3b6d.firebaseapp.com",
  projectId: "netflix-clone-b3b6d",
  storageBucket: "netflix-clone-b3b6d.firebasestorage.app",
  messagingSenderId: "648215024469",
  appId: "1:648215024469:web:e1f131040bc96dc8f495dc"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvide: "local",
            email,
        })
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const login = async (email, passowrd) => {
    try{
        await signInWithEmailAndPassword(auth, email, passowrd)
    }catch(error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const logout = () => {
    signOut(auth);
}
export { auth, db, signUp, login, logout };