<template>
  <div class="app">
    <Header />
    <plots />
  </div>
</template>

<script>
import plots from './components/plots.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    plots,
  },
  data() {
    return {
      values:{
        type:'confirmacion',
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
