<template>
  <div id="login">
    <main>
      <h1>Faça o Login</h1>
      <input type="text" placeholder="Usuário" />
      <input type="text" placeholder="Senha" />
      <button type="submit">
        <a href="index.html" target="_blank" rel="next">Entrar</a>
      </button>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
#login{
  animation: slide 3s;
  height: 85vh;
  background: #dafaff;
}

@keyframes slide {
  0%{
    transform: translateY(-100%);
  }50%{
    transform: translateY(20%);
  }100%{
    transform: translateY(-9%);
  }
}

main {
  background-color: rgba(14, 14, 14, 0.808);
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 100px;
  transform: translate(-50%, -50%);
  border-radius: 2%;
  box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.356);
}

main h1 {
  margin-bottom: 25px;
}

main input {
  display: flex;
  margin-bottom: 10px;
  padding: 10px 22px;
  outline: none;
  font-size: 1rem;
}

input::placeholder{
  color: var();
}

main button {
  display: flex;
  justify-content: center;
  padding: 10px;
  border: none;
  background-color: var(--secundary-color);
  color: white;
  transition: 0.4s;
  width: 100%;
  border-radius: 3px;
  font-size: 1rem;
}

main button:hover {
  background-color: var(--main-color);
  border-radius: 20px;
}

a {
  text-decoration: none;
  color: white;
}

a:visited {
  color: white;
}
</style>
