<template>
  <v-toolbar app dense dark fixed :clipped-left="clipped" color="light-blue">
    <!-- <v-toolbar-side-icon @click="SET_DRAWER(!drawer)"/> -->
    <img src="../../static/logo_sysa_white.png" width="133" style="margin-top: -2px;">
    <v-toolbar-items>
      <template v-for="(item, i) in items">
        <v-badge :key="i" color="red">
          <span slot="badge">!</span>
          <v-icon small :to="item.to">{{ item.icon }}</v-icon>
        </v-badge>
      </template>
    </v-toolbar-items>
    <v-spacer/>
    <v-btn icon small @click="handleFullScreen()">
      <v-icon>fullscreen</v-icon>
    </v-btn>
    <v-btn icon smal>
      <v-icon>account_circle</v-icon>
    </v-btn>
    <v-btn icon smal>
      <v-icon>settings</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      items: []
    }
  },
  computed: {
    ...mapGetters(['drawer', 'clipped'])
  },
  methods: {
    ...mapMutations(['SET_DRAWER', 'SET_CLIPPED']),
    handleFullScreen() {
      let doc = window.document
      let docEl = doc.documentElement
      let requestFullScreen =
        docEl.requestFullscreen ||
        docEl.mozRequestFullScreen ||
        docEl.webkitRequestFullScreen ||
        docEl.msRequestFullscreen
      let cancelFullScreen =
        doc.exitFullscreen ||
        doc.mozCancelFullScreen ||
        doc.webkitExitFullscreen ||
        doc.msExitFullscreen
      if (
        !doc.fullscreenElement &&
        !doc.mozFullScreenElement &&
        !doc.webkitFullscreenElement &&
        !doc.msFullscreenElement
      ) {
        requestFullScreen.call(docEl)
      } else {
        cancelFullScreen.call(doc)
      }
    }
  }
}
</script>
