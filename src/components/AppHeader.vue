<template>
  <header>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>MyPortfolioSite</v-toolbar-title>
      <v-tabs>
        <v-tab v-for="(menuItem, index) in menuItems" :key="index">
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </header>
</template>

<script>
import constants from '../common/constants'

export default {
  name: 'AppHeader',
  data () {
    return {
      drawer: false,
      menuItems: constants.menuItem
    }
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none;

  @include display_pc {
    display: block !important;
  }
}
</style>
