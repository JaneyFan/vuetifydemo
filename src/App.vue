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

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">

v.main{
  min-height: 100vh;
}
  
</style>
