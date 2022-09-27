<template>
    <v-card
      class="mx-auto"
      max-width="344"
      title="User Registration"
    >
      <v-container>
         <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
        ></v-text-field>
  
        <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
        ></v-checkbox>
      </v-container>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-spacer></v-spacer>  
        <v-btn @click="register"
         color="success">
          Complete Registration  
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'

const email = ref('');   
const password = ref('');
const router = useRouter()
const terms = ref(false);

const register = () => { 
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
  
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
        console.log(user);
      console.log("Successfully registered!");
      console.log(auth.currentUser);
      router.push('/feed')
      // ...
    })
     
    
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
      // ..
    });
} 




</script>
