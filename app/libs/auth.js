// import { collection, addDoc } from "firebase/firestore";
// import { db } from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const Oauth = getAuth();

export const auth = () => {
    const signup = async (e) => {
        console.log("sign up called");
        if (user.email != "" && user.password != "") {
          console.log("inside sign up ");
    
          await createUserWithEmailAndPassword(Oauth, user.email, user.password)
            .then((userCredential) => {
              // Signed up 
              console.log("userCredential signup = ", userCredential);
    
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("errror = ", errorMessage);
              // ..
            });
    
        }
      }

      const signin = async () => {
        console.log("sign In called");
        console.log("email , password = " , user.email , user.password);
    
    
        if (user.email != "" && user.password != "") {
          console.log("came inside signIn");
          await signInWithEmailAndPassword(Oauth, user.email, user.password)
            .then((userCredential) => {
              // Signed in 
              console.log("userCredential signin = ", userCredential);
              router.push('/news')        // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        }
      }

  return {signin , signup}
}
