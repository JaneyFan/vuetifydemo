<template>
  <div>
    <h1>
      Front page stuff
    </h1>
    <v-form>

      <v-text-field

            label="Regular"
          ></v-text-field>
    </v-form>

    <v-btn @click="firebaseAddSingleItem()">Add Static Data</v-btn>    

    <v-card class="ma-5 pa-4" v-for="post in posts" :key="post">
      <p>Title: {{post.title}}</p>
      <p>Description: {{post.description}}</p>
      <p>QuoteNumber: {{post.quoteNumber}}</p>
      <p>PostID: {{post.id}}</p>
      <v-btn @click="firebaseDeleteSingleItem(post.id)">delete</v-btn>
      <v-btn @click="firebaseUpdateSingleItem(post.id)">Edit item (static)</v-btn>
    </v-card>
  </div>
</template>

<script setup>
//import { db } from '../firebase.js'
//import { ref } from 'vue'
import { onMounted, ref} from 'vue'
import usePosts from '../modules/usePosts'

//import { collection, /* getDocs,  */doc, deleteDoc, onSnapshot} from "firebase/firestore"; 

//const posts = ref([]) 
const {posts, getPostsData, firebaseDeleteSingleItem, firebaseAddSingleItem, firebaseUpdateSingleItem} = usePosts()

  onMounted( () => {
  getPostsData()
})

//Make Delete
/* const firebaseDeleteSingleItem = async(id) => {
  //debugger
  await deleteDoc(doc(db, "posts", id));
  console.log("Data deleted", id)
}  */

/* const postDataRef = collection(db, "posts")
const getPostsData = () => {
  onSnapshot(postDataRef, (snapshot) => {
    posts.value = snapshot.docs.map(doc => {
      console.log("is it reaching this step")
      return {
        ...doc.data(),
        id: doc.id
      }
      })
  })
  } */

/* const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    posts.value.push({ 
    ...doc.data(), 
    id: doc.id 
  }) 


  console.log(doc.id, " => ", doc.data());*/
 
 
  //let addPostInfo = ref ('')
  
</script>

