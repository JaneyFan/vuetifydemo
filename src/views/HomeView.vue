<template>
  <div>
    <h1>
      Front page stuff
    </h1>

    <!-- <v-form>
      <v-text-field
      color="secondary"
      label="Title"
      variant="solo"
      placeholder="Enter a title"
      v-model="AddItemData.addPostTitle"
      >
      </v-text-field>
      <v-text-field
      color="secondary"
      label="Description"
      variant="solo"
      placeholder="Enter a description"
      v-model="AddItemData.addPostDescription"
      >
      </v-text-field>
      <v-text-field
      color="secondary"
      label="Quote Number"
      variant="solo"
      placeholder="Enter a quote number"
      v-model="AddItemData.addPostQuoteNumber"
      >
      </v-text-field>
    </v-form>

    <v-btn @click="firebaseAddSingleItem()">Add Static Data</v-btn>  -->

    <v-card class="ma-5 pa-4" v-for="post in posts" :key="post">
      <!-- <p>Title: {{post.title}}</p>
      <p v-html="post.description"></p>
      <p>QuoteNumber: {{post.quoteNumber}}</p> -->
      <p v-html="post.description"></p>    
      <p>PostID: {{post.id}}</p>
      <!-- <v-btn @click="firebaseDeleteSingleItem(post.id)">delete</v-btn>
      <v-btn @click="firebaseUpdateSingleItem(post.id)">Edit item (static)</v-btn> -->
    </v-card>
  </div>
</template>

<script setup>
//import { db } from '../firebase.js'
//import { ref } from 'vue'
import { onMounted } from 'vue'
import usePosts from '../modules/usePosts'

// let addPostInfo = ref('')

//import { collection, /* getDocs,  */doc, deleteDoc, onSnapshot} from "firebase/firestore"; 

//const posts = ref([]) 
//const {posts, getPostsData, firebaseDeleteSingleItem, firebaseAddSingleItem, firebaseUpdateSingleItem, AddItemData } = usePosts()
const { 
  posts,
  getPostsData, 
} = usePosts()

  onMounted( () => {
  getPostsData() 
})



//Make Delete
/* const firebaseDeleteSingleItem = async(id) => {
  //debugger
  await deleteDoc(doc(db, "posts", id));
  console.log("Data deleted", id)
}  */

//parttwo section
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

//main section
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

