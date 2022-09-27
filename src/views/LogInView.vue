<template>
    <div>
        <v-row>
            <v-col md="6" xs="4" offset-lg1>
                <h1>Administrator Login</h1>

                <div class="info">
                    <v-text-field
                        v-model="email"
                        label="Email"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        label="Password"
                        required
                    ></v-text-field>
                    <v-btn 
                        @click.prevent="logIn()"
                        color="success"
                    >Login</v-btn>
                    <v-btn 
                        @click.prevent="logOut()"
                        color="error"
                    >logOut</v-btn>

                </div>
            </v-col>
        </v-row>
    </div>
    
  </template>

<script setup>
import useUsers from '@/modules/useUsers';
const {logIn, email, password, logOut} = useUsers();
</script>
