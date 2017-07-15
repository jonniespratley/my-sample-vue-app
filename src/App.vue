<template>
  <div id="app">

    <header>
      <div class="ui menu ">
        <div class="header item">
          Sample Vue App
        </div>
        <router-link to="/cars" class="item">
          Cars
        </router-link>
        <router-link to="/about" class="item">
          About
        </router-link>


      </div>
    </header>
  	<section class="ui padded">
  	  <router-view></router-view>
  	</section>
    <footer>Global Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style src="./styles/global.scss" lang="scss"></style>
