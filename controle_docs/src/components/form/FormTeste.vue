<template>
  <div>
    <h1>{{ dados.name }}</h1>
    <!-- <h2>{{ publicacao.sub }}</h2> -->
    <!-- <form action="">
      <div>
        <label for="">Email: </label>
        <input type="text" v-model="dados.localEmail"/>
      </div>
      <div>
        <label for="">Senha: </label>
        <input type="text" v-model="dados.localSenha"/>
      </div>
      {{teste}}
    </form> -->
  </div>
</template>

<script>
export default {
  name: 'FormTeste',

  data() {
    return {
      datas: {
        email: '1212',
        senha: '222222222'
      }
    }
  },

  props: {
    // dados: {
    //   localEmail: {
    //     type: String,
    //     default: ''
    //   },
    //   localSenha: {
    //     type: String,
    //     default: ''
    //   },
    // },
    dados:{
      type: Object,

      default: {
        name: '',
      },
    }
  },

  methods: {
    teste(){
      console.log(this.publicacao)
    }
  },
}
</script>
