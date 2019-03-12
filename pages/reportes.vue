<template>
  <v-container grid-list-lg text-xs-center fluid flex-child pa-0>
    <v-layout row wrap>
      <v-flex xs12>
        <panel-filtro-reporte/>
      </v-flex>
      <v-flex xs12>
        <v-divider class="mt-2 mb-2"/>
      </v-flex>
      <v-flex xs12>
        <volumen-elaboracion/>
      </v-flex>
      <v-flex xs12>
        <matriz-perdidas/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
</style>

<script>
import PanelFiltroReporte from '@/components/modules/Reporte/PanelFiltroReporte'
import VolumenElaboracion from '@/components/modules/Reporte/VolumenElaboracion'
import MatrizPerdidas from '@/components/modules/Reporte/MatrizPerdidas'
export default {
  components: {
    PanelFiltroReporte,
    VolumenElaboracion,
    MatrizPerdidas
  },
  data() {
    return {}
  }
}
</script>
