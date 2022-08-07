// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5OaNqt-TWhpfxaW5PMffu0r3Wt53KoJY",
  authDomain: "crwn-clothing-db-13d32.firebaseapp.com",
  projectId: "crwn-clothing-db-13d32",
  storageBucket: "crwn-clothing-db-13d32.appspot.com",
  messagingSenderId: "87757723963",
  appId: "1:87757723963:web:f9a1a315e95587fe08ff1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// how to use this code:
// useEffect(() => {
//   addCollectionAndDocuments("categories", SHOP_DATA);
// }, []);

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(" error creating the user", error.message);
    }
  }
  return userDocRef;

  //if user data exists

  //if user not exists create/set the document with the data from userAuth in my collection

  //return userDocRef
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const logInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

// with onAuthStateChanged is provided by firebase it takes a callback means it will update the UserState if login to firebase and logout instead of changing the state every where to trigger the change Idea is to centralize the change of the state and rest of the componenets just to read it
export const onAuthStateChangedListerner = (callback) =>
  onAuthStateChanged(auth, callback);

// transaction: it means you need 2 rights to complete the transaction, if I transfer money it needs to show -100 in my account and +100 in other persons bank account if it shows -100 but does not show +100 in other account it means transaction has not been completed and you are where you were before the transaction completed you need 2 rights to complete the transaction.
