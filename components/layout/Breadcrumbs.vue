<template>
  <div class="breadcrumbs">
    <v-breadcrumbs :items="breadcrumbs">
      <v-icon slot="divider">forward</v-icon>
    </v-breadcrumbs>
  </div>
</template>

<style scoped>
.breadcrumbs {
  background-color: #eceff1;
  border: 1px solid #c4d1da;
  border-radius: 3px;
  margin: 10px 10px 0px 10px;
}
</style>


<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['breadcrumbs'])
  }
}
</script>

