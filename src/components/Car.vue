<docs>
## This is an Example  Page component.
</docs>

<template>
  <div class="car">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>



    <div v-if="car" class="details">
      <h2> {{car.year}} {{ car.make }} {{car.model}}</h2>
      <p>{{ car.image }}</p>
    </div>
  </div>
</template>
<script>
import CarsService from '@/services/CarsService'
export default {
  name: 'car',
  data () {
    return {
      loading: false,
      car: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    console.log('beforeRouteEnter', to, from)
    CarsService.getCar(to.params.carId).then((resp) => {
      next(vm => vm.setData(null, resp))
    })
  },
  beforeRouteUpdate (to, from, next) {
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, for a route with dynamic params /foo/:id, when we
    // navigate between /foo/1 and /foo/2, the same Foo component instance
    // will be reused, and this hook will be called when that happens.
    // has access to `this` component instance.
    console.log('beforeRouteUpdate', to, from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
    console.log('beforeRouteLeave')
    next()
  },
  methods: {
    setData (err, data) {
      console.log('setData', err, data)
      if (err) {
        this.error = err.toString()
      } else {
        this.car = data
      }
    }
  }
}
</script>

<style src="../styles/global.scss" lang="scss"></style>
<style scoped lang="scss">
.car {
    h1 {
        font-weight: normal;
        color: #42b983;
    }
    p {
        padding: 1rem;
    }
}
</style>
