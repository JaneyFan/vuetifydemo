<template>
  <div class="about">
    <v-btn class="bg-green-lighten-3" @click="isOpen = true">Add New Post</v-btn>
    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <NewPostView @close="isOpen = false">

        </NewPostView>
    </div>
  </teleport>
  </div>
</template>


<script setup> 
import { ref } from 'vue'
import NewPostView from './NewPostView.vue'

const isOpen = ref(false)
</script>

<style lang="scss">

.about {
  height: 100vh;
}

.root {
  position: relative;
}

.modal {
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color: rgb(0,0,0,0.5);
  z-index:1;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.modal > div {
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 64px;
  width:95%;
}

#floatyClose {
  position: fixed;
  top:96px;
  left:-5px;
  z-index: 99;
}

</style>  
