<template>
  <section class="home-work">
    <div class="section__title">
      <div class="section__title-text">IP CHECK</div>
    </div>
    <v-container>
      <v-row justify="center">
        <v-col md=5 class="text-center">
          <v-btn depressed color="primary" @click="getIp" >IP取得</v-btn>
          <p >{{setIp}}</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  name: 'SearchIP',
  data: function () {
    return {
      setIp: 'Writing IP'
    }
  },
  methods: {
    getIp () {
      this.axios.get('https://httpbin.org/get')
        .then((response) => {
          this.setIp = response.data.origin
        })
        .catch((e) => {
          alert(e)
        })
    }
  }
}

</script>
