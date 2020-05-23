import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {                 
                apiKey: "AIzaSyAV-C8H4wtHEr-qk-mYln3M54lZ1OVBklg",
                authDomain: "best-at-3697b.firebaseapp.com",
                databaseURL: "https://best-at-3697b.firebaseio.com",
                projectId: "best-at-3697b",
                storageBucket: "best-at-3697b.appspot.com",
                messagingSenderId: "820866751189",
                appId: "1:820866751189:web:1df8992d5938b3f5e8a05c",
                measurementId: "G-ZEEVSPNXTM"
}

firebase.initializeApp(firebaseConfig);

export default firebase;
