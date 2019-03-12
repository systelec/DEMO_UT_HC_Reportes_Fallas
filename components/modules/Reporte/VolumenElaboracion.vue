<template>
  <div>
    <v-layout row wrap>
      <template v-for="(item, index) in equiposReporte">
        <v-flex :key="index" xs2>
          <v-card class="elevation-0 grey lighten-4">
            <v-layout row wrap>
              <v-flex xs12>
                <div class="headline blue-grey--text text-xs-center">{{item.equipo}}</div>
              </v-flex>
              <v-flex xs6>
                <div class="item-panel">
                  <div class="display-1 blue--text text-xs-center">{{item.volumenTotal}}</div>
                  <div class="subheading blue-grey--text text-xs-center">Toneladas</div>
                </div>
              </v-flex>
              <v-flex xs6>
                <div>
                  <div class="display-1 blue--text text-xs-center">{{item.cantidadBatch}}</div>
                  <div class="subheading blue-grey--text text-xs-center">Batch</div>
                </div>
              </v-flex>
              <v-flex xs12 class="mx-3">
                <v-progress-linear color="green" height="20" :value="item.eficienciaTotal">
                  <strong class="white--text">{{item.eficienciaTotal}} %</strong>
                </v-progress-linear>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </div>
</template>

<style scoped>
.item-panel {
  border-right: 1px solid #2196f3;
}
</style>

<script>
export default {
  data() {
    return {
      equiposReporte: [
        {
          equipo: 'Mixer 1000',
          volumenTotal: 128,
          cantidadBatch: 20,
          eficienciaTotal: 60
        },
        {
          equipo: 'Mixer 2000',
          volumenTotal: 100,
          cantidadBatch: 12,
          eficienciaTotal: 90
        },
        {
          equipo: 'Mixer 4000',
          volumenTotal: 0,
          cantidadBatch: 0,
          eficienciaTotal: 0
        },
        {
          equipo: 'Mixer 5000',
          volumenTotal: 24,
          cantidadBatch: 3,
          eficienciaTotal: 70
        },
        {
          equipo: 'Mixer 6000',
          volumenTotal: 10,
          cantidadBatch: 5,
          eficienciaTotal: 90
        },
        {
          equipo: 'Mixer 8000',
          volumenTotal: 0,
          cantidadBatch: 0,
          eficienciaTotal: 0
        }
      ]
    }
  }
}
</script>

