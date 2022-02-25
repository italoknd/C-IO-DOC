<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: "App",
  components:{
    Navbar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600&family=Roboto:wght@100;400&display=swap');

* {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

:root{
  --letter-color: #F2F2F2;
  --secundary-letter-color: #E2E8E9;
  --main-color: #0477BF;
  --secundary-color: #0468BF;
}

#app{
  background: #dafaff;
}
</style>
