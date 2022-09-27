<template>
  <v-app>
    <v-card>
    <v-layout>
      <v-navigation-drawer
      permanent
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
            permanent
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="/">
            <v-list-item prepend-icon="mdi-pencil-outline" title="Home" value="myfiles"></v-list-item>
          </router-link>
          <router-link to="/about">
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared Posts" value="shared"></v-list-item>
          </router-link>
          <router-link to="/editpostsview">
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
          </router-link> 
          <!-- <router-link to="/registerview">
            <v-list-item prepend-icon="mdi-star" title="Register" value="starred"></v-list-item>
          </router-link>  -->
          <router-link to="/loginview">
            <v-list-item prepend-icon="mdi-star" title="Log-in" value="starred"></v-list-item>
          </router-link> 
          <router-link to="/navguardview">
            <v-list-item prepend-icon="mdi-star" title="NavGuard" value="starred"></v-list-item>
          </router-link> 

          <span v-if="isLoggedin">
             <v-btn @click.prevent="logOut()">Logout</v-btn> 
          </span>
        </v-list>
      </v-navigation-drawer>

      <v-main class="ma-2">
          <Suspense>
            <router-view></router-view>
          </Suspense>
        </v-main>
    </v-layout>
  </v-card>
  </v-app>
</template>

<script setup>

import {ref, onMounted} from 'vue';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import useUsers from '@/modules/useUsers';
const {logOut} = useUsers();

let auth
const isLoggedin = ref(false)

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedin.value = true
      
     
    } else {
      isLoggedin.value = false
      
    }
  });
})
  

</script>

<style lang="scss">
  .v-main {
    min-height: 100vh;
  }
</style>
