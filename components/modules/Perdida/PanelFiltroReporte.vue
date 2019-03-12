<template>
  <v-toolbar class="titulo elevation-0">
    <v-toolbar-title class="subheading">Perdida elaboracion</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-divider class="ml-3 mr-3" vertical/>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-select
        v-model="equiposPerdida"
        prepend-icon="assignment_late"
        :items="itemsEquipos"
        label="Equipos:"
        class="elemento-panel"
        multiple
      >
        <template slot="selection" slot-scope="{ item, index }">
          <v-chip v-if="index === 0">
            <span>{{ item }}</span>
          </v-chip>
          <span v-if="index === 1" class="grey--text caption">+ otros</span>
        </template>
      </v-select>
      <v-select
        v-model="turnoPerdida"
        prepend-icon="query_builder"
        :items="['Todos', 'Mañana', 'Tarde', 'Noche']"
        label="Turno perdida:"
        class="elemento-panel"
      >
        <template slot="selection" slot-scope="{ item }">
          <v-chip>
            <span>{{ item }}</span>
          </v-chip>
        </template>
      </v-select>
      <v-select
        v-model="mesPerdida"
        prepend-icon="query_builder"
        :items="['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nombiembre', 'Diciembre']"
        label="Mes:"
        class="elemento-panel"
      >
        <template slot="selection" slot-scope="{ item }">
          <v-chip>
            <span>{{ item }}</span>
          </v-chip>
        </template>
      </v-select>
      <v-select
        v-model="anoPerdida"
        prepend-icon="query_builder"
        :items="['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2039']"
        label="Año:"
        class="elemento-panel"
      >
        <template slot="selection" slot-scope="{ item }">
          <v-chip>
            <span>{{ item }}</span>
          </v-chip>
        </template>
      </v-select>
      <v-divider class="ml-3 mr-3" vertical/>
      <v-btn dark icon flat color="purple">
        <v-icon>sync</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style scoped>
.titulo {
  border-radius: 4px;
}
.elemento-panel {
  width: 16vw;
}
</style>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      equiposPerdida: [
        'Mixer 1000',
        'Mixer 2000',
        'Mixer 4000',
        'Mixer 5000',
        'Mixer 6000',
        'Mixer 8000'
      ],
      mesPerdida: 'Enero',
      anoPerdida: '2019',
      turnoPerdida: 'Todos',
      menu: false,
      fechaPerdida: moment().format('YYYY-MM-DD'),
      itemsEquipos: [
        'Mixer 1000',
        'Mixer 2000',
        'Mixer 3000',
        'Mixer 4000',
        'Mixer 5000',
        'Mixer 6000',
        'Mixer 7000',
        'Mixer 8000'
      ]
    }
  }
}
</script>