'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { collection, addDoc } from "firebase/firestore";
// import { db } from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';
import Landing from './landing/page';

// const auth = getAuth();


export default function LandingPage() {
  const [data, setdata] = useState("")
  const [user, setUser] = useState({ email: "", password: "" })

  const router = useRouter();
  const handleClick = async () => {
    if (data != "") {
      try {
        const docRef = await addDoc(collection(db, "suggestions"), {
          data: data
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    }
  }

  const signup = async (e) => {
    console.log("sign up called");
    if (user.email != "" && user.password != "") {
      console.log("inside sign up ");

      await createUserWithEmailAndPassword(auth, user.email, user.password)
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
      await signInWithEmailAndPassword(auth, user.email, user.password)
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


  return (
    <div className="flex flex-col">
      <Landing/>
    </div>
   
  )
}
