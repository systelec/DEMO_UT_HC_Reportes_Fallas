<template>
  <div>
    <v-card class="carta grey lighten-3 elevation-1">
      <v-card-title class="headline pa-2">
        <v-icon :color="equipo.eficiencia.color">{{equipo.eficiencia.icon}}</v-icon>
        <v-spacer/>
        <h6 class="blue-grey--text">{{equipo.nombre}}</h6>
        <v-spacer/>
        <!-- <v-icon @click="verHistorialEquipo(equipo)">history</v-icon> -->
      </v-card-title>
      <v-card-text class="pt-0">
        <v-layout align-center justify-center>
          <v-progress-circular
            :rotate="360"
            :size="170"
            :width="15"
            :value="equipo.eficiencia.valor"
            :color="equipo.eficiencia.color"
          >
            <h1 :class="`${equipo.eficiencia.color}--text`">{{ equipo.eficiencia.valor }} %</h1>
          </v-progress-circular>
        </v-layout>
      </v-card-text>
      <v-card-actions class="blue-grey lighten-4 pa-1">
        <v-chip class="estado" :color="equipo.estado.color" text-color="white">
          <v-avatar :class="`${equipo.estado.color} darken-3`">
            <v-icon>{{equipo.estado.icon}}</v-icon>
          </v-avatar>
          <span>{{equipo.estado.nombre}}</span>
        </v-chip>
      </v-card-actions>
    </v-card>
    <historial-equipo v-if="modalHistorialEquipo" :equipo="equipo"/>
  </div>
</template>

<script>
import HistorialEquipo from '@/components/modules/Dashboard/HistorialEquipo'
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: {
    equipo: {
      type: Object,
      required: true
    }
  },

  components: {
    HistorialEquipo
  },

  data() {
    return {
      configEficiencia: {
        Eficiencia: 0,
        Color: 'black',
        Icon: ''
      }
    }
  },

  computed: {
    ...mapGetters(['modalHistorialEquipo'])
  },

  methods: {
    ...mapMutations(['SET_EQUIPO', 'MODAL_HISTORIAL_EQUIPO']),
    verHistorialEquipo(equipo) {
      this.SET_EQUIPO(equipo)
      this.MODAL_HISTORIAL_EQUIPO(true)
    }
  }
}
</script>

<style scoped>
.estado {
  width: 100%;
}
.carta {
  border-radius: 4px;
}
</style>
