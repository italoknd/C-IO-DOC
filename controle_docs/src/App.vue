<template>
  <div id="nav">
    <router-link to="/login">Login</router-link>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view/>
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
