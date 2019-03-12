<template>
  <div>
    <v-toolbar dense class="carta-superior elevation-0">
      <v-toolbar-title class="subheading">Matriz de perdidas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn icon flat>
          <v-icon>get_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card class="carta-inferior elevation-0">
      <v-layout row wrap>
        <v-flex xs4>
          <v-data-table
            :headers="headers"
            :items="items"
            :rows-per-page-items="[5]"
            class="elevation-0"
          >
            <template slot="items" slot-scope="props">
              <tr v-if="props.item" :class="props.index % 2 ? '': 'blue-grey lighten-5'">
                <td class="text-xs-left blue-grey--text" style="cursor: pointer;">
                  <strong>{{ props.item.Equipo }}</strong>
                </td>
                <td>{{ props.item.Motivo }}</td>
                <td>{{ props.item.Duracion }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
        <v-flex xs8>
          <grafico-matriz-perdidas/>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<style scoped>
.carta-superior {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.carta-inferior {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>

<script>
import GraficoMatrizPerdidas from '@/components/modules/Reporte/GraficoMatrizPerdidas'
export default {
  components: {
    GraficoMatrizPerdidas
  },
  data() {
    return {
      headers: [
        { text: 'Equipo', value: 'Equipo' },
        { text: 'Motivo', value: 'Motivo' },
        { text: 'Duracion', value: 'Duracion' }
      ],
      items: [
        {
          Equipo: 'Mixer 1000',
          Motivo: 'Falla Eléctrica',
          Duracion: 320
        },
        {
          Equipo: 'Mixer 2000',
          Motivo: 'Falla Eléctrica',
          Duracion: 302
        },
        {
          Equipo: 'Mixer 4000',
          Motivo: 'Falla Eléctrica',
          Duracion: 301
        },
        {
          Equipo: 'Mixer 5000',
          Motivo: 'Falla Eléctrica',
          Duracion: 334
        },
        {
          Equipo: 'Mixer 6000',
          Motivo: 'Falla Eléctrica',
          Duracion: 390
        },
        {
          Equipo: 'Mixer 8000',
          Motivo: 'Falla Eléctrica',
          Duracion: 330
        },
        {
          Equipo: 'Mixer 1000',
          Motivo: 'Calidad de Materias Primas',
          Duracion: 120
        },
        {
          Equipo: 'Mixer 2000',
          Motivo: 'Calidad de Materias Primas',
          Duracion: 132
        },
        {
          Equipo: 'Mixer 4000',
          Motivo: 'Calidad de Materias Primas',
          Duracion: 101
        },
        {
          Equipo: 'Mixer 5000',
          Motivo: 'Calidad de Materias Primas',
          Duracion: 134
        },
        {
          Equipo: 'Mixer 6000',
          Motivo: 'Calidad de Materias Primas',
          Duracion: 90
        },
        {
          Equipo: 'Mixer 8000',
          Motivo: 'Calidad de Materias Primas',
          Duracion: 230
        },
        {
          Equipo: 'Mixer 1000',
          Motivo: 'Sanitización planeada',
          Duracion: 220
        },
        {
          Equipo: 'Mixer 2000',
          Motivo: 'Sanitización planeada',
          Duracion: 182
        },
        {
          Equipo: 'Mixer 4000',
          Motivo: 'Sanitización planeada',
          Duracion: 191
        },
        {
          Equipo: 'Mixer 5000',
          Motivo: 'Sanitización planeada',
          Duracion: 234
        },
        {
          Equipo: 'Mixer 6000',
          Motivo: 'Sanitización planeada',
          Duracion: 290
        },
        {
          Equipo: 'Mixer 8000',
          Motivo: 'Sanitización planeada',
          Duracion: 330
        },
        {
          Equipo: 'Mixer 1000',
          Motivo: 'Falla de Proceso',
          Duracion: 150
        },
        {
          Equipo: 'Mixer 2000',
          Motivo: 'Falla de Proceso',
          Duracion: 212
        },
        {
          Equipo: 'Mixer 4000',
          Motivo: 'Falla de Proceso',
          Duracion: 201
        },
        {
          Equipo: 'Mixer 5000',
          Motivo: 'Falla de Proceso',
          Duracion: 154
        },
        {
          Equipo: 'Mixer 6000',
          Motivo: 'Falla de Proceso',
          Duracion: 190
        },
        {
          Equipo: 'Mixer 8000',
          Motivo: 'Falla de Proceso',
          Duracion: 330
        }
      ]
    }
  }
}
</script>
