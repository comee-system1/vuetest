<template>
  <section class="about">
    <app-background-holder :title="title"/>
    <v-container>
      <v-row justify="center">
        <v-col md=5 class="text-center">
          <h2>ログイン</h2>
          <v-form ref="form" @submit.prevent>
            <v-text-field v-model="user.userId" label="user_id" ></v-text-field>
            <v-text-field v-model="user.password" label="password" ></v-text-field>
            <v-btn depressed @click="submit" color="primary">LOGIN</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'

export default {
  data () {
    return {
      title: 'LOGIN',
      user: {}
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('auth', {
        userId: this.user.userId,
        userToken: 'dummy token'
      })
      this.$router.push(this.$route.query.redirect)
    }
  },
  components: {
    AppBackgroundHolder
  }
}
</script>
