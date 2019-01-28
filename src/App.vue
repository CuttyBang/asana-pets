<template lang="html">
  <div>
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
export default {
  components: {
    Footer,
    Header
  },
  name: 'app',
  }
</script>

<style lang="scss">
</style>
