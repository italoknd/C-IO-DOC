<template>
  <div id="editar-dados">
    <form class="column g-3 needs-validation" @submit="send">
      <div class="row">
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label"
            >Nome Completo:</label
          >
          <input
            v-model="schedule.fullName"
            type="text"
            class="form-control"
            id="validationCustom01"
          />
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">CPF:</label>
          <input
            v-model="schedule.cpf"
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
            v-model="schedule.phone"
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
            v-model="schedule.typeDocument"
          >
            <!-- <option selected>{{ schedule.typeDocument }}</option> -->
            <option disabled>Escolha...</option>
            <!-- <option v-for="doc in typeDocuments" :key="doc.id">
              {{ doc.type }}
            </option> -->
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Pendências <span id="obs">(Caso haja alguma)</span>:</label
          >
          <textarea
            v-model="schedule.pendencyDescription"
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
            v-model="schedule.expectedDate"
          />
        </div>
      </div>
      <div class="col-12">
        <button type="submit">Atualizar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditarDados',
  data() {
    return {
      schedule: {
        fullName: '',
        cpf: '',
        phone: '',
        pendencyDescription: '',
        expectedDate: '',
        typeDocument: ''
      },

      typeDocuments: [
        { id: 1, text: 'RG' },
        { id: 2, text: 'CPF' },
        { id: 3, text: 'Espelho' }
      ]
    }
  },

  mounted() {
    this.findAllSchedules()
  },

  methods: {
    findAllSchedules() {
      axios
        .get(
          `https://api-controle-docs.herokuapp.com/schedules/${this.$route.params.id}`
        )
        .then(res => {
          const {
            fullName,
            cpf,
            phone,
            pendencyDescription,
            expectedDate,
            typeDocument
          } = res.data;

            (this.schedule.fullName = fullName),
            (this.schedule.cpf = cpf),
            (this.schedule.phone = phone),
            (this.schedule.pendencyDescription = pendencyDescription),
            (this.schedule.expectedDate = expectedDate),
            (this.schedule.typeDocument = typeDocument)

          console.log(fullName)
        })
    }
  }
}
</script>

<style scoped>
#editar-dados {
  min-height: 100vh;
  width: 88vw;
  margin: auto;
  max-width: 1000px;
  min-width: 400px;
  background: #dafaff;
}

form {
  border: 1px solid rgba(0, 0, 0, 0.384);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.384);
}

label,
span {
  font-weight: 600;
}

#obs {
  font-weight: normal;
}

.row,
button {
  margin-bottom: 30px;
}

button {
  font-family: inherit;
  font-size: 20px;
  background: var(--main-color);
  color: white;
  padding: 0.5em 2em;
  padding-left: 1em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s;
  margin-top: 20px;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  transform: translateX(-0.4em) rotate(45deg) scale(1.1);
}

button:hover span {
  transform: translateX(0.5em);
}

button:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.2em);
  }

  to {
    transform: translateY(-0.2em);
  }
}
</style>
