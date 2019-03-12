<template>
  <v-app>
    <drawer/>
    <tool-bar/>
    <v-content class="grey lighten-2">
      <!-- <breadcrumbs/> -->
      <div class="contenido">
        <nuxt/>
      </div>
    </v-content>
    <vue-snotify/>
  </v-app>
</template>

<style scoped>
.contenido {
  margin: 10px;
}
</style>

<script>
import ToolBar from '@/components/layout/ToolBar'
import Drawer from '@/components/layout/Drawer'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { mapMutations } from 'vuex'
export default {
  components: {
    ToolBar,
    Drawer,
    Breadcrumbs
  },
  data() {
    return {}
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    ...mapMutations(['SET_WINDOW', 'SET_MODAL_SIZE', 'SET_MODA_FULL_SCREEN']),
    handleResize() {
      const width = window.innerWidth
      const height = window.innerHeight
      this.SET_WINDOW({ width, height })

      if (width <= 960) {
        this.SET_MODAL_SIZE('100%')
        this.SET_MODA_FULL_SCREEN(true)
      } else {
        this.SET_MODAL_SIZE('600')
        this.SET_MODA_FULL_SCREEN(false)
      }
    }
  }
}
</script>
