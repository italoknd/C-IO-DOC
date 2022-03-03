<template>
  <div>
    <form class="column g-3 needs-validation" @submit="send">
      <div class="row">
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label"
            >Nome Completo:</label
          >
          <input
            v-model="person.fullName"
            type="text"
            class="form-control"
            id="validationCustom01"
          />
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">CPF:</label>
          <input
            v-model="person.cpf"
            v-maska="'###.###.###-##'"
            type="text"
            class="form-control"
            id="validationCustom02"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Telefone:</label>
          <input
            v-model="person.tel"
            v-maska="'(##) # ####-####'"
            type="tel"
            class="form-control"
            id="validationCustom02"
          />
        </div>
        <div class="col-md-4">
          <label for="validationCustom04" class="form-label"
            >Informe o tipo de documento:</label
          >
          <select
            class="form-select"
            id="validationCustom04"
            v-model="person.doctype"
          >
            <option selected disabled value="">Escolha...</option>
            <option v-for="doc in doctypes" :key="doc.id">
              {{ doc.type }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Pendências <span id="obs">(Caso haja alguma)</span>:</label
          >
          <textarea
            v-model="person.pendencies"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label for="" class="form-label">Data de entrega estimada: </label>
          <input
            type="date"
            name=""
            class="form-control"
            v-model="person.date"
          />
        </div>
      </div>
      <div class="col-12">
        <button type="submit">
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Enviar</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditarDados',
  data() {
    return {
      person: {
        fullName: '',
        cpf: '',
        tel: '',
        pendencies: '',
        date: '',
        doctype: ''
      }
    }
  }
}
</script>
