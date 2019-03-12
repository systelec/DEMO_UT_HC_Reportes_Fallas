<template>
  <v-dialog v-model="modalInformacionBatch" persistent max-width="800">
    <v-card>
      <v-card-title class="headline pa-2">
        <v-icon color="blue">list</v-icon>
        <v-spacer/>
        <h6 class="blue-grey--text">Informacion de batch</h6>
        <v-spacer/>
        <v-icon @click="MODAL_INFORMACION_BATCH(false)">close</v-icon>
      </v-card-title>

      <v-card-text class="pa-2">
        <v-container class="info grey lighten-4" grid-list-md text-xs-center fluid flex-child pa-2>
          <v-layout row wrap>
            <v-flex xs4>
              <v-text-field disabled label="Elaborador" v-model="batch.Elaborador" readonly/>
            </v-flex>
            <v-flex xs1></v-flex>
            <v-flex xs3>
              <v-text-field disabled label="Referencia SAP" v-model="batch.Ref_SAP" readonly/>
            </v-flex>
            <v-flex xs1></v-flex>
            <v-flex xs3>
              <v-text-field disabled label="Referencia SE" v-model="batch.Ref_SE" readonly/>
            </v-flex>
            <v-flex xs12>
              <v-text-field disabled label="Descripcion" v-model="batch.Descripción" readonly/>
            </v-flex>
            <v-flex xs1>
              <v-text-field disabled label="Mixer" v-model="batch.Mixer" readonly/>
            </v-flex>
            <v-flex xs1>
              <v-text-field disabled label="Volumen" v-model="batch.Volumen" readonly/>
            </v-flex>
            <v-flex xs1></v-flex>
            <v-flex xs2>
              <v-text-field disabled label="Marca" v-model="batch.Marca" readonly/>
            </v-flex>
            <v-flex xs2>
              <v-text-field disabled label="Tecnologia" v-model="batch.Tecnologia" readonly/>
            </v-flex>
            <v-flex xs3>
              <v-text-field disabled label="Envío_A" v-model="batch.Envío_A" readonly/>
            </v-flex>
            <v-flex xs2>
              <v-text-field disabled label="Nro_Orden" v-model="batch.Nro_Orden" readonly/>
            </v-flex>
            <v-flex xs2>
              <v-text-field disabled label="Turno" v-model="batch.Turno" readonly/>
            </v-flex>
            <v-flex xs1></v-flex>
            <v-flex xs2>
              <v-text-field disabled label="Fecha_Inicio" v-model="batch.Fecha_Inicio" readonly/>
            </v-flex>
            <v-flex xs1>
              <v-text-field disabled label="Inicio" v-model="batch.Inicio" readonly/>
            </v-flex>
            <v-flex xs1></v-flex>
            <v-flex xs2>
              <v-text-field disabled label="Fecha_Final" v-model="batch.Fecha_Final" readonly/>
            </v-flex>
            <v-flex xs1>
              <v-text-field disabled label="Final" v-model="batch.Final" readonly/>
            </v-flex>
            <v-flex xs2>
              <v-text-field
                disabled
                label="Duración_Batch"
                v-model="batch.Duración_Batch"
                readonly
              />
            </v-flex>
            <v-flex xs2>
              <v-text-field disabled label="BCT" v-model="batch.BCT" readonly/>
            </v-flex>
            <v-flex xs1></v-flex>
            <v-flex xs2>
              <v-text-field disabled label="Diferencia" v-model="batch.Diferencia" readonly/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.info {
  border-radius: 6px;
}
</style>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: {
    batch: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters(['modalInformacionBatch'])
  },

  data() {
    return {}
  },

  methods: {
    ...mapMutations(['MODAL_INFORMACION_BATCH'])
  }
}
</script>
