<template>

  <table class="table">
  <thead>
    <tr>
      <th scope="col">Numero de Pregunta</th>
      <th scope="col">Respuestas</th>
    </tr>
  </thead>
  <tbody v-for="pregunta in preguntas" :key="pregunta.numero">
    <tr>
      <td>{{pregunta.numero}}</td>
      <td>{{pregunta.respuestas}}</td>
    </tr>
  </tbody>
</table>

</template>

<script >

  export default  {
    name: 'src-components-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas: [
          {numero: 1 , respuestas: ['c']},
           {numero: 2 , respuestas: ['c']},
            {numero: 3 , respuestas: ['b']}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-respuestas {

  }
</style>
