<template>
  <router-view />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
    setup() {
      document.title = 'Hexit';
    },
  });
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Squada+One:400,700&display=swap');

  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1 {
    font-family: 'squada one', Helvetica, Arial, sans-serif;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
