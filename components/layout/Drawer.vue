<template>
  <v-navigation-drawer
    class="blue-grey lighten-5"
    mini-variant
    :value="drawer"
    :clipped="clipped"
    fixed
    app
  >
    <v-toolbar dark flat dense color="light-blue darken-1">
      <v-list-tile-title class="title">
        <img src="../../static/logo_white.png" width="30">
      </v-list-tile-title>
    </v-toolbar>

    <v-divider></v-divider>
    <v-list>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        @click="activaBreadcurmbs(item)"
      >
        <v-list-tile-action>
          <v-badge :key="i" color="red">
            <span v-if="item.badge" slot="badge">!</span>
            <v-icon :color="activeRuoter(item.to)">{{ item.icon }}</v-icon>
          </v-badge>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
</style>


<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      items: [
        {
          icon: 'dashboard',
          title: 'Dashboard',
          to: '/dashboard',
          badge: false
        },
        {
          icon: 'assignment_turned_in',
          title: 'Declaracion de perdidas',
          to: '/declaracion_perdidas',
          badge: true
        },
        {
          icon: 'assignment',
          title: 'Listado de perdidas',
          to: '/perdidas',
          badge: false
        },
        {
          icon: 'assessment',
          title: 'Reportes',
          to: '/reportes',
          badge: false
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['drawer', 'clipped'])
  },
  methods: {
    ...mapMutations(['SET_DRAWER', 'SET_CLIPPED', 'SET_BREADCRUMBS']),
    activeRuoter(to) {
      if (this.$route.path === to) {
        return 'blue darken-2'
      }
      return 'blue-grey lighten-2'
    },
    activaBreadcurmbs(item) {
      this.SET_BREADCRUMBS(item.breadcrumbs)
    }
  }
}
</script>
