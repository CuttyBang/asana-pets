<template lang="html">
  <div id="cbSiteWrapper">

    <!-- Header component -->
    <Header/>

    <div id="cbSiteContent">
      <div id="cbThumbGrid" class="flexible">
        <div class="flexible-item" v-for="doggo in doggos">
          <!--
          Thumbnail component.
          Using url instead of static files for ease of use, and a more realistic scenario.
          also altered json data to include 'title' in order to show each dog's name,
          url and title passed as props to the Thumb.vue component.
          -->
          <Thumb :source="doggo.source" :title="doggo.title"/>
        </div>
      </div>
    </div>

    <!-- Footer component -->
    <Footer/>

  </div>
</template>

<script>
//import json data
import * as data from '../dogs.json';
//import components
import Thumb from './components/Thumb.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Footer,
    Header,
    Thumb
  },
  data() {
    return {
      doggos: data.dogs //create reference of json
    }
  }
}
</script>

<style lang="scss">
#cbSiteWraper{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 15px;
  #cbSiteContent {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    width: 90%;
    padding: 25px;
  }
}
#cbThumbGrid {
  max-width: 90vw;
  height: auto;
  margin: 0 auto;
}

</style>
