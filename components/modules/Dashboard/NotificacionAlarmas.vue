<template>
  <v-card class="carta blue-grey lighten-5 elevation-0 pa-1">
    <template v-for="(alarma, i) in alarmas">
      <v-alert :key="i" class="pa-2" :value="true" :color="alarma.tipo" :icon="alarma.icon" outline>
        <v-layout row wrap>
          <v-flex xs12>
            <strong>{{alarma.equipo.nombre}}:</strong>
            <span>{{alarma.nombre}}</span>
          </v-flex>
          <strong class="grey--text">{{alarma.duracion}} min</strong>
          <span class="ml-5 grey--text">{{alarma.fecha}}</span>
        </v-layout>
      </v-alert>
    </template>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      alarmas: [
        {
          nombre: 'Falla Valvula VA1000',
          duracion: 10,
          fecha: '2019-02-26 10:00:00',
          tipo: 'info',
          icon: 'info',
          equipo: {
            nombre: 'Mixer 1000'
          }
        },
        {
          nombre: 'Falla Valvula VA1000',
          duracion: 100,
          fecha: '2019-02-26 10:00:00',
          tipo: 'error',
          icon: 'error',
          equipo: {
            nombre: 'Mixer 1000'
          }
        },
        {
          nombre: 'Falla Valvula VA1000',
          duracion: 40,
          fecha: '2019-02-26 10:00:00',
          tipo: 'warning',
          icon: 'warning',
          equipo: {
            nombre: 'Mixer 1000'
          }
        },
        {
          nombre: 'Falla Valvula VA1000',
          duracion: 10,
          fecha: '2019-02-26 10:00:00',
          tipo: 'info',
          icon: 'info',
          equipo: {
            nombre: 'Mixer 1000'
          }
        },
        {
          nombre: 'Falla Valvula VA1000',
          duracion: 10,
          fecha: '2019-02-26 10:00:00',
          tipo: 'info',
          icon: 'info',
          equipo: {
            nombre: 'Mixer 1000'
          }
        },
        {
          nombre: 'Falla Valvula VA1000',
          duracion: 10,
          fecha: '2019-02-26 10:00:00',
          tipo: 'info',
          icon: 'info',
          equipo: {
            nombre: 'Mixer 1000'
          }
        },
        {
          nombre: 'Falla Valvula VA1000',
          duracion: 10,
          fecha: '2019-02-26 10:00:00',
          tipo: 'info',
          icon: 'info',
          equipo: {
            nombre: 'Mixer 1000'
          }
        },
        {
          nombre: 'Falla Valvula VA1000',
          duracion: 10,
          fecha: '2019-02-26 10:00:00',
          tipo: 'info',
          icon: 'info',
          equipo: {
            nombre: 'Mixer 1000'
          }
        },
        {
          nombre: 'Falla Valvula VA1000',
          duracion: 10,
          fecha: '2019-02-26 10:00:00',
          tipo: 'info',
          icon: 'info',
          equipo: {
            nombre: 'Mixer 1000'
          }
        },
        {
          nombre: 'Falla Valvula VA1000',
          duracion: 10,
          fecha: '2019-02-26 10:00:00',
          tipo: 'info',
          icon: 'info',
          equipo: {
            nombre: 'Mixer 1000'
          }
        },
        {
          nombre: 'Falla Valvula VA1000',
          duracion: 10,
          fecha: '2019-02-26 10:00:00',
          tipo: 'info',
          icon: 'info',
          equipo: {
            nombre: 'Mixer 1000'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.carta {
  height: 92vh;
  overflow-y: scroll;
}
</style>

