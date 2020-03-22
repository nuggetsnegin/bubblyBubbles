import firebase from 'firebase/app';
import 'firebase/database';
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCbeKiDgDr_5DQiBtZoxgiC2QmPJLtms7E',
  authDomain: 'bubblybubbles-8756e.firebaseapp.com',
  databaseURL: 'https://bubblybubbles-8756e.firebaseio.com',
  projectId: 'bubblybubbles-8756e',
  storageBucket: 'bubblybubbles-8756e.appspot.com',
  messagingSenderId: '239757205823',
  appId: '1:239757205823:web:c6bf92cbfa9078e954738a'
};

firebase.initializeApp(firebaseConfig);
// this exports the CONFIGURED version of firebase
export default firebase;
