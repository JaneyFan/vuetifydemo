import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc } from "firebase/firestore";

const usePosts = () => {
    const posts = ref([]) 
    const postDataRef = collection(db, "posts")

    const AddItemData = ref({})

    const myEditor = ref('')
    let snackbar = ref(false)

    //add dynamic data to Firebase
  const firebaseAddSingleItem = async()=> {
    await addDoc(collection(db, "posts"), {
     //   title: AddItemData.value.addPostTitle,
        description: AddItemData.value.description,
     //   quoteNumber: AddItemData.value.addPostQuoteNumber
    }).then(()=>{
      //AddItemData.value = ref({})
      myEditor.value.setContents('')
      snackbar.value=true

    })
  }

    //Grab data from firebase (realtime)
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
  }

 
  //forminput

  //updateDoc
  const firebaseUpdateSingleItem = async(id)=> {
    await updateDoc(doc(postDataRef, id), {
        title: posts.value.find(post => 
          post.id === id).title,
        description: posts.value.find(post => 
          post.id === id).description,
        quoteNumber: posts.value.find(post => 
          post.id === id).quoteNumber        
    })
} 
  
  //add static data to Firebase
  /* const firebaseAddSingleItem = async()=> {
    await addDoc(collection(db, "posts"), {
        title: "Test Title",
        Description: "Test Description",
        quoteNumber: 1
    })
} */

 

  //Make Delete
    const firebaseDeleteSingleItem = async(id) => {  
      // debugger
    await deleteDoc(doc(db, "posts", id));
    console.log("Data deleted", id)
} 

    return {
        firebaseDeleteSingleItem,
        getPostsData,
        firebaseAddSingleItem,
        firebaseUpdateSingleItem,
        posts,
        AddItemData,
        snackbar,
        myEditor
      }
}

export default usePosts
