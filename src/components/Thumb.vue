<!-- Thumbnail component -->
<template lang="html">
  <div class="cb_imageBox">
    <div class="cb_thumbBox">
      <div class="cb_thumb">
        <img v-img :src="source" :alt="'Puppy available for adoption named ' + title"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['source','title']
}
</script>

<style lang="scss">

.cb_thumb {
  position: relative;
  top: 0;
  left: 0;
  width: auto;
  height: 300px;
  cursor: pointer;
  img {
    height: 100%;
    width: auto;
    margin: auto;
    display: block;
  }
}

</style>
