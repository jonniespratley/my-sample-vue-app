<docs>
  #Hello Component
  This is the docs block inside the `Hello.vue` file.
</docs>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
       <li><router-link to="/cars">Go to Cars</router-link></li>
    </ul>
  
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
