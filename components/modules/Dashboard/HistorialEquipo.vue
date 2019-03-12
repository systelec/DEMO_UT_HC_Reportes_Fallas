<template>
  <v-dialog v-model="modalHistorialEquipo" width="800">
    <v-card>
      <v-card-title class="headline pa-2">
        <v-icon color="blue">event_available</v-icon>
        <v-spacer/>
        <h6 class="blue-grey--text">Historial de equipo durante el ultimo turno/dia</h6>
        <v-spacer/>
        <v-icon @click="MODAL_HISTORIAL_EQUIPO(false)">close</v-icon>
      </v-card-title>
      <v-container style="max-width: 600px;">
        <v-timeline dense clipped>
          <v-timeline-item fill-dot class="white--text mb-5" color="orange" large>
            <span slot="icon">JL</span>
            <v-text-field
              v-model="input"
              hide-details
              flat
              label="Leave a comment..."
              solo
              @keydown.enter="comment"
            >
              <template slot="append">
                <v-btn class="mx-0" depressed @click="comment">Post</v-btn>
              </template>
            </v-text-field>
          </v-timeline-item>

          <v-slide-x-transition group>
            <v-timeline-item
              v-for="event in timeline"
              :key="event.id"
              class="mb-3"
              color="pink"
              small
            >
              <v-layout justify-space-between>
                <v-flex xs7 v-text="event.text"></v-flex>
                <v-flex xs5 text-xs-right v-text="event.time"></v-flex>
              </v-layout>
            </v-timeline-item>
          </v-slide-x-transition>

          <v-timeline-item class="mb-4" hide-dot>
            <span>TODAY</span>
          </v-timeline-item>

          <v-timeline-item class="mb-3" color="grey" icon-color="grey lighten-2" small>
            <v-layout justify-space-between>
              <v-flex xs7>This order was archived.</v-flex>
              <v-flex xs5 text-xs-right>15:26 EDT</v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item class="mb-3" small>
            <v-layout justify-space-between>
              <v-flex xs7>
                <v-chip class="white--text ml-0" color="purple" label small>APP</v-chip>Digital Downloads fulfilled 1 item.
              </v-flex>
              <v-flex xs5 text-xs-right>15:25 EDT</v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item class="mb-3" color="grey" small>
            <v-layout justify-space-between>
              <v-flex xs7>Order confirmation email was sent to John Leider (john@vuetifyjs.com).</v-flex>
              <v-flex xs5 text-xs-right>15:25 EDT</v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item class="mb-3" hide-dot>
            <v-btn class="mx-0" color="white">Resend Email</v-btn>
          </v-timeline-item>

          <v-timeline-item class="mb-3" color="grey" small>
            <v-layout justify-space-between>
              <v-flex xs7>A $15.00 USD payment was processed on PayPal Express Checkout</v-flex>
              <v-flex xs5 text-xs-right>15:25 EDT</v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="grey" small>
            <v-layout justify-space-between>
              <v-flex xs7>John Leider placed this order on Online Store (checkout #1937432132572).</v-flex>
              <v-flex xs5 text-xs-right>15:25 EDT</v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      events: [],
      input: null,
      nonce: 0
    }
  },

  computed: {
    ...mapGetters(['modalHistorialEquipo']),
    timeline() {
      return this.events.slice().reverse()
    }
  },

  methods: {
    ...mapMutations(['MODAL_HISTORIAL_EQUIPO']),
    comment() {
      const time = new Date().toTimeString()
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(
          /:\d{2}\sGMT-\d{4}\s\((.*)\)/,
          (match, contents, offset) => {
            return ` ${contents
              .split(' ')
              .map(v => v.charAt(0))
              .join('')}`
          }
        )
      })

      this.input = null
    }
  }
}
</script>