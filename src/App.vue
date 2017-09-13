<template>
  <div id="app">
    <div class="main-body">
      <navbar></navbar>
      <div class="container-fluid">
        <router-view></router-view>  
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/_partial/NavBar'

export default {
  name: 'app',
  components: {Navbar}
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';

.main-body {
  margin: 65px 0 0 0;
}
</style>
