import {ref} from 'vue'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const useUsers = () => {
    const auth = getAuth();
    const email = ref('');
    const password = ref('');
    const user = ref(null);

    const logIn = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            user.value = userCredential.user;
            console.log("userInfo", user.value.email);
            localStorage.setItem("userLoginInfoFireBase", user.value.email);
            console.log("userLoginInfoFireBase", localStorage.getItem("userLoginInfoFireBase"));
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
    }
    const logOut = () => {
        signOut(auth).then(() => {
            console.log("User logged out", user.value);
            localStorage.removeItem("userLoginInfoFireBase");
            
        }).catch((error) => {
            console.log(error);
        });
    }

    const isLoggedin = ref(false)
    const isLoggedinTest = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                isLoggedin.value = true;
                console.log("isLoggedin", isLoggedin.value);
            } else {
                isLoggedin.value = false;
                console.log("isLoggedin", isLoggedin.value);
            }
            
        })
    }     

  return {
    logIn,
    email,
    password,
    user,
    auth,
    logOut,
    isLoggedin,
    isLoggedinTest
  }
}

export default useUsers;
