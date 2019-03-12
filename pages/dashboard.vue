<template>
  <v-layout row wrap>
    <v-flex xs9>
      <v-layout row wrap>
        <template v-for="(equipo, i) in equipos">
          <v-flex :key="i" xs3 pa-1>
            <estado-equipo :equipo="equipo"/>
          </v-flex>
        </template>
      </v-layout>
    </v-flex>
    <v-flex xs3>
      <notificacion-alarmas/>
    </v-flex>
  </v-layout>
</template>

<script>
import EstadoEquipo from '@/components/modules/Dashboard/EstadoEquipo'
import NotificacionAlarmas from '@/components/modules/Dashboard/NotificacionAlarmas'
export default {
  components: {
    EstadoEquipo,
    NotificacionAlarmas
  },
  data() {
    return {
      equipos: [
        {
          nombre: 'Mixer 1000',
          eficiencia: {
            valor: 90,
            color: 'green',
            icon: 'trending_up'
          },
          estado: {
            valor: 1,
            nombre: 'Marcha',
            color: 'green',
            icon: 'done'
          }
        },
        {
          nombre: 'Mixer 2000',
          eficiencia: {
            valor: 70,
            color: 'green',
            icon: 'trending_up'
          },
          estado: {
            valor: 1,
            nombre: 'Parado',
            color: 'red',
            icon: 'close'
          }
        },
        {
          nombre: 'Mixer 3000',
          eficiencia: {
            valor: 50,
            color: 'cyan',
            icon: 'trending_flat'
          },
          estado: {
            valor: 1,
            nombre: 'Marcha',
            color: 'green',
            icon: 'done'
          }
        },
        {
          nombre: 'Mixer 4000',
          eficiencia: {
            valor: 20,
            color: 'orange',
            icon: 'trending_down'
          },
          estado: {
            valor: 1,
            nombre: 'Sin pedido de producto',
            color: 'grey',
            icon: 'query_builder'
          }
        },
        {
          nombre: 'Mixer 5000',
          eficiencia: {
            valor: 60,
            color: 'cyan',
            icon: 'trending_flat'
          },
          estado: {
            valor: 1,
            nombre: 'Marcha',
            color: 'green',
            icon: 'done'
          }
        },
        {
          nombre: 'Mixer 6000',
          eficiencia: {
            valor: 50,
            color: 'cyan',
            icon: 'trending_flat'
          },
          estado: {
            valor: 1,
            nombre: 'Marcha',
            color: 'green',
            icon: 'done'
          }
        },
        {
          nombre: 'Mixer 7000',
          eficiencia: {
            valor: 90,
            color: 'green',
            icon: 'trending_up'
          },
          estado: {
            valor: 1,
            nombre: 'Marcha',
            color: 'green',
            icon: 'done'
          }
        },
        {
          nombre: 'Mixer 8000',
          eficiencia: {
            valor: 95,
            color: 'green',
            icon: 'trending_up'
          },
          estado: {
            valor: 1,
            nombre: 'Marcha',
            color: 'green',
            icon: 'done'
          }
        }
      ]
    }
  }
}
</script>
