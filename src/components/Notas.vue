<template>
  <div class="container-fluid mt-3">
  <div class="jumbotron">
    <vue-form :state="formState" @submit.prevent="onSubmit">
 
    <validate tag="div" class="my-3">
      <span>Nombre </span>
      <input v-model.trim="formData.nombre" :minlength="minLength" :maxlength="maxLength" v-model="formData.nombre" type="text" required name="nombre" />
 
      <field-messages show="$dirty" name="nombre">
        <div slot="required" class="alert alert-danger mt-1">El nombre es un campo requerido</div>
        <div slot="minlength" class="alert alert-danger mt-1">El minimo es de 3 caracteres</div>
        <div slot="maxlength" class="alert alert-danger mt-1">El maximo es de 15 caracteres</div>
      </field-messages>
    </validate>
 
    <validate tag="div" class="my-3">
      <span>Apellido </span>
      <input v-model.trim="formData.apellido" :minlength="minLength" :maxlength="maxLength" v-model="formData.apellido" name="apellido" type="text" required />
 
      <field-messages show="$dirty" name="apellido">
        <div slot="required" class="alert alert-danger mt-1">El Apellido es un campo requerido</div>
        <div slot="minlength" class="alert alert-danger mt-1">El minimo es de 3 caracteres</div>
        <div slot="maxlength" class="alert alert-danger mt-1">El maximo es de 15 caracteres</div>
      </field-messages>
    </validate>

    <validate tag="div" class="my-3">
      <span class="mx-2">Nota </span>
      <input :min="minValue" :max="maxValue" v-model="formData.nota" name="nota" type="number" required />
 
      <field-messages show="$dirty" name="nota">
        <div slot="required" class="alert alert-danger mt-1">La nota es un campo requerido</div>
        <div slot="min" class="alert alert-danger mt-1">Ingrese un valor mayor a 1</div>
        <div slot="max" class="alert alert-danger mt-1">Ingrese un valor menor a 10</div>
      </field-messages>
    </validate>

    
 
    <button type="submit" class="my-3" @click="enviar()" :disabled="formState.$invalid">Enviar</button>
  </vue-form>

  <table class="table">
  <thead>
    <tr>
      <th scope="col">Alumno</th>
      <th scope="col">Nota</th>
    </tr>
  </thead>
  <tbody >
  <tr :style="{color : setearColor(nota.nota)}" v-for="(nota,index) in notas" :key="index">
    <!-- :style="{backgroundColor : pago.estilo}" -->
      <th scope="col">{{nota.nombre + ' ' + nota.apellido}}</th>
      <th scope="col">{{nota.nota}}</th>
      
  </tr>

  <tr :style="{color : setearColor(this.calcularPromedio())}">
      <th scope="row">Promedio</th>
      <td>{{this.calcularPromedio()}}</td>
    </tr>
      
  </tbody>
</table>
  </div>
</div>
</template>

<script >

  export default  {
    name: 'src-components-notas',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {

        },
        formData : this.getInicialData() ,
        notas: [],
        minLength: 3,
        maxLength: 15,
        minValue: 1,
        maxValue: 10
      }
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',
          apellido: '',
          nota: ''
        }
      },

      enviar() {
        this.notas.push(this.formData)
        this.formData = this.getInicialData()
        this.formState._reset()
      },

      calcularPromedio() {
        let acum = 0
        let cont = 0

        this.notas.forEach(n => {
          acum += parseInt(n.nota)
          cont++
        });

       return acum > 0 ? acum/cont :  0
      },
      setearColor(nota) {
        let color = ''

        if (nota < 4) {
          color = '#f0072e'
        } else if ( nota < 7) {
          color = 'yellow'
        } else {
          color = '#0ff54c'
        }

        return color
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-notas {

  }
</style>
