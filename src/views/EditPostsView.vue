<template>
  <div>
    <h1>
      Edit Posts Page
    </h1>
      
    <!-- Assignment: create a dynamic data -->
    <v-card class="bg-teal-lighten-5 pa-5 text-grey-darken-4">
      <h3 class="text-grey-darken-2 py-1">New post:</h3>

      <QuillEditor toolbar="full" theme="snow" v-model:content="AddItemData.description" 
      placeholder="Enter content"
      contentType="html" 
      ref="myEditor"
      />      
      
      <!-- <h3>New Post:</h3>
      <v-form>
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
      </v-form> -->


    <v-btn class="bg-green-lighten-3" @click="firebaseAddSingleItem()">Add Dynamic Data</v-btn>   
    </v-card>

    <v-card class="bg-amber-lighten-4 text-grey-darkn-4 ma-5 pa-4" v-for="post in posts" :key="post">
      <h5>Post ID: {{post.id}}</h5>

      <QuillEditor toolbar="full" theme="snow" v-model:content = "post.description" contentType="html"/>
      <!-- <v-form>
            <v-text-field
            color="secondary"
            label="Title"
            variant="solo"
            placeholder="Enter a title"
            v-model="post.title"
            density="compact"
            >
            </v-text-field>
            <v-text-field
            color="secondary"
            label="Description"
            variant="solo"
            placeholder="Enter a description"
            v-model="post.description"
            density="compact"
            >
            </v-text-field>
            <v-text-field
            color="secondary"
            label="Quote Number"
            variant="solo"
            placeholder="Enter a quote number"
            v-model="post.quotenumber"
            density="compact"
            >
            </v-text-field>
      </v-form> -->

      <v-btn class="bg-red-lighten-3" @click="firebaseDeleteSingleItem(post.id)">Delete item</v-btn>
      <v-btn class="bg-blue-lighten-3" @click="firebaseUpdateSingleItem(post.id)">Edit item (static)</v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import { onMounted } from 'vue'
import usePosts from '../modules/usePosts'


const { 
  posts,
  myEditor,
  AddItemData, 
  getPostsData, 
  firebaseDeleteSingleItem, 
  firebaseAddSingleItem, 
  firebaseUpdateSingleItem 
} = usePosts()

onMounted( () => {
  getPostsData() 
})


  
</script>

