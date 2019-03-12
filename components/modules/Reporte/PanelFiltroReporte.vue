<template>
  <v-toolbar class="titulo elevation-0">
    <v-toolbar-title class="subheading">Reporte elaboracion</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-divider class="ml-3 mr-3" vertical/>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-select
        v-model="equiposReporte"
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
        v-model="tipoReporte"
        prepend-icon="assignment_late"
        :items="['Diario', 'Semanal', 'Mensual']"
        label="Tipo de reporte:"
        class="elemento-panel"
      >
        <template slot="selection" slot-scope="{ item }">
          <v-chip>
            <span>{{ item }}</span>
          </v-chip>
        </template>
      </v-select>
      <v-select
        v-model="turnoReporte"
        prepend-icon="query_builder"
        :items="['Todos', 'Mañana', 'Tarde', 'Noche']"
        label="Turno reporte:"
        class="elemento-panel"
      >
        <template slot="selection" slot-scope="{ item }">
          <v-chip>
            <span>{{ item }}</span>
          </v-chip>
        </template>
      </v-select>
      <v-menu
        ref="menu"
        v-if="tipoReporte != 'Actual'"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="fechaReporte"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="fechaReporte"
          label="Picker in menu"
          prepend-icon="event"
          class="mt-2"
          readonly
        ></v-text-field>
        <v-date-picker
          :type="tipoReporte == 'Diario' || tipoReporte == 'Semanal' ? 'date' : 'month'"
          v-model="fechaReporte"
          no-title
          scrollable
          locale="es-es"
        >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancelar</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(fechaReporte)">OK</v-btn>
        </v-date-picker>
      </v-menu>
      <v-divider class="ml-3 mr-3" vertical/>
      <v-btn dark icon flat color="purple">
        <v-icon>sync</v-icon>
      </v-btn>
      <v-btn dark icon flat color="red">
        <v-icon>picture_as_pdf</v-icon>
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
      equiposReporte: [
        'Mixer 1000',
        'Mixer 2000',
        'Mixer 4000',
        'Mixer 5000',
        'Mixer 6000',
        'Mixer 8000'
      ],
      tipoReporte: 'Diario',
      turnoReporte: 'Todos',
      menu: false,
      fechaReporte: moment().format('YYYY-MM-DD'),
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