import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCeAkUedoqVpzPqY-VcG4uyFf94cTRmANU",
    authDomain: "crwn-db-c22a0.firebaseapp.com",
    projectId: "crwn-db-c22a0",
    storageBucket: "crwn-db-c22a0.appspot.com",
    messagingSenderId: "444262297379",
    appId: "1:444262297379:web:51e167b8feeea30f11a696",
    measurementId: "G-7968XM3HJ7"
};

export const createUserProfileDocument = async (userAuth, additionaldata) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionaldata
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
