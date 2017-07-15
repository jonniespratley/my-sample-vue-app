<docs>
## This is an Example  Page component.
</docs>

<template>
<div class="cars">
  <h1>{{ msg }}</h1>
  <p>This component has scoped styles and uses SASS for the pre-processor!</p>
</div>
</template>

<script>
export default {
  name: 'cars',
  data () {
    return {
      msg: 'Welcome to the Page'
    }
  },
  beforeRouteEnter (to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    console.log('beforeRouteEnter')
  },
  beforeRouteUpdate (to, from, next) {
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, for a route with dynamic params /foo/:id, when we
    // navigate between /foo/1 and /foo/2, the same Foo component instance
    // will be reused, and this hook will be called when that happens.
    // has access to `this` component instance.
    console.log('beforeRouteUpdate')
  },
  beforeRouteLeave (to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
    console.log('beforeRouteLeave')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about {
    h1 {
        font-weight: normal;
        color: #42b983;
    }
    p {
        padding: 1rem;
    }
}
</style>
