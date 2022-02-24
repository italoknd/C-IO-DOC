<template>
  <div id="component">
    <form action="">
      <div class="row">
        <div class="column">
          <div class="row">
            <div class="input-field">
              <label for="completeName">Nome Completo: </label>
              <input
                id="completeName"
                type="text"
                placeholder="Informe o nome aqui"
              />
            </div>
            <div class="input-field">
              <label for="CPF">CPF: </label>
              <input id="CPF" type="tel" placeholder="Informe o CPF aqui" />
            </div>
          </div>
          <div class="input-field">
            <label for="tel">Telefone: </label>
            <input id="tel" type="tel" placeholder="Informe o Telefone aqui" />
          </div>
          <div id="doctype">
            <label for="doctype">Selecione o tipo de documento: </label>
            <select name="doctype" id="doctype">
              <option value="" selected disabled>Escolha um</option>
              <option value="">RG</option>
              <option value="">CPF</option>
              <option value="">Espelho</option>
            </select>
          </div>
          <div id="date-input">
            <label for="">Data de entrega estimada: </label>
            <input type="date" name="" id="" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Agendar'
}
</script>

<style scoped>

</style>
