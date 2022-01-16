import {
  GithubAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebase';

export default class LoginAuth {
  login(name) {
    const provider = this.getProvider(name);
    signInWithPopup(auth, provider) //
      .then(result => {
        console.log(result.user);
      });
  }

  logOut() {
    auth.signOut();
  }

  getProvider(name) {
    switch (name) {
      case 'github':
        return new GithubAuthProvider();
      case 'google':
        return new GoogleAuthProvider();
      case 'facebook':
        return new FacebookAuthProvider();
      default:
        throw new Error(`${name} is not provider`);
    }
  }
}
