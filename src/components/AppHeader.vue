<template>
  <header>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>MyPortfolioSite</v-toolbar-title>
      <v-tabs>
        <v-tab v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">
          {{ menuItem.name }}
        </v-tab>
        <v-tab @click="logout">ログアウト</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
    >
      <v-list nav dense>
        <v-list-item
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.url"
          >
          <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-btn depressed color="error" @click="logout">ログアウト</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
  },
  methods: {
    logout () {
      this.$store.commit('reset')
      this.$router.go({ path: '/', force: true })
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
