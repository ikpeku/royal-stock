
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword} from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { getFirestore, getDoc, setDoc, doc,  serverTimestamp, updateDoc} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBia6bfoadENI1i_lxyz-doG2CMBPqgCkQ",
  authDomain: "royal-stock-investment.firebaseapp.com",
  projectId: "royal-stock-investment",
  storageBucket: "royal-stock-investment.appspot.com",
  messagingSenderId: "543000571543",
  appId: "1:543000571543:web:d73c91d790c7c038e9c3d2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth()

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
  'login_hint': 'user@example.com'
});

const storage = getStorage()
const firestore = getFirestore()

export const signInWithGoogle = async() => {

  await signInWithPopup(auth, googleProvider)
  await setDataStorage(auth.currentUser)
}




export const signout = async() => {
  const ref = doc(firestore, "users", auth.currentUser.uid)
  
  await updateDoc(ref, {isOnline: false})

  await signOut(auth, googleProvider)

}


export const setDataStorage = async(user) => {
  const ref = doc(firestore, "users", user.uid )

  const getdoc = await getDoc(ref)

  const isExist = getdoc.exists()

  if(!isExist){
    try {
const {uid, displayName, photoURL} = user
      await setDoc(ref, {uid, displayName, photoURL, registeredOn: serverTimestamp(), isOnline: true})
      
    } catch (error) {
      console.error(error)
      
    }
  } else {
    await updateDoc(ref, {isOnline: true})
  }

  return ref;

}


export const signUpWithEmailPassword = async({email, password, displayName, file, username}) => {

  await createUserWithEmailAndPassword(auth, email, password)

  const storageRef = ref(storage, `user-images/${auth.currentUser.uid}/${username} `);
  await uploadBytesResumable(storageRef, file);

  const photoURL = await getDownloadURL(storageRef)


  await updateProfile(auth.currentUser, {displayName, photoURL})
  await setDataStorage(auth.currentUser)

  // const refDoc = doc(firestore, "users", auth.currentUser.uid)
  // await updateDoc(refDoc, {isOnline: true})
 
}



export const signinWithEmailPassword = async(email, password) => {
  const ref = doc(firestore, "users", auth.currentUser.uid)
  await signInWithEmailAndPassword(auth, email, password)
  
  await updateDoc(ref, {isOnline: true})

 
}


