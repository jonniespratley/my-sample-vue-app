<docs>
## This is an Example About Page component.
</docs>

<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <p>This component has scoped styles and uses SASS for the pre-processor!</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to the About Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about{
  h1{
    font-weight: normal;
    color: #42b983;
  }
  p{
    padding: 1rem;
  }
}

</style>
