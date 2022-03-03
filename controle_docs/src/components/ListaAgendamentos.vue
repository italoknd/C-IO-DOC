<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th class="col">Nome:</th>
          <th class="col">CPF:</th>
          <th class="col-4">Data de entrega estimada:</th>
          <th class="col-1">Ações:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people" :key="person.id">
          <td>{{ person.fullName }}</td>
          <td>{{ person.cpf }}</td>
          <td>{{ person.date }}</td>
          <td>
            <div>
              <router-link
                :to="{ name: 'EditarDados', params: { id: person.id } }"
              >
                <div>
                  <button type="submit">Editar</button>
                </div>
              </router-link>
              <!-- <select name="" id="">
                <option value="" selected>Pendente</option>
                <option value="">Entregue</option>
              </select> -->
              <div>
                <button>Entregue</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PeopleServices from '../services/PeopleServices'

export default {
  name: 'Edit',
  data() {
    return {
      people: []
    }
  },
  mounted() {
    this.findAllPeople()
  },
  methods: {
    findAllPeople() {
      PeopleServices.findAll()

        .then(response => {
          this.people = response.data
          console.log(this.people)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
button {
  font-family: inherit;
  font-size: 15px;
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
  margin-bottom: 10px;
}
</style>
