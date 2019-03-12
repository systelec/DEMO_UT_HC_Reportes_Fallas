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
        <tabla-perdidas/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
</style>

<script>
import PanelFiltroReporte from '@/components/modules/Perdida/PanelFiltroReporte'
import TablaPerdidas from '@/components/modules/Perdida/TablaPerdidas'
export default {
  components: {
    PanelFiltroReporte,
    TablaPerdidas
  },
  data() {
    return {}
  }
}
</script>
