<template>
  <v-dialog v-model="modalDeclararPerdidaBatch" width="1400">
    <v-card>
      <v-card-title class="headline pa-2">
        <v-icon color="blue">event_available</v-icon>
        <v-spacer/>
        <h6 class="blue-grey--text">Declarar perdida</h6>
        <v-spacer/>
        <v-icon @click="MODAL_DECLARAR_PERDIDA_BATCH(false)">close</v-icon>
      </v-card-title>

      <v-card-text class="pa-1">
        <v-container grid-list-md fluid flex-child pa-2>
          <v-layout flex-child wrap>
            <v-flex xs12>
              <v-container class="info grey lighten-4" grid-list-md fluid flex-child pa-2>
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
                    <v-text-field
                      disabled
                      label="Descripcion"
                      v-model="batch.Descripción"
                      readonly
                    />
                  </v-flex>
                  <v-flex xs12 v-if="verMasInfoBatch">
                    <v-layout row wrap>
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
                        <v-text-field
                          disabled
                          label="Tecnologia"
                          v-model="batch.Tecnologia"
                          readonly
                        />
                      </v-flex>
                      <v-flex xs3>
                        <v-text-field disabled label="Envío_A" v-model="batch.Envío_A" readonly/>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          disabled
                          label="Nro_Orden"
                          v-model="batch.Nro_Orden"
                          readonly
                        />
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field disabled label="Turno" v-model="batch.Turno" readonly/>
                      </v-flex>
                      <v-flex xs1></v-flex>
                      <v-flex xs2>
                        <v-text-field
                          disabled
                          label="Fecha_Inicio"
                          v-model="batch.Fecha_Inicio"
                          readonly
                        />
                      </v-flex>
                      <v-flex xs1>
                        <v-text-field disabled label="Inicio" v-model="batch.Inicio" readonly/>
                      </v-flex>
                      <v-flex xs1></v-flex>
                      <v-flex xs2>
                        <v-text-field
                          disabled
                          label="Fecha_Final"
                          v-model="batch.Fecha_Final"
                          readonly
                        />
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
                        <v-text-field
                          disabled
                          label="Diferencia"
                          v-model="batch.Diferencia"
                          readonly
                        />
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12>
                    <span
                      class="blue--text"
                      @click="verMasInfoBatch = !verMasInfoBatch"
                      style="cursor: pointer;"
                    >{{ !verMasInfoBatch ? 'ver mas ...' : 'ver menos ...' }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-divider class="mt-2 mb-2" horizontal/>
            </v-flex>

            <v-flex xs6 d-flex>
              <v-card class="alarmas grey lighten-4 elevation-0">
                <v-container grid-list-md fluid flex-child pa-2>
                  <v-layout row wrap>
                    <span class="blue-grey--text">Infomarcion alarmas generadas sistema:</span>
                    <v-list dense two-line class="grey lighten-4" style="width: 100%;">
                      <template v-for="(item, index) in batch.Alarmas">
                        <v-list-tile
                          class="alarmas"
                          :key="index"
                          avatar
                          :disabled="item.Declarada"
                          @click="declararPerdida(item)"
                        >
                          <v-list-tile-avatar>
                            <v-icon color="pink">add_alert</v-icon>
                          </v-list-tile-avatar>

                          <v-list-tile-content>
                            <v-list-tile-title v-html="`<strong>${item.Descripcion}</strong>`"></v-list-tile-title>
                            <v-list-tile-sub-title
                              v-html="`<strong>Duracion</strong>: ${item.Duracion} min - <strong>Fecha</strong>: ${item.Fecha}`"
                            ></v-list-tile-sub-title>
                          </v-list-tile-content>

                          <v-spacer/>

                          <v-list-tile-avatar>
                            <v-icon v-if="item.Declarada" color="green">done</v-icon>
                          </v-list-tile-avatar>
                        </v-list-tile>
                      </template>
                    </v-list>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>

            <v-flex xs6 d-flex>
              <v-card class="alarmas grey lighten-4 elevation-0">
                <v-container grid-list-md fluid flex-child pa-2>
                  <v-layout row wrap>
                    <span class="blue-grey--text">Infomarcion de motivos declarados:</span>
                    <v-spacer/>
                    <v-icon color="green" class="pr-4" @click="agregarMotivoPerdida()">add</v-icon>
                    <v-list dense two-line class="grey lighten-4" style="width: 100%;">
                      <template v-for="(item, index) in batch.Perdidas">
                        <v-list-tile
                          class="alarmas"
                          :key="index"
                          avatar
                          @click="declararPerdida(item)"
                        >
                          <v-list-tile-avatar>
                            <v-icon color="pink">hourglass_empty</v-icon>
                          </v-list-tile-avatar>

                          <v-list-tile-content>
                            <v-list-tile-title v-html="`<strong>${item.Motivo}</strong>`"></v-list-tile-title>
                            <v-list-tile-sub-title
                              v-html="`<strong>Duracion</strong>: ${item.Duracion} min - <strong>Alarma</strong>: ${item.Alarma ? item.Alarma.Descripcion : ''} (${item.Alarma ? item.Alarma.Fecha : 'Sin alarma asociada'})`"
                            ></v-list-tile-sub-title>
                          </v-list-tile-content>

                          <v-spacer/>

                          <v-list-tile-avatar>
                            <v-icon color="pink">close</v-icon>
                          </v-list-tile-avatar>
                        </v-list-tile>
                      </template>
                    </v-list>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialogAsociarPerdida" width="400">
      <v-card>
        <v-card-title class="headline pa-2">
          <v-spacer/>
          <h6 class="blue-grey--text">Asociar perdida</h6>
          <v-spacer/>
          <v-icon @click="dialogAsociarPerdida = false">close</v-icon>
        </v-card-title>

        <v-card-text class="pa-3">
          <small>Seleccione una causa del menu. en caso de no encontrar una falla que coinsida con lo sucedido, tilde otra causa y agrega una personalizada</small>
          <v-combobox
            :disabled="tipoMotivo"
            v-model="motivoSeleccionado"
            :items="itemsMotivos"
            chips
            label="Motivo de perdida"
          ></v-combobox>
          <v-checkbox label="Otro motivo" v-model="tipoMotivo"></v-checkbox>
          <v-text-field
            v-if="tipoMotivo"
            label="Motivo personalizada"
            v-model="motivoPersonalizado.Motivo"
          ></v-text-field>
          <v-combobox
            v-if="tipoMotivo"
            v-model="motivoPersonalizado.Administracion"
            :items="itemsAdministracion"
            chips
            label="Administracion"
          ></v-combobox>
          <v-combobox
            v-if="tipoMotivo"
            v-model="motivoPersonalizado.Perdida"
            :items="itemsTipoPerdida"
            chips
            label="Tipo de perdida"
          ></v-combobox>
          <v-textarea label="Descripcion" v-model="motivoPersonalizado.Descripcion"></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" flat>DECLARAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<style scoped>
.info {
  border-radius: 6px;
}
.alarmas {
  border-radius: 6px;
}
</style>

<script>
import { mapGetters, mapMutations } from 'vuex'
import batch from '@/api/batch.json'
import motivo from '@/api/motivo.json'
export default {
  props: {
    batch: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      verMasInfoBatch: false,
      dialogAsociarPerdida: false,
      tipoMotivo: false,
      motivos: motivo,
      motivoSeleccionado: null,
      motivoPersonalizado: {
        Motivo: null,
        Descripcion: null
      },
      itemsMotivos: [],
      itemsAdministracion: [],
      itemsTipoPerdida: []
    }
  },

  computed: {
    ...mapGetters(['modalDeclararPerdidaBatch'])
  },

  created() {
    this.itemsMotivos = this.motivos.map(motivo => {
      motivo.text = motivo.Motivo
      return motivo
    })

    this.itemsAdministracion = this.motivos.map(motivo => motivo.Administración)
    this.itemsTipoPerdida = this.motivos.map(motivo => motivo.Perdida)
  },

  methods: {
    ...mapMutations(['MODAL_DECLARAR_PERDIDA_BATCH']),
    declararPerdida(item) {
      this.dialogAsociarPerdida = true
    },
    agregarMotivoPerdida() {}
  }
}
</script>
