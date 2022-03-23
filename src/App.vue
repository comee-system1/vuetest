<template>
  <v-app>
    <app-header/>
    <v-content>
      <Home/>
    </v-content>
    <app-footer/>
  </v-app>
</template>
<script>
import AppHeader from './components/AppHeader.vue'
import Home from './components/Home.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Home,
    AppFooter
  }
}
</script>
