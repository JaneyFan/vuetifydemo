<template>
    <div v-if="isLoggedin">
        only show if user is logged in      
    </div>
    <h1>Hello</h1>
    
</template>

<script setup>
import {onMounted} from 'vue';   
import useUsers from '@/modules/useUsers';
const {isLoggedin, isLoggedinTest} = useUsers();

/* import useUsers from '@/modules/useUsers';
const {logOut} = useUsers(); */
/* const user =localStorage.getItem('userLoginInfoFireBase'); */
/* import {onMounted} from 'vue';

import useUsers from '@/modules/useUsers'; */

/* const {isLoggedin, isLoggedIntest} = useUsers();

let auth
const isLoggedin = ref(false)

onMounted(() => {
  isLoggedIntest()
  });


 */
 onMounted(() => {
  isLoggedinTest()
  });
</script>


