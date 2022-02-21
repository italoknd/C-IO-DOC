<template>
  <div>
    <nav>
      <ul class="ul-style">
        <li class="list-style"><router-link to="/home">Home</router-link></li>
        <li class="list-style">
          <router-link to="/edit">Editar Registro</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

}
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 8vh;
  margin-bottom: 20px;
  background: var(--main-color);
}

ul {
  display: flex;
}

li {
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin-left: 30px;
  letter-spacing: 2px;
}

li a {
  /*estilizando router-link*/
  color: var(--letter-color);
  transition: 0.3s;
}

li a:hover {
  color: var(--secundary-letter-color);
  text-decoration: underline;
}
</style>
