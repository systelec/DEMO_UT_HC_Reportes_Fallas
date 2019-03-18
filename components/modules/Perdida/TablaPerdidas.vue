<template>
  <div>
    <v-toolbar dense class="elevation-0 carta-superior">
      <v-toolbar-title class="subheading">Perdidas de eleaboraciones</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn icon flat>
          <v-icon>get_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card class="carta-inferior elevation-0">
      <v-data-table
        :headers="headers"
        :items="items"
        :rows-per-page-items="[20]"
        class="elevation-0"
      >
        <template slot="items" slot-scope="props">
          <tr :class="props.index % 2 ? '': 'blue-grey lighten-5'">
            <td class="text-xs-left blue-grey--text">
              <strong>{{ props.item.Ref_SE }}</strong>
            </td>
            <td class="text-xs-left">{{ props.item.Mixer }}</td>
            <td class="text-xs-left">{{ props.item.Volumen }}</td>
            <td class="text-xs-left">{{ props.item.Marca }}</td>
            <td class="text-xs-left">{{ props.item.Tecnologia }}</td>
            <td class="text-xs-left">{{ props.item.Fecha_Inicio + ' ' + props.item.Inicio }}</td>
            <td class="text-xs-left">{{ props.item.Fecha_Final + ' ' + props.item.Final }}</td>
            <td class="text-xs-left">{{ props.item.BCT }} min</td>
            <td class="text-xs-left orange--text">{{ props.item.Diferencia }} min</td>
            <td class="text-xs-left"></td>
            <td>
              <div>
                <v-btn dark small icon flat color="blue" @click="verInformacionBatch(props.item)">
                  <v-icon>chrome_reader_mode</v-icon>
                </v-btn>
              </div>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
    <informacion-batch v-if="modalInformacionBatch" :batch="batchSeleccionado"/>
    <declarar-perdida-batch v-if="modalDeclararPerdidaBatch" :batch="batchSeleccionado"/>
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
import { mapGetters, mapMutations } from 'vuex'
import InformacionBatch from '@/components/modules/Perdida/InformacionBatch'
import batch from '@/api/batch.json'
export default {
  components: {
    InformacionBatch
  },
  data() {
    return {
      headers: [
        { text: 'Producto', value: 'Ref_SE', align: 'left' },
        { text: 'Mixer', value: 'Mixer', align: 'left' },
        { text: 'Volumen', value: 'Volumen', align: 'left' },
        { text: 'Tecnologia', value: 'Tecnologia', align: 'left' },
        { text: 'Envío_A', value: 'Envío_A', align: 'left' },
        { text: 'Inicio', value: 'Fecha_Inicio', align: 'left' },
        { text: 'Fin', value: 'Fecha_Final', align: 'left' },
        { text: 'BCT', value: 'BCT', align: 'left' },
        { text: 'Duracion', value: 'Duracion', align: 'left' },
        { text: '', value: '' }
      ],
      items: batch,
      batchSeleccionado: null,
      dialogInformacionBatch: false
    }
  },

  computed: {
    ...mapGetters(['modalInformacionBatch', 'modalDeclararPerdidaBatch'])
  },

  created() {
    this.items = this.items.filter(item => !item.Perdida_Declarada)
  },

  methods: {
    ...mapMutations([
      'MODAL_INFORMACION_BATCH',
      'MODAL_DECLARAR_PERDIDA_BATCH'
    ]),
    verInformacionBatch(item) {
      this.batchSeleccionado = item
      this.MODAL_INFORMACION_BATCH(true)
    },
    declararPerdidaBatch(item) {
      this.batchSeleccionado = item
      this.MODAL_DECLARAR_PERDIDA_BATCH(true)
    }
  }
}
</script>