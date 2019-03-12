<template>
  <v-container grid-list-md text-xs-center fluid flex-child pa-0>
    <v-layout row wrap>
      <v-flex xs12>
        <tabla-batch-sin-declarar-perdidas/>
      </v-flex>
      <v-flex xs12>
        <tabla-batch-ultimas-perdidas-declaradas/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
</style>

<script>
import TablaBatchSinDeclararPerdidas from '@/components/modules/Batch/TablaBatchSinDeclararPerdidas'
import TablaBatchUltimasPerdidasDeclaradas from '@/components/modules/Batch/TablaBatchUltimasPerdidasDeclaradas'
export default {
  components: {
    TablaBatchSinDeclararPerdidas,
    TablaBatchUltimasPerdidasDeclaradas
  }
}
</script>
