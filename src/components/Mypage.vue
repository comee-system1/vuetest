<template>
  <div>
  <h3>Welcome {{ $store.state.userId}}</h3>
  <p>{{message}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  created: function () {
    this.fetchHello()
  },
  methods: {
    fetchHello () {
      // const uri = 'http://innovation-gate.jp/test.php'
      // this.axios.get(uri).then(response => {
      //   this.message = response.data.message
      // })
      this.message = '成功'
    }
  }
}
</script>
