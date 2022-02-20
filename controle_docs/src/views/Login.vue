<template>
  <div>
    <h1>Faça o Login</h1>
    <input type="text" placeholder="Usuário" />
    <input type="text" placeholder="Senha" />
    <button type="submit">
      <a href="index.html" target="_blank" rel="next">Entrar</a>
    </button>
  </div>
</template>

<script>

export default {
  name: "Login",
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

:root {
  --background-color: #00b4d8;
  --button-color: ;
  --login-box: ;
}

body {
  background-color: rgba(35, 35, 255, 0.699);
  font-family: Arial, Helvetica, sans-serif;
}

main {
  background-color: rgba(2, 2, 2, 0.747);
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 100px;
  transform: translate(-50%, -50%);
  border-radius: 2%;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.356);
}

main h1 {
  margin-bottom: 25px;
}

main input {
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  outline: none;
  font-size: 1rem;
}

main button {
  display: flex;
  justify-content: center;
  padding: 10px;
  border: none;
  background-color: rgb(16, 16, 255);
  color: white;
  transition: 0.4s;
  width: 100%;
  border-radius: 3px;
  font-size: 1rem;
}

main button:hover {
  background-color: rgb(0, 0, 194);
  border-radius: 20px;
}

a {
  text-decoration: none;
}

a:visited {
  color: white;
}
</style>
