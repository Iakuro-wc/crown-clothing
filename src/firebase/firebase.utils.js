import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAJIghySHIbr1Gf4N2SWz-mtVoTy1U_5rI",
    authDomain: "crown-db-69f91.firebaseapp.com",
    databaseURL: "https://crown-db-69f91.firebaseio.com",
    projectId: "crown-db-69f91",
    storageBucket: "",
    messagingSenderId: "652496714765",
    appId: "1:652496714765:web:1f2ca3fa093ed3e2"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
