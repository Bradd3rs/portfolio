import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCpGlL723lm5LMYfEbSrHJppYAGmz5GKqI",
    authDomain: "tbrad-ead63.firebaseapp.com",
    databaseURL: "https://tbrad-ead63.firebaseio.com",
    projectId: "tbrad-ead63",
    storageBucket: "tbrad-ead63.appspot.com",
    messagingSenderId: "636887264215"
  };
const fire = firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default fire;